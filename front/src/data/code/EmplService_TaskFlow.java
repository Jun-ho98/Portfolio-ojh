package com.semi.tw.comp.empl;

import com.semi.tw.util.SessionUtil;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class EmplService {

    private final EmplMapper emplMapper;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public int join(EmplVo vo) {
        checkValidation(vo);

        String encodedPw = bCryptPasswordEncoder.encode(vo.getPw());
        vo.setPw(encodedPw);

        return emplMapper.join(vo);
    }

    private void checkValidation(EmplVo vo) {
        checkIdValid(vo.getId());
        checkPwValid(vo.getPw());
    }

    private void checkIdValid(String id) {
        if (id != null && id.length() >= 6 && id.length() <= 20) {
            return;
        }
        throw new IllegalArgumentException("[LOGIN-202] ID length");
    }

    private void checkPwValid(String pw) {
        if (pw != null && pw.length() >= 4 && pw.length() <= 12) {
            return;
        }
        throw new IllegalArgumentException("[LOGIN-203] PW length");
    }

    public EmplVo login(EmplVo vo) {
        EmplVo dbVo = emplMapper.selectById(vo.getId());
        if (dbVo == null) {
            return null;
        }
        boolean isMatch = bCryptPasswordEncoder.matches(vo.getPw(), dbVo.getPw());
        return isMatch ? dbVo : null;
    }

    public List<EmplVo> emplList(EmplVo vo) {
        return emplMapper.emplList(vo);
    }

    @Transactional
    public int emplRoleEdit(EmplVo vo, HttpSession session) {
        SessionUtil.checkPmRole(session);

        int result = emplMapper.emplRoleEdit(vo);
        if (result != 1) {
            String errMsg = "[EMPL-100] DELETE error";
            log.error(errMsg);
            throw new IllegalStateException(errMsg);
        }

        return result;
    }

    public List<EmplVo> compEmplList(String compNo) {
        return emplMapper.compEmplList(compNo);
    }

    public List<EmplVo> compDeptEmplList(EmplVo vo) {
        return emplMapper.compDeptEmplList(vo);
    }

    public List<EmplVo> compCompEmplList(EmplVo vo, HttpSession session) {
        SessionUtil.isSystemAdmin(session);
        return emplMapper.compCompEmplList(vo);
    }

    @Transactional
    public EmplVo mypageEdit(EmplVo vo, HttpSession session) {
        EmplVo loginEmplVo = SessionUtil.getLoginEmpl(session);
        vo.setNo(loginEmplVo.getNo());

        int result = emplMapper.mypageEdit(vo);
        if (result != 1) {
            throw new IllegalArgumentException("EMPL - updated fail");
        }
        return emplMapper.selectEmplByNo(vo.getNo());
    }

    public String findId(String name, String phone) {
        if (name == null || phone == null) {
            throw new IllegalArgumentException("이름과 전화번호를 확인해주세요.");
        }
        String cleanPhone = phone.replaceAll("-", "");
        return emplMapper.selectIdByNameAndPhone(name, cleanPhone);
    }

    public int checkByEmplUser(String id, String phone) {
        if (id == null || phone == null || id.isEmpty() || phone.isEmpty()) {
            throw new IllegalArgumentException("아이디와 전화번호를 정확히 입력해주세요.");
        }

        String cleanPhone = phone.replaceAll("-", "");

        int count = emplMapper.checkByEmplUser(id, cleanPhone);
        if (count != 1) {
            throw new IllegalArgumentException("입력하신 정보와 일치하는 정보가 없습니다.");
        }
        return count;
    }

    @Transactional
    public int resetPw(String id, String newPw) {
        if (id == null || newPw == null) {
            throw new IllegalArgumentException("아이디와 새 비밀번호를 확인해주세요.");
        }
        String encodedPw = bCryptPasswordEncoder.encode(newPw);

        int result = emplMapper.updateEmplPw(id, encodedPw);
        if (result != 1) {
            throw new IllegalArgumentException("비밀번호 재설정 실패");
        }
        return result;
    }
}