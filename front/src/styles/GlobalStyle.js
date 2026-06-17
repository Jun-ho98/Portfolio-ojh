import { createGlobalStyle } from 'styled-components';

// 전역 리셋 + 기본 타이포. 브라우저 기본 스타일 편차를 제거해
// 컴포넌트 스타일이 예측 가능하게 동작하도록 만듭니다.
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    /* 고정 헤더에 가리지 않도록 앵커 스크롤 시 여백 확보 */
    scroll-padding-top: 80px;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    word-break: keep-all; /* 한글 단어 단위 줄바꿈 */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  /* 접근성: 모션 최소화 설정을 존중 */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.pointBorder};
    color: ${({ theme }) => theme.colors.textStrong};
  }
`;
