// 포트폴리오의 모든 텍스트/데이터를 모은 단일 소스(Single Source of Truth).
// 화면(컴포넌트)과 내용(데이터)을 분리해, 내용 수정 시 JSX를 건드리지 않게 합니다.
// PORTFOLIO_CONTENT.md 의 내용만 사용했고, 임의로 내용을 추가하지 않았습니다.

// Work(IDE) 섹션의 코드는 실제 소스 파일을 Vite ?raw 로 그대로 읽어옵니다.
// → 이스케이프/전사 오류 없이 정확하게 표시되며, 코드 교체 시 ./code 의 파일만 바꾸면 됩니다.
// (출처: Sloway_Project 레포의 본인 담당 도메인 — 인증/회원)
import securityConfigCode from './code/SecurityConfig.java?raw';
import authServiceCode from './code/AuthService.java?raw';
import emailServiceCode from './code/EmailService.java?raw';
import jwtUtilCode from './code/JwtUtil.java?raw';
import kakaoOAuthCode from './code/KakaoOAuthService.java?raw';
import hostJoinCode from './code/HostJoinService.java?raw';
import adminMemberCode from './code/AdminMemberService.java?raw';
import adminHostCode from './code/AdminHostService.java?raw';
import globalExceptionCode from './code/GlobalExceptionHandler.java?raw';
import memberErrorCode from './code/MemberErrorCode.java?raw';
import roleCode from './code/role.js?raw';
import roleRouteCode from './code/RoleRoute.jsx?raw';
// TaskFlow (Spring Boot + MyBatis + Oracle + JSP, 계정/인증 담당)
import emplServiceCode from './code/EmplService_TaskFlow.java?raw';
import loginInterceptorCode from './code/LoginInterceptor.java?raw';

export const profile = {
  name: 'Oh Junho',
  nameEn: 'Oh Jun Ho',
  role: '백엔드 개발자',
  roleNote: '신입 · 풀스택 가능',
  tagline: '늘 더 나은 방법을 고민하는 백엔드 개발자',
  taglineSub:
    '동작하는 결과물에서 멈추지 않고, 더 효율적이고 관리하기 좋은 방법을 끝까지 고민합니다.',
  email: 'soooh1030@naver.com',
  githubs: [
    { label: 'Sloway (팀 레포)', url: 'https://github.com/bobohyeon/Sloway_Project' },
    { label: 'TaskFlow', url: 'https://github.com/blackbean9081-svg/TaskFlow' },
  ],
  education: 'KH정보교육원 AWS 클라우드 기반 DevOps 개발자 양성과정 수료 (2025.11~2026.06)',
  school: '부천대학교 컴퓨터소프트웨어과 졸업',
};

export const about = {
  paragraphs: [
    '저는 늘 더 나은 방법을 고민하는 백엔드 개발자입니다. 같은 작업이 여러 곳에서 반복되거나 더 효율적으로 바꿀 여지가 보이면 그냥 지나치지 않습니다.',
    '전공으로 기초를 다졌지만 실무 경험이 부족하다고 느껴, 실제 프로젝트에 직접 부딪히며 배우는 것을 목표로 삼았습니다. 그 과정에서 같은 작업이 여러 곳에서 반복되거나 나중에 수정이 어려워지는 경험을 하면서, ‘지금 편한 방식’보다 ‘나중에도 편한 방식’을 고민하게 되었습니다.',
    '특히 인증과 권한 관리처럼 서비스의 신뢰를 떠받치는 영역에 관심을 두고 깊이 파고들며 성장하고 있습니다.',
  ],
  strengths: [
    {
      title: '반복을 줄이고 공통화하는 태도',
      desc: '여러 곳에 반복되던 처리를 한곳에서 관리하도록 묶어 정리합니다.',
    },
    {
      title: '효율을 함께 고려',
      desc: '데이터가 많아져도 느려지지 않도록 조회 기준을 미리 정리(인덱스 등)합니다.',
    },
    {
      title: '유지보수하기 좋은 구조',
      desc: '도메인별 에러 코드 분리 + 전역 예외 처리로 오류 관리를 체계화합니다.',
    },
  ],
};

export const skillGroups = [
  {
    category: 'Backend',
    items: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'QueryDSL',
      'PostgreSQL',
      'JWT (jjwt)',
      'AWS S3',
      'Gmail SMTP',
      'MyBatis',
      'Oracle',
      'JSP / JSTL',
    ],
  },
  {
    category: 'Frontend',
    items: ['React 19', 'Redux Toolkit', 'styled-components', 'react-router-dom v7', 'Vite'],
  },
  {
    category: 'Tools / Infra',
    items: [
      'IntelliJ',
      'VS Code',
      'Git',
      'GitHub',
      'pgAdmin',
      'Postman',
      'AWS EC2',
      'AWS S3',
      'CloudFront',
      'Route 53',
    ],
  },
];

// status: 'main' | 'comingSoon' 로 카드 렌더링 분기를 데이터가 결정합니다.
export const projects = [
  {
    id: 'sloway',
    status: 'main',
    name: 'Sloway',
    summary: '워케이션 숙소·코워킹 공간 예약 플랫폼',
    period: '2026.04.27 ~ 2026.06.24',
    team: '5명 (도메인 분담)',
    role: '회원 / 인증 도메인 (백엔드 + 프론트엔드), 일정관리자 역할',
    github: 'https://github.com/bobohyeon/Sloway_Project',
    description:
      '워케이션 사용자에게 숙소·코워킹 공간 검색·예약을 제공하는 통합 플랫폼. 회원·호스트·관리자 권한을 분리하고 안전한 인증과 예약·결제를 갖춘 웹 서비스입니다.',
    tech: [
      'Spring Boot',
      'Spring Security',
      'JPA',
      'QueryDSL',
      'PostgreSQL',
      'JWT',
      'AWS S3',
      'Gmail SMTP',
      'React 19',
      'Redux Toolkit',
      'styled-components',
    ],
    features: [
      '이메일 인증 회원가입 (인증코드 발송·검증, 비밀번호 정책 BE/FE 이중 검증)',
      'JWT 로그인 + 역할별(회원·호스트·관리자) 인증 처리',
      '카카오 소셜 로그인 (OAuth) + 중복 가입 방지',
      '마이페이지: 정보 조회·수정(PATCH), 비밀번호 변경, 회원 탈퇴, 이메일 변경 시 재인증·자동 로그아웃',
      '호스트 가입: 사업자등록증(PDF) AWS S3 업로드',
      '관리자: 호스트 승인·반려·자격관리, 회원·호스트 목록(페이징), 회원 정지(7/30/영구)·해제',
      '역할별 화면 접근 제어 (RoleRoute), 백엔드 권한과 2중 방어',
      '공통 보안 설정(SecurityConfig) 단독 관리',
    ],
    troubleshooting: [
      {
        title: '403 권한 오류 — 가입 경로까지 막힌 문제',
        problem: '누구나 접근할 수 있어야 할 회원가입이 403 권한 오류로 막힘.',
        cause:
          '호스트 관련 경로 전체(/api/host/**)가 잠기면서 로그인 전에 접근해야 할 가입 경로까지 함께 막혀 있었음.',
        solution:
          '막힌 곳을 그냥 열지 않고, 가입 경로만 분리해 인증 없이 접근 가능하도록(permitAll) 정리 — 보안을 해치지 않고 해결.',
        learned:
          '보안 설정은 작은 차이 하나로 결과가 크게 달라진다. 증상만 덮지 않고 원인을 끝까지 이해하고 고치는 습관.',
      },
      {
        title: '권한 구멍 차단 — 무인증 공개 API 발견',
        problem:
          '권한 설정을 점검하던 중, 관리자만 봐야 할 예약 정보가 인증 없이 누구나 조회 가능한 상태로 열려 있는 것을 발견.',
        cause: null,
        solution: '해당 경로에 ADMIN 권한을 명확히 지정하여 차단.',
        learned: '시키지 않은 부분이라도 위험을 먼저 살피고 책임지고 고치는 태도.',
      },
      {
        title: 'JWT role 단일 문자 정규화 (DRY)',
        problem:
          'JWT의 role 값이 단일 문자(U/H/A)라 화면마다 비교 기준이 제각각이어서 역할 가드가 오작동.',
        cause: null,
        solution: '권한 값을 일관된 형태로 바꾸는 공용 함수(normalizeRole)로 한 곳에서 관리.',
        learned: '반복되는 로직은 공통화. 흩어지면 한 곳만 고쳐도 다른 곳에서 버그가 난다.',
      },
    ],
    limitation:
      '토큰 리프레시 미완성: 핵심 기능 우선 판단으로 뒤로 미룸. JWT는 stateless라 탈취 시 만료 전까지 무효화가 어렵다는 위험을 인지. 운영이라면 액세스 토큰을 짧게 + 리프레시 재발급 구조로 가야 한다고 정리해둠.',
  },
  {
    id: 'taskflow',
    status: 'main',
    name: 'TaskFlow',
    summary: '사내 업무관리 그룹웨어',
    period: '2026.02.09 ~ 2026.03.24',
    team: '5명 (도메인 분담)',
    role: '계정 / 인증 도메인 (회원가입·로그인)',
    github: 'https://github.com/blackbean9081-svg/TaskFlow',
    description:
      '사원·고객·관리자 권한으로 회사·부서·프로젝트·일정을 관리하는 사내 업무관리(그룹웨어) 웹 애플리케이션입니다. 저는 계정/인증 — 사원·고객 회원가입과 로그인, 아이디·비밀번호 찾기, 마이페이지를 담당했습니다.',
    tech: [
      'Spring Boot',
      'Spring MVC',
      'MyBatis',
      'Oracle',
      'JSP / JSTL',
      'Spring Security (BCrypt)',
    ],
    features: [
      '사원·고객 회원가입 (ID/PW 길이 검증, 비밀번호 BCrypt 암호화)',
      '로그인 (BCrypt 비밀번호 대조, 세션 저장 / 불일치 시 알람)',
      '세션 기반 인증 인터셉터 (미로그인 차단 — AJAX 401 / 일반 요청 리다이렉트)',
      '아이디 찾기·비밀번호 재설정 (이름·전화번호로 본인 확인)',
      '마이페이지 정보 수정',
    ],
  },
];

// VS Code 형태의 "구현 화면 + 코드" 워크스페이스 데이터.
// 트리(projects → files) 구조 그대로 화면에 렌더링됩니다.
//
// 각 파일이 채우는 자리:
//   image.src : AWS S3(또는 CloudFront) URL. 비우면 "화면 준비 중" 폴백.
//   code      : 실제 코드. ./code 의 실제 파일을 ?raw 로 불러옴 (비우면 "코드 준비 중").
//   explain   : 하단 '화면 설명' 탭 — 코드 주석/PORTFOLIO_CONTENT.md 기반의 사실 요약
//   retro     : 하단 '회고' 탭
//   trouble   : 하단 '트러블슈팅' 탭 — PORTFOLIO_CONTENT.md 의 실제 트러블슈팅
//
// 코드는 Sloway_Project 레포의 본인 담당(인증/회원) 실제 파일입니다.
// TaskFlow 는 PORTFOLIO_CONTENT.md 기준 '준비 중' 이라 빈 자리로 둡니다.
export const workspace = {
  projects: [
    {
      id: 'sloway',
      name: 'Sloway',
      files: [
        {
          id: 'sloway-security',
          name: 'SecurityConfig.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg',
            alt: '로그인 / 권한별 접근 화면',
          },
          code: securityConfigCode,
          highlights: [
            { line: 81, label: 'STATELESS — 세션 대신 JWT' },
            { line: 87, label: '가입 경로만 permitAll로 분리 → 403 해결' },
            { line: 165, label: 'JWT 필터를 로그인 필터 앞에 배치' },
          ],
          explain: `인증 담당이 단독 관리하는 Spring Security 설정입니다.
로그인을 컨트롤러가 아닌 LoginFilter(회원·호스트·관리자 3종)에서 처리하고, 세션은 STATELESS로 두어 JWT 기반으로 동작합니다.
URL 패턴별 권한을 한 곳에서 매트릭스처럼 관리하며, JwtAuthenticationFilter를 로그인 필터 앞에 배치해 매 요청의 토큰을 검증합니다.`,
          retro: `토큰 리프레시는 핵심 기능 우선 판단으로 뒤로 미뤘습니다.
JWT는 stateless라 탈취 시 만료 전까지 무효화가 어렵다는 위험을 인지하고 있고,
운영이라면 액세스 토큰을 짧게 가져가고 리프레시 재발급 구조로 가야 한다고 정리해 두었습니다.`,
          trouble: `① 403 권한 오류 — 가입 경로까지 막힌 문제
- 문제: 누구나 접근해야 할 회원가입이 403으로 막힘.
- 원인: 호스트 경로 전체(/api/host/**)가 잠기면서 가입 경로까지 함께 막힘.
- 해결: 가입 경로(/api/host/join/**)만 분리해 permitAll 로 두고, 포괄 경로(hasRole)보다 위에 배치.
  (Spring Security는 위에서부터 첫 매칭을 적용하므로 '순서'가 곧 정책)

② 권한 구멍 차단 — 무인증 공개 API 발견
- 점검 중 관리자만 봐야 할 정보가 인증 없이 열려 있는 것을 발견 → 해당 경로에 권한을 명확히 지정해 차단.`,
        },
        {
          id: 'sloway-auth',
          name: 'AuthService.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%EC%9D%BC%EB%B0%98%EC%9C%A0%EC%A0%80+%EA%B0%80%EC%9E%85.jpg',
            alt: '일반 회원가입 화면',
          },
          code: authServiceCode,
          highlights: [
            { line: 76, label: '가입 직전 이메일 인증 완료 재확인 (프론트 우회 방지)' },
            { line: 80, label: '비밀번호 BCrypt 암호화 — 평문 저장 금지' },
            { line: 90, label: 'Member(공통) 저장 → memberNo 발급 후 User 연결' },
          ],
          explain: `일반회원 회원가입 처리 본체입니다.
입력 검증 → 이메일 중복 → 이메일 인증 완료 확인 → 비밀번호 BCrypt 암호화 → 공통 Member 저장(번호 발급) → User(일반회원) 저장 순으로 처리합니다.
같은 클래스에 이메일 중복확인·아이디 찾기(마스킹)·비밀번호 재설정도 함께 둬, 회원가입 관련 흐름을 한곳에서 관리합니다.`,
          retro: `회원가입 같은 쓰기 작업은 잘못된 입력을 DB 접근 전에 먼저 막도록 검증 순서를 잡았습니다.
Member(공통)와 User/Host(역할별)를 분리해, 같은 이메일 테이블을 공유하면서도 역할별 정보를 따로 관리할 수 있게 설계했습니다.`,
          trouble: `비밀번호 재설정은 프론트 단계만 믿으면 인증을 우회당할 수 있어, 서버에서 이메일 인증 여부(isVerified)를 한 번 더 검증하는 보안 게이트를 뒀습니다.
가입에서도 같은 방식으로, 인증되지 않은 이메일은 가입 직전에 막습니다.`,
        },
        {
          id: 'sloway-email',
          name: 'EmailService.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EB%A9%94%EC%9D%BC%EC%9D%B8%EC%A6%9D.jpg',
            alt: '이메일 인증 회원가입 화면',
          },
          code: emailServiceCode,
          highlights: [
            { line: 68, label: '6자리 코드 — 앞자리 0까지 보장' },
            { line: 124, label: '이미 인증된 코드 재사용 방지' },
          ],
          explain: `이메일 인증 회원가입의 핵심 서비스입니다. 3단계로 동작합니다.
1) sendCode  — 6자리 코드 생성(앞자리 0 보장), 만료시각(5분) 저장, Gmail SMTP 발송
2) verifyCode — 최신 발송 행 기준으로 코드 검증, 재사용·만료 방지 후 verified 마킹
3) isVerified — 가입 시점에 인증된 이메일인지 확인
도메인별 에러 코드(MemberErrorCode)로 실패 사유를 구분해 던집니다.`,
          retro: `이메일 재발송이 자유로운 구조라, 옛 코드로 인증되는 일이 없도록 '항상 최신 발송 행' 기준으로 검증하게 설계했습니다.
다만 메일 발송이 동기 방식(SimpleMailMessage)이라 SMTP가 느려지면 가입 응답까지 늦어질 수 있다는 점을 인지하고 있고, 트래픽이 커지면 발송을 비동기로 분리하는 것을 다음 개선점으로 정리해 두었습니다.`,
          trouble: '',
        },
        {
          id: 'sloway-jwt',
          name: 'JwtUtil.java',
          language: 'java',
          image: { src: '', alt: 'JWT 발급 / 검증' },
          code: jwtUtilCode,
          noImage: true,
          highlights: [
            { line: 50, label: 'Access Token 발급 — memberNo/email/role claim' },
            { line: 89, label: '파싱·검증을 한 곳으로 통일 (DRY)' },
          ],
          explain: `JWT 발급·검증 유틸리티입니다.
로그인 성공 시 Access/Refresh 토큰을 만들고, 매 요청의 토큰을 비밀키로 서명 검증합니다.
모든 claim 조회가 parseClaims 한 곳을 거치게 해, 파싱 로직 변경 시 한 군데만 고치면 되도록 통일했습니다.`,
          retro: `claim 조회를 parseClaims 한 곳으로 모아, 파싱·검증 방식이 바뀌어도 한 군데만 고치면 되도록 했습니다(DRY).
isExpired는 만료된 토큰이면 파싱 단계에서 먼저 예외가 나기 때문에, 만료 판단은 호출부의 try-catch로 처리하는 게 맞다고 정리했습니다.
리프레시 토큰 발급은 만들어 뒀지만 DB 저장·재발급까지는 핵심 기능을 우선하느라 다음 단계로 미뤄둔 상태입니다.`,
          trouble: `토큰에 name claim을 담을 때 값이 null이면 jjwt가 해당 claim을 아예 생략해, 프론트에서 이름이 비는 경우가 있었습니다.
백엔드에서 억지로 채우기보다 프론트가 이름이 없을 때 폴백하도록 맞춰 해결했습니다.`,
        },
        {
          id: 'sloway-kakao',
          name: 'KakaoOAuthService.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A1%9C%EA%B7%B8%EC%9D%B8.jpg',
            alt: '카카오 소셜 로그인',
          },
          code: kakaoOAuthCode,
          highlights: [
            { line: 54, label: '연동된 소셜 계정 먼저 조회 (중복 가입 방지)' },
            { line: 58, label: '없으면 신규 소셜 회원 등록' },
          ],
          explain: `카카오 OAuth 로그인 처리입니다.
인가 코드로 카카오 사용자 정보를 받아, 이미 연동된 계정이면 그 회원으로 로그인하고
없으면 회원·소셜계정을 새로 만들어 중복 가입을 막습니다. 마지막에 우리 서비스의 JWT를 발급해 반환합니다.`,
          retro: `소셜 로그인은 '이미 연동된 계정'을 먼저 조회해, 같은 사용자가 중복 가입되지 않도록 했습니다.
회원·유저·소셜계정 세 엔티티를 한 트랜잭션에서 일관되게 생성하도록 묶어, 중간에 실패해도 어중간한 데이터가 남지 않게 했습니다.`,
          trouble: `카카오가 이메일 제공에 동의하지 않으면 이메일이 없어 가입이 막히는 문제가 있었습니다.
소셜 고유 ID 기반의 유니크한 임시 이메일(kakao_{providerUserId}@social.sloway)을 생성해, 가입을 막지 않으면서도 이메일 유니크 제약을 지키도록 처리했습니다.`,
        },
        {
          id: 'sloway-host-join',
          name: 'HostJoinService.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%ED%98%B8%EC%8A%A4%ED%8A%B8%EA%B0%80%EC%9E%85+%EC%99%84%EB%A3%8C.jpg',
            alt: '호스트 가입(사업자등록증 업로드) 화면',
          },
          code: hostJoinCode,
          highlights: [
            { line: 74, label: '사업자등록증 파일 필수 검증' },
            { line: 91, label: '검증을 모두 통과한 뒤 업로드 — S3 쓰레기 방지' },
            { line: 119, label: '신청은 승인 대기(P) 상태로 저장' },
          ],
          explain: `호스트 신청 처리 서비스입니다.
회원·사업자 정보 검증 → 이메일 인증 → 사업자번호 중복 체크를 모두 통과한 뒤에 사업자등록증 PDF를 AWS S3에 업로드하고, Member/Host를 저장합니다.
호스트는 일반회원과 달리 '신청 → 어드민 승인 → 활성화' 2단계라, 신청은 승인 대기(P) 상태로 시작합니다.`,
          retro: `파일 업로드를 모든 검증보다 뒤에 배치해, 검증 실패 시 S3에 불필요한 파일이 남지 않도록 했습니다.
호스트는 상태(approvalState)로 신청→승인 흐름을 관리하고, 공통 정보(Member)와 호스트 정보(Host)를 분리해 저장합니다.`,
          trouble: '',
        },
        {
          id: 'sloway-admin-member',
          name: 'AdminMemberService.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%EC%96%B4%EB%93%9C%EB%AF%BC+%ED%9A%8C%EC%9B%90%EC%A0%9C%EC%A0%9C.jpg',
            alt: '관리자 회원 관리 / 정지 화면',
          },
          code: adminMemberCode,
          highlights: [
            { line: 52, label: '호스트 여부를 한 번에 조회 — 목록 N+1 방지' },
            { line: 87, label: '이미 정지·탈퇴 회원은 정지 거절 (상태 방어)' },
            { line: 92, label: 'days null/음수 → 영구, 양수 → 기간 정지' },
          ],
          explain: `관리자(ADMIN)가 회원을 관리하는 서비스입니다.
회원 목록(페이징)·상세 조회와, 회원 정지(기간/영구)·정지 해제를 담당합니다.
정지는 사유와 '활성 상태'를 먼저 검증해 잘못된 요청을 DB 작업 전에 막고, 상태 전환은 엔티티 의미 메서드(suspend/unsuspend)로 캡슐화했습니다.`,
          retro: `정지/해제는 '사유 없음', '이미 정지·탈퇴한 회원' 같은 잘못된 요청을 조회·변경 전에 먼저 걸러내도록 방어 순서를 잡았습니다.
상태 전환 로직을 서비스에 흩지 않고 엔티티 의미 메서드로 모아, 서비스는 '무엇을 검증할지'에만 집중하도록 했습니다.`,
          trouble: `회원 목록에서 각 회원이 호스트인지 매번 조회하면 N+1 쿼리가 발생합니다.
페이지에 담긴 memberNo들을 모아 호스트 여부를 한 번에 조회(Set)한 뒤 비교하도록 바꿔, 회원 수와 무관하게 쿼리 수를 고정했습니다.`,
        },
        {
          id: 'sloway-admin-host',
          name: 'AdminHostService.java',
          language: 'java',
          image: {
            src: 'https://ojh-portfolio-462096274288-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/%ED%98%B8%EC%8A%A4%ED%8A%B8+%EA%B0%95%EB%B9%84.jpg',
            alt: '관리자 호스트 승인 / 관리 화면',
          },
          code: adminHostCode,
          highlights: [
            { line: 62, label: '대기(P) 상태에서만 승인 — 잘못된 상태 전이 차단' },
            { line: 108, label: '회원 정보 일괄 조회 — 목록 N+1 방지' },
            { line: 144, label: '자격 박탈(revoke) — 사유 필수' },
          ],
          explain: `어드민의 호스트 승인·반려·자격박탈·복구·재검토를 담당하는 서비스입니다.
ApprovalState 상태 전이(P→A 승인, P→R 반려, A→V 박탈, V→A 복구, R→P 재검토)에서 서비스는 '언제 호출 가능한가'(전이 규칙)만 검증하고, 실제 상태 변경은 엔티티 의미 메서드에 위임합니다.
목록은 호스트들의 회원 정보를 한 번에 조회해 N+1을 방지합니다.`,
          retro: `승인/반려는 대기(P)에서만, 복구는 박탈(V)에서만 가능하도록 상태 전이 규칙을 서비스에서 검증하고, 상태 변경 로직은 엔티티에 캡슐화해 책임을 나눴습니다.
회원 관리와 마찬가지로 목록 조회에서 회원 정보를 일괄 조회해 쿼리 수를 고정했습니다.`,
          trouble: '',
        },
        {
          id: 'sloway-exception',
          name: 'GlobalExceptionHandler.java',
          language: 'java',
          image: { src: '', alt: '에러 응답 / 예외 처리' },
          code: globalExceptionCode,
          noImage: true,
          highlights: [
            { line: 14, label: '비즈니스 예외 → ErrorCode가 상태·메시지 결정' },
            { line: 36, label: '미처리 예외는 500 + 내부 메시지 숨김 (운영 안전)' },
          ],
          explain: `전역 예외 처리(@RestControllerAdvice)입니다.
비즈니스 예외(CustomException)는 ErrorCode가 HTTP 상태·메시지를 결정하고, 입력값 오류는 400, 그 외 미처리 예외는 500으로 일관되게 응답합니다.
컨트롤러마다 try-catch를 흩지 않고 한 곳에서 응답 형식을 통일합니다.`,
          retro: `예외 처리를 한 곳으로 모아 응답 형식을 통일했습니다.
미처리 예외는 내부 메시지를 그대로 노출하지 않고 일반 메시지로 바꿔, 운영 중 정보 노출을 막았습니다.`,
          trouble: '',
        },
        {
          id: 'sloway-errorcode',
          name: 'MemberErrorCode.java',
          language: 'java',
          image: { src: '', alt: '도메인별 에러 코드 설계' },
          code: memberErrorCode,
          noImage: true,
          highlights: [
            { line: 23, label: 'ErrorCode 인터페이스 구현 — 도메인별 에러 enum' },
            { line: 26, label: '409 — 자원 상태 충돌을 명확한 코드로 구분' },
          ],
          explain: `도메인별 에러 코드 설계입니다.
공통 ErrorCode 인터페이스를 두고 도메인마다 enum으로 구현해, '상태코드 + 메시지'를 한곳에서 관리합니다.
404(자원 부재)/409(상태 충돌)/400(입력 오류) 기준을 정해 일관되게 분류합니다.`,
          retro: `에러를 문자열·매직값으로 흩지 않고 도메인 enum으로 모아, 새 에러가 생겨도 한 곳에 추가하면 GlobalExceptionHandler가 알아서 처리하도록 했습니다.
메시지·상태코드를 바꿔야 할 때 고칠 지점이 하나로 좁혀집니다.`,
          trouble: '',
        },
        {
          id: 'sloway-role',
          name: 'role.js',
          language: 'jsx',
          image: { src: '', alt: '역할별 화면 접근 제어' },
          code: roleCode,
          noImage: true,
          highlights: [
            { line: 10, label: '단일문자·ROLE_·소문자·MEMBER 모두 흡수 (DRY 핵심)' },
          ],
          explain: `프론트엔드에서 JWT의 role 값을 표준 역할명으로 바꾸는 공용 함수(normalizeRole)입니다.
백엔드가 role을 단일 문자(U/H/A)로 발급하는데, ROLE_ prefix·소문자·MEMBER 표기까지 흡수하도록 만들어
백엔드 표기가 바뀌어도 화면이 안전하게 동작합니다. 가드·헤더·사이드바·리다이렉트 등 role 비교가 필요한 모든 곳에서 사용합니다.`,
          retro: '',
          trouble: `③ JWT role 단일 문자 정규화 (DRY)
- 문제: role 값이 단일 문자(U/H/A)라 화면마다 비교 기준이 제각각이어서 역할 가드가 오작동.
- 해결: 변환 로직을 normalizeRole 한 곳으로 모아 공통화.
- 배운 점: 반복되는 로직은 공통화한다. 흩어지면 한 곳만 고쳐도 다른 곳에서 버그가 난다.`,
        },
        {
          id: 'sloway-roleroute',
          name: 'RoleRoute.jsx',
          language: 'jsx',
          image: { src: '', alt: '역할별 라우트 가드' },
          code: roleRouteCode,
          highlights: [
            { line: 14, label: 'normalizeRole 재사용 — role 비교' },
            { line: 28, label: '역할 불일치 → 자기 홈으로 (2중 방어)' },
          ],
          explain: `역할 기반 라우트 가드입니다.
미인증이면 로그인 화면으로, 역할이 안 맞으면 자기 홈으로 돌려보냅니다.
백엔드(SecurityConfig)가 데이터는 이미 막고 있고, 이건 "화면 진입"을 막는 프론트의 2중 방어입니다.`,
          retro: `백엔드 SecurityConfig가 이미 데이터 접근을 막고 있으므로, 프론트 가드는 '화면 진입'을 막는 2중 방어로 역할을 한정했습니다.
역할이 맞지 않을 때 그냥 막기만 하지 않고 자기 역할의 홈으로 보내, 사용자가 막다른 화면에 갇히지 않게 했습니다.
role 비교는 normalizeRole로 통일해, 백엔드 표기가 바뀌어도 가드가 흔들리지 않도록 했습니다.`,
          trouble: '',
        },
      ],
    },
    {
      id: 'taskflow',
      name: 'TaskFlow',
      files: [
        {
          id: 'taskflow-empl',
          name: 'EmplService.java',
          language: 'java',
          image: { src: '', alt: '로그인 / 회원가입 화면' },
          code: emplServiceCode,
          highlights: [
            { line: 26, label: 'BCrypt로 비밀번호 암호화 후 저장' },
            { line: 38, label: 'ID 길이 검증(6~20자) — 미충족 시 예외' },
            { line: 56, label: '로그인: 비번 대조, 불일치 시 null 반환' },
          ],
          explain: `사원 계정의 회원가입·로그인·아이디/비밀번호 찾기·마이페이지를 담당하는 서비스입니다 (MyBatis + Oracle).
회원가입은 ID(6~20)·PW(4~12) 길이를 검증하고 비밀번호를 BCrypt로 암호화해 저장합니다.
로그인은 ID로 조회한 뒤 BCrypt matches로 대조해, 일치하면 회원 정보를, 불일치면 null을 반환합니다.`,
          retro: `검증·암호화 같은 공통 처리를 서비스에 모으고, 로그인 실패는 예외 대신 null로 돌려 호출부(컨트롤러)가 알람 노출을 결정하도록 했습니다.
비밀번호는 어떤 경우에도 평문으로 저장하지 않습니다.`,
          trouble: '',
        },
        {
          id: 'taskflow-interceptor',
          name: 'LoginInterceptor.java',
          language: 'java',
          image: { src: '', alt: '로그인 / 세션 인증' },
          code: loginInterceptorCode,
          noImage: true,
          highlights: [
            { line: 14, label: '세션에 로그인 정보 있으면 통과 (SA/사원/고객)' },
            { line: 29, label: 'AJAX는 401, 일반 요청은 로그인 페이지로 리다이렉트' },
          ],
          explain: `세션 기반 로그인 인증을 처리하는 인터셉터입니다.
요청 전(preHandle) 세션에 로그인 정보(시스템관리자/사원/고객)가 있으면 통과시키고,
없으면 AJAX 요청은 401, 일반 요청은 로그인 페이지로 리다이렉트합니다.`,
          retro: `인증 검사를 컨트롤러마다 두지 않고 인터셉터 한 곳으로 모아, 보호가 필요한 경로에 공통 적용했습니다.
Sloway에서는 stateless JWT 필터로, TaskFlow에서는 세션 기반 인터셉터로 — 프로젝트 구조에 맞는 인증 방식을 각각 경험했습니다.`,
          trouble: '',
        },
      ],
    },
  ],
};

// 네비게이션 항목: id는 각 섹션의 DOM id와 1:1로 매칭됩니다.
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];
