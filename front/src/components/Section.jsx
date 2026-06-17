import styled from 'styled-components';
import Container from './Container';
import Reveal from './Reveal';
import { media } from '../styles/theme';

// 모든 섹션의 공통 골격: id(앵커) + 세로 패딩 + 제목 묶음.
// 섹션마다 패딩/제목 마크업을 반복하지 않도록 한곳에서 관리합니다(DRY).
const Wrapper = styled.section`
  padding: ${({ theme }) => theme.space(28)} 0;

  ${media.tablet} {
    padding: ${({ theme }) => theme.space(20)} 0;
  }
`;

const Head = styled.div`
  margin-bottom: ${({ theme }) => theme.space(12)};
`;

const Eyebrow = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.point};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.space(2)};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: 700;
  letter-spacing: -0.02em;
`;

// fluid=true 면 제목만 컨테이너(최대폭) 안에 두고, 본문(children)은 전체 폭으로 렌더링합니다.
// IDE처럼 넓게 보여줘야 하는 섹션을 위해 사용합니다.
function Section({ id, eyebrow, title, children, fluid = false }) {
  const head = (eyebrow || title) && (
    <Reveal>
      <Head>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <Title>{title}</Title>}
      </Head>
    </Reveal>
  );

  return (
    <Wrapper id={id}>
      {fluid ? (
        <>
          <Container>{head}</Container>
          {children}
        </>
      ) : (
        <Container>
          {head}
          {children}
        </Container>
      )}
    </Wrapper>
  );
}

export default Section;
