import styled from 'styled-components';

// 기술 스택/뱃지 표시용 작은 칩. Skills와 Projects의 기술 목록에서 공용으로 씁니다.
const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.space(1.5)} ${({ theme }) => theme.space(3.5)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.pointSoft};
  border: 1px solid ${({ theme }) => theme.colors.pointBorder};
  border-radius: ${({ theme }) => theme.radius.pill};
  white-space: nowrap;
`;

export default Tag;
