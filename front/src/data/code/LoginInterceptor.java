package com.semi.tw.util.interceptor;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.servlet.HandlerInterceptor;

public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();

        // 1. 시스템 관리자(SA) 체크
        if (session.getAttribute("loginSystemAdminVo") != null) {
            return true; // SA 권한이 있으면 즉시 통과
        }

        // 2. 사원(Employee) 체크
        if (session.getAttribute("loginEmplVo") != null) {
            return true; // 사원 로그인이 되어 있으면 통체
        }

        // 3. 고객사(Customer) 체크
        if (session.getAttribute("loginCustVo") != null) {
            return true; // 고객사 로그인이 되어 있으면 통과
        }

        String ajaxHeader = request.getHeader("X-Requested-With");
        if ("XMLHttpRequest".equals(ajaxHeader)) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED); // 401 에러 반환
        } else {
            response.sendRedirect("/empl/login"); // 일반 요청은 로그인 페이지로 리다이렉트
        }

        return false;
    }
}