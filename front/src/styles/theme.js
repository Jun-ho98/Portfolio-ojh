// 디자인 토큰. 색/간격/타이포/breakpoint를 한곳에서 관리해(DRY),
// 값 변경 시 이 파일만 고치면 전체에 반영됩니다.
// 다크 기반 + sage(green) 포인트 컬러.

export const theme = {
  colors: {
    bg: '#0e100f', // 메인 배경 (거의 검정, 살짝 녹색기)
    surface: '#16191780', // 카드 배경 (반투명, 배경 위에 떠 보이게)
    surfaceSolid: '#161917',
    border: 'rgba(255, 255, 255, 0.09)',
    text: '#ededec', // 본문
    textStrong: '#ffffff', // 제목
    textMuted: '#9aa3a0', // 보조 텍스트
    point: '#8fbf9f', // sage 포인트 (다크 위 대비 확보용으로 밝게)
    pointSoft: 'rgba(143, 191, 159, 0.12)', // 포인트 배경 (태그 등)
    pointBorder: 'rgba(143, 191, 159, 0.35)',
  },
  // clamp로 화면 폭에 따라 부드럽게 스케일 → 반응형 타이포
  fontSizes: {
    hero: 'clamp(2.4rem, 6vw, 4.2rem)',
    h2: 'clamp(1.7rem, 3.5vw, 2.4rem)',
    h3: '1.25rem',
    body: '1rem',
    small: '0.875rem',
  },
  space: (n) => `${n * 4}px`, // 4px 그리드 기준 간격 함수
  radius: {
    sm: '8px',
    md: '14px',
    lg: '20px',
    pill: '999px',
  },
  maxWidth: '1080px',
  breakpoints: {
    mobile: '600px',
    tablet: '900px',
  },
};

// 미디어쿼리 상수: css 안에서 ${media.tablet} { ... } 로 사용해 반복을 줄입니다.
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
};
