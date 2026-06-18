<div align="center">

#  OHjunho · Backend Developer Portfolio

**“늘 더 나은 방법을 고민하는 백엔드 개발자”**

동작하는 결과물에서 멈추지 않고, 더 효율적이고 관리하기 좋은 방법을 끝까지 고민합니다.<br/>
인증·권한 관리처럼 서비스의 신뢰를 떠받치는 영역에 강점이 있습니다.

<br/>

### 🔗 [라이브 사이트 보기 →](https://Jun-ho98.github.io/Portfolio-ojh/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styledcomponents&logoColor=white)
![Pretendard](https://img.shields.io/badge/font-Pretendard-1a1a1a)

</div>

---

## 👤 소개

늘 더 나은 방법을 고민하는 백엔드 개발자입니다. 같은 작업이 여러 곳에서 반복되거나 더 효율적으로 바꿀 여지가 보이면 그냥 지나치지 않습니다.
전공으로 기초를 다졌지만 실무 경험이 부족하다고 느껴, 실제 프로젝트에 직접 부딪히며 배우는 것을 목표로 삼았습니다.
그 과정에서 같은 작업이 여러 곳에서 반복되거나 나중에 수정이 어려워지는 경험을 하면서,
‘지금 편한 방식’보다 ‘나중에도 편한 방식’을 고민하게 되었습니다.
특히 인증과 권한 관리처럼 서비스의 신뢰를 떠받치는 영역에 관심을 두고 깊이 파고들며 성장하고 있습니다.

| | |
| --- | --- |
| **이름** | 오준호 (Oh Jun Ho) |
| **직무** | 백엔드 개발자 (신입, 풀스택 가능) |
| **교육** | KH정보교육원 AWS 클라우드 기반 DevOps 개발자 양성과정 수료 (2025.11~2026.06) |
| **학력** | 부천대학교 컴퓨터소프트웨어과 졸업 |

---

## 💪 강점

1. **반복을 줄이고 공통화하는 태도** — 여러 곳에 반복되던 처리를 한곳에서 관리하도록 묶어 정리합니다.
2. **효율을 함께 고려** — 데이터가 많아져도 느려지지 않도록 조회 기준을 미리 정리(인덱스, N+1 방지 등)합니다.
3. **유지보수하기 좋은 구조** — 도메인별 에러 코드 분리 + 전역 예외 처리로 오류 관리를 체계화합니다.

---

## 🧰 기술 스택

**Backend**
`Java 21` `Spring Boot` `Spring Security` `JPA` `QueryDSL` `PostgreSQL` `JWT (jjwt)` `AWS S3` `Gmail SMTP`

**Frontend**
`React 19` `Redux Toolkit` `styled-components` `react-router-dom v7` `Vite`

**Tools / Infra**
`IntelliJ` `VS Code` `Git` `GitHub` `pgAdmin` `Postman` `AWS (EC2 · S3 · CloudFront · Route 53)`

---

## 📁 프로젝트

### ⭐ Sloway — 워케이션 숙소·코워킹 공간 예약 플랫폼

워케이션 사용자에게 숙소·코워킹 공간 검색·예약을 제공하는 통합 플랫폼.
회원·호스트·관리자 권한을 분리하고 안전한 인증과 예약·결제를 갖춘 웹 서비스입니다.

- **기간** : 2026.04.27 ~ 2026.06.24 · **팀** : 5명 (도메인 분담)
- **담당** : 회원 / 인증 도메인 (백엔드 + 프론트엔드), 일정관리자 역할
- **GitHub** : https://github.com/bobohyeon/Sloway_Project
- **기술** : Spring Boot · Spring Security · JPA · QueryDSL · PostgreSQL · JWT · AWS S3 · Gmail SMTP / React 19 · Redux Toolkit · styled-components

**구현한 기능 (담당)**
- 이메일 인증 회원가입 (인증코드 발송·검증, 비밀번호 정책 BE/FE 이중 검증)
- JWT 로그인 + 역할별(회원·호스트·관리자) 인증 처리
- 카카오 소셜 로그인 (OAuth) + 중복 가입 방지
- 마이페이지: 정보 조회·수정(PATCH), 비밀번호 변경, 회원 탈퇴, 이메일 변경 시 재인증·자동 로그아웃
- 호스트 가입: 사업자등록증(PDF) AWS S3 업로드
- 관리자: 호스트 승인·반려·자격관리, 회원·호스트 목록(페이징), 회원 정지(7/30/영구)·해제
- 역할별 화면 접근 제어 (RoleRoute) — 백엔드 권한과 2중 방어
- 공통 보안 설정(SecurityConfig) 단독 관리

**트러블슈팅 (요약)**
- **403 권한 오류 — 가입 경로까지 막힌 문제** : 호스트 경로 전체가 잠기며 가입까지 403. 가입 경로만 분리해 `permitAll`로 두고 포괄 규칙보다 위에 배치(순서가 곧 정책)해 해결.
- **무인증 공개 API 차단** : 점검 중 인증 없이 열려 있던 경로를 발견해 권한을 명확히 지정.
- **JWT role 단일 문자 정규화 (DRY)** : 단일 문자(U/H/A) role을 `normalizeRole` 한 곳으로 모아 화면별 비교 기준을 통일.

> 💡 위 코드와 트러블슈팅은 [라이브 사이트](https://Jun-ho98.github.io/Portfolio-ojh/)의 **Work 섹션(VS Code 형태 IDE)** 에서 실제 코드로 확인할 수 있습니다.

**솔직한 한계** — 토큰 리프레시는 핵심 기능 우선 판단으로 뒤로 미뤘습니다. JWT는 stateless라 탈취 시 만료 전까지 무효화가 어렵다는 위험을 인지하고, 운영이라면 액세스 토큰을 짧게 + 리프레시 재발급 구조로 가야 한다고 정리해 두었습니다.

### TaskFlow — 사내 업무관리 그룹웨어

사원·고객·관리자 권한으로 회사·부서·프로젝트·일정을 관리하는 사내 업무관리(그룹웨어) 웹 애플리케이션.

- **기간** : 2026.02.09 ~ 2026.03.24 · **팀** : 5명 (도메인 분담)
- **담당** : 계정 / 인증 도메인 (회원가입·로그인)
- **GitHub** : https://github.com/blackbean9081-svg/TaskFlow
- **기술** : Spring Boot · Spring MVC · MyBatis · Oracle · JSP/JSTL · Spring Security(BCrypt)

**구현한 기능 (담당)**
- 사원·고객 회원가입 (ID/PW 길이 검증, 비밀번호 BCrypt 암호화)
- 로그인 (BCrypt 비밀번호 대조, 세션 저장 / 불일치 시 알람)
- 세션 기반 인증 인터셉터 (미로그인 차단 — AJAX 401 / 일반 요청 리다이렉트)
- 아이디 찾기·비밀번호 재설정 (이름·전화번호로 본인 확인)
- 마이페이지 정보 수정

> 💡 Sloway는 **stateless JWT 필터**, TaskFlow는 **세션 기반 인터셉터** — 프로젝트 구조에 맞는 인증 방식을 각각 다뤘습니다.

---

## 🖥️ 이 포트폴리오 사이트에 대하여

직접 만든 화면과 핵심 코드를 **VS Code 형태의 인터랙티브 IDE UI**로 보여주는 것이 특징입니다.
(파일 탐색기 · 에디터 탭 · 코드 하이라이팅 + 핵심 라인 콜아웃 · 화면/코드 분할 · 화면 설명/회고/트러블슈팅 터미널 · 전체화면)

### 기술 스택 (사이트 자체)
- **React 19** + **Vite 6**
- **styled-components 6** (ThemeProvider 기반 디자인 토큰, 다크 + sage 포인트)
- **react-syntax-highlighter** (PrismLight — 필요한 언어만 등록해 경량화)
- **Pretendard** (가변 폰트, CDN)

### 폴더 구조
```
Portfolio/
├─ README.md
├─ .github/workflows/        # GitHub Pages 배포 워크플로(선택)
└─ front/                    # 프론트엔드 (추후 백엔드와 분리 관리)
   ├─ index.html · vite.config.js · package.json
   └─ src/
      ├─ main.jsx · App.jsx
      ├─ data/
      │  ├─ portfolio.js      # ★ 모든 텍스트/프로젝트 데이터 (단일 소스)
      │  └─ code/             # Work 섹션에 표시되는 실제 소스 파일(?raw 로드)
      ├─ styles/              # theme(다크+sage) · GlobalStyle
      ├─ components/          # 재사용 UI + ide/ (Explorer·CodePane·BottomPanel)
      └─ sections/            # Hero·About·Skills·Projects·Workspace·Contact·Footer
```

> 💡 **설계 포인트** — 텍스트·코드·이미지는 전부 [`front/src/data/portfolio.js`](front/src/data/portfolio.js)에 모아, 화면(컴포넌트)과 내용(데이터)을 분리했습니다. 콘텐츠 추가/수정 시 JSX를 건드리지 않아도 됩니다.

### 실행 방법
```bash
cd front
npm install
npm run dev      # http://localhost:5173
npm run build    # 프로덕션 빌드 (dist/)
```

---

## 📬 Contact

- ✉️ **soooh1030@naver.com**
- 🧑‍💻 GitHub — [Sloway (팀 레포)](https://github.com/bobohyeon/Sloway_Project) · [TaskFlow](https://github.com/blackbean9081-svg/TaskFlow)

---

<div align="center">
<sub>© 오준호 (Oh Jun Ho)</sub>
</div>
