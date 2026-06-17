import styled from 'styled-components';
import { media } from '../styles/theme';

// 콘텐츠 최대 너비 + 좌우 여백을 책임지는 레이아웃 래퍼.
// 모든 섹션이 동일한 가로 정렬을 갖도록 한곳에서 관리합니다.
const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space(6)};

  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.space(5)};
  }
`;

export default Container;
