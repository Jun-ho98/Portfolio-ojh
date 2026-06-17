import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 프로젝트 페이지는 https://<user>.github.io/<repo>/ 경로로 서빙됩니다.
// 따라서 빌드 산출물의 base 경로를 '/<repo>/' 로 맞춰야 JS/CSS가 깨지지 않습니다.
// 단, 로컬 개발(dev)에서는 '/' 로 두어 localhost 루트에서 그대로 동작하게 합니다.
const REPO_NAME = 'Portfolio-ojh';

// styled-components의 displayName/소스맵 지원을 위해 babel 플러그인을 켜둡니다.
// 디버깅 시 DevTools에서 컴포넌트 이름이 보여 유지보수가 쉬워집니다.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
}));
