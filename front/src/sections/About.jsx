import styled from 'styled-components';
import Section from '../components/Section';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import { media } from '../styles/theme';
import { about } from '../data/portfolio';

// 소개 문단 + 강점 3카드. 데이터(about)를 받아 렌더링만 담당합니다.

const Intro = styled.div`
  max-width: 64ch;
  margin-bottom: ${({ theme }) => theme.space(14)};

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
  }

  p + p {
    margin-top: ${({ theme }) => theme.space(5)};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space(5)};

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Num = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.point};
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: ${({ theme }) => theme.space(3)};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textStrong};
  margin-bottom: ${({ theme }) => theme.space(2)};
  font-weight: 600;
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

function About() {
  return (
    <Section id="about" eyebrow="About" title="소개">
      <Reveal>
        <Intro>
          {about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Intro>
      </Reveal>

      <Grid>
        {about.strengths.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <Card>
              <Num>0{index + 1}</Num>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.desc}</CardDesc>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}

export default About;
