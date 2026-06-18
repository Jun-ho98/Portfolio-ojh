import styled from 'styled-components';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import { media } from '../styles/theme';
import { profile } from '../data/portfolio';

// 사이트의 첫 화면. 정체성 한 줄("늘 더 나은 방법을 고민하는...")을 전면에 둡니다.
// CTA 두 개: 프로젝트로 스크롤 / 이메일 보내기.

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* 배경에 은은한 sage 그라데이션 — 과하지 않게 */
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 50vw;
    height: 50vw;
    max-width: 600px;
    max-height: 600px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.pointSoft} 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.point};
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: ${({ theme }) => theme.space(4)};
`;

const RoleNote = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textStrong};
  max-width: 16ch;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.point};
  }
`;

const Sub = styled.p`
  margin-top: ${({ theme }) => theme.space(6)};
  max-width: 48ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
`;

const Actions = styled.div`
  margin-top: ${({ theme }) => theme.space(10)};
  display: flex;
  gap: ${({ theme }) => theme.space(4)};
  flex-wrap: wrap;
`;

const Primary = styled.a`
  padding: ${({ theme }) => theme.space(3.5)} ${({ theme }) => theme.space(7)};
  background: ${({ theme }) => theme.colors.point};
  color: #0e100f;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`;

const Secondary = styled.a`
  padding: ${({ theme }) => theme.space(3.5)} ${({ theme }) => theme.space(7)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.point};
  }
`;

const Meta = styled.div`
  margin-top: ${({ theme }) => theme.space(12)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(1)};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${media.mobile} {
    margin-top: ${({ theme }) => theme.space(10)};
  }
`;

function Hero() {
  return (
    <Wrapper id="top">
      <Container>
        <Reveal>
          <Role>
            {profile.role} <RoleNote>· {profile.roleNote}</RoleNote>
          </Role>
        </Reveal>
        <Reveal delay={80}>
          <Title>
            늘 더 나은 방법을 고민하는 <em>백엔드 개발자</em>
          </Title>
        </Reveal>
        <Reveal delay={160}>
          <Sub>{profile.taglineSub}</Sub>
        </Reveal>
        <Reveal delay={240}>
          <Actions>
            <Primary href="#projects">프로젝트 보기</Primary>
            <Secondary href={`mailto:${profile.email}`}>이메일 보내기</Secondary>
          </Actions>
        </Reveal>
        <Reveal delay={320}>
          <Meta>
            <span>{profile.education}</span>
            <span>{profile.school}</span>
          </Meta>
        </Reveal>
      </Container>
    </Wrapper>
  );
}

export default Hero;
