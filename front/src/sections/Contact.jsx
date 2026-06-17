import styled from 'styled-components';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { media } from '../styles/theme';
import { profile } from '../data/portfolio';

// 연락처. 이메일(클릭 시 mailto) + GitHub 링크.
// 채용 맥락에서 연락 수단이 바로 보이도록 이메일을 노출했습니다.

const Box = styled.div`
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
`;

const Lead = styled.p`
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textStrong};
  letter-spacing: -0.02em;
  line-height: 1.4;
`;

const EmailBtn = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.space(8)};
  padding: ${({ theme }) => theme.space(4)} ${({ theme }) => theme.space(8)};
  background: ${({ theme }) => theme.colors.point};
  color: #0e100f;
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;

const Links = styled.div`
  margin-top: ${({ theme }) => theme.space(8)};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space(6)};
  flex-wrap: wrap;

  ${media.mobile} {
    gap: ${({ theme }) => theme.space(4)};
  }
`;

const ExtLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.point};
    border-color: ${({ theme }) => theme.colors.point};
  }
`;

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="연락처">
      <Reveal>
        <Box>
          <Lead>함께 이야기 나눌 기회가 있다면 언제든 연락 주세요.</Lead>
          <EmailBtn href={`mailto:${profile.email}`}>{profile.email}</EmailBtn>
          <Links>
            {profile.githubs.map((git) => (
              <ExtLink key={git.url} href={git.url} target="_blank" rel="noopener noreferrer">
                {git.label} ↗
              </ExtLink>
            ))}
          </Links>
        </Box>
      </Reveal>
    </Section>
  );
}

export default Contact;
