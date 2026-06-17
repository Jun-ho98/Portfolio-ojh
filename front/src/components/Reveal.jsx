import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// 스크롤 진입 시 한 번만 fade-up 시키는 래퍼.
// IntersectionObserver를 써서 스크롤 이벤트 남발 없이 가볍게 처리합니다.
// (요청: 과한 애니메이션 X, 깔끔한 전환 정도)
const Wrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '16px')});
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
  transition-delay: ${({ $delay }) => $delay}ms;
`;

function Reveal({ children, delay = 0, as }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // 한 번 보이면 관찰 해제 → 불필요한 콜백 방지
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} as={as} $visible={visible} $delay={delay}>
      {children}
    </Wrapper>
  );
}

export default Reveal;
