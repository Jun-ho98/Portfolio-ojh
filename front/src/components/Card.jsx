import styled from 'styled-components';

// 카드 공통 스타일. 강점/프로젝트 등 여러 곳에서 같은 표면 스타일을 재사용합니다.
// 단순 표현 컴포넌트라 styled-component 하나로 끝냅니다(과한 추상화 지양).
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.space(7)};
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.pointBorder};
    transform: translateY(-3px);
  }
`;

export default Card;
