import styled from 'styled-components';
import Section from '../components/Section';
import Tag from '../components/Tag';
import Reveal from '../components/Reveal';
import { media } from '../styles/theme';
import { skillGroups } from '../data/portfolio';

// 기술 스택. Backend / Frontend / Tools·Infra 3그룹.
// PORTFOLIO_CONTENT.md 에 명시된 것만 노출합니다(MySQL/Node/Oracle/MyBatis 제외).

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space(8)};

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space(10)};
  }
`;

const Group = styled.div``;

const GroupTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.space(5)};
  padding-bottom: ${({ theme }) => theme.space(3)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space(2.5)};
`;

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="기술 스택">
      <Grid>
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 80}>
            <Group>
              <GroupTitle>{group.category}</GroupTitle>
              <Tags>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </Tags>
            </Group>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;
