import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// React 진입점. StrictMode로 개발 중 잠재적 문제를 조기에 잡습니다.
const rootElement = document.getElementById('root');

if (!rootElement) {
  // index.html의 #root가 없으면 즉시 원인을 알 수 있게 명시적으로 실패시킵니다.
  throw new Error('#root 요소를 찾을 수 없습니다. index.html을 확인하세요.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
