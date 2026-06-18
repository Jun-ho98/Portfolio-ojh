import styled from 'styled-components';
import Container from '../components/Container';
import { profile } from '../data/portfolio';

// 미니멀 푸터. 이름과 한 줄 정체성만 남깁니다.
const Wrapper = styled.footer`
  padding: ${({ theme }) => theme.space(10)} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(4)};
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <span>
            © {profile.name} ({profile.nameKo})
          </span>
          <span>{profile.tagline}</span>
        </Inner>
      </Container>
    </Wrapper>
  );
}

export default Footer;
