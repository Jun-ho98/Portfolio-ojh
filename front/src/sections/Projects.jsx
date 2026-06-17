import styled from 'styled-components';
import Section from '../components/Section';
import Card from '../components/Card';
import Tag from '../components/Tag';
import AccordionItem from '../components/Accordion';
import Reveal from '../components/Reveal';
import { media } from '../styles/theme';
import { projects } from '../data/portfolio';

// 프로젝트 섹션. status('main' | 'comingSoon')에 따라 다른 카드를 렌더링합니다.
// 데이터가 표현 방식을 결정하므로, 새 프로젝트를 추가해도 이 분기만 따르면 됩니다.

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(6)};
`;

/* ---------- 공통 메타(기간/팀/담당) ---------- */
const MetaRow = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space(4)};
  margin: ${({ theme }) => theme.space(6)} 0;
  padding: ${({ theme }) => theme.space(5)} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space(3)};
  }

  dt {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.point};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space(1)};
  }

  dd {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.text};
  }
`;

/* ---------- 헤더(이름 + 한 줄 + GitHub) ---------- */
const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(4)};
  flex-wrap: wrap;
`;

const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textStrong};
  letter-spacing: -0.02em;

  span {
    margin-left: ${({ theme }) => theme.space(3)};
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const GitLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.point};
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.point};
  }
`;

const Desc = styled.p`
  margin-top: ${({ theme }) => theme.space(4)};
  color: ${({ theme }) => theme.colors.text};
  max-width: 70ch;
`;

const SubHead = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textStrong};
  margin: ${({ theme }) => theme.space(8)} 0 ${({ theme }) => theme.space(4)};
`;

const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space(2.5)} ${({ theme }) => theme.space(6)};

  ${media.tablet} {
    grid-template-columns: 1fr;
  }

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.space(5)};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.small};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.point};
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space(2.5)};
  margin-top: ${({ theme }) => theme.space(4)};
`;

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(3)};
`;

const TroubleBlock = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.space(5)};
  }

  dt {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.point};
    margin-bottom: ${({ theme }) => theme.space(1)};
  }

  dd {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const Limitation = styled.div`
  margin-top: ${({ theme }) => theme.space(8)};
  padding: ${({ theme }) => theme.space(5)};
  border-left: 2px solid ${({ theme }) => theme.colors.pointBorder};
  background: ${({ theme }) => theme.colors.pointSoft};
  border-radius: 0 ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0;

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space(1)};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

// 트러블슈팅 한 건의 문제/원인/해결/배운점을 출력. cause는 없을 수 있어 방어적으로 처리.
function TroubleDetail({ item }) {
  const rows = [
    { label: '문제', value: item.problem },
    { label: '원인', value: item.cause },
    { label: '해결', value: item.solution },
    { label: '배운 점', value: item.learned },
  ].filter((row) => Boolean(row.value));

  return (
    <dl>
      {rows.map((row) => (
        <TroubleBlock key={row.label} as="div">
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </TroubleBlock>
      ))}
    </dl>
  );
}

// 메인 프로젝트(Sloway) 상세 카드.
function MainProject({ project }) {
  return (
    <Card as="article">
      <Header>
        <Name>
          {project.name}
          <span>{project.summary}</span>
        </Name>
        <GitLink href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </GitLink>
      </Header>

      <Desc>{project.description}</Desc>

      <MetaRow>
        <div>
          <dt>기간</dt>
          <dd>{project.period}</dd>
        </div>
        <div>
          <dt>팀</dt>
          <dd>{project.team}</dd>
        </div>
        <div>
          <dt>담당</dt>
          <dd>{project.role}</dd>
        </div>
      </MetaRow>

      <SubHead>사용 기술</SubHead>
      <Tags>
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Tags>

      <SubHead>구현 기능 (담당)</SubHead>
      <FeatureList>
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </FeatureList>

      <SubHead>트러블슈팅</SubHead>
      <AccordionList>
        {project.troubleshooting.map((item, index) => (
          <AccordionItem key={item.title} title={item.title} defaultOpen={index === 0}>
            <TroubleDetail item={item} />
          </AccordionItem>
        ))}
      </AccordionList>

      {project.limitation && (
        <Limitation>
          <strong>솔직한 한계</strong>
          <p>{project.limitation}</p>
        </Limitation>
      )}
    </Card>
  );
}

/* ---------- 준비 중 카드(TaskFlow) ---------- */
const ComingCard = styled(Card)`
  opacity: 0.85;
`;

const Badge = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: ${({ theme }) => theme.space(1)} ${({ theme }) => theme.space(3)};
`;

const ComingMeta = styled.p`
  margin-top: ${({ theme }) => theme.space(3)};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

// 자료 미정 프로젝트. 내용을 지어내지 않고 "준비 중"만 표시합니다.
function ComingSoonProject({ project }) {
  return (
    <ComingCard as="article">
      <Header>
        <Name>{project.name}</Name>
        <Badge>준비 중</Badge>
      </Header>
      <ComingMeta>
        {project.period} · 팀 {project.team} · 담당 {project.role}
      </ComingMeta>
      <ComingMeta>상세 내용은 정리되는 대로 추가될 예정입니다.</ComingMeta>
      <Tags>
        <GitLink href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </GitLink>
      </Tags>
    </ComingCard>
  );
}

// status에 따라 알맞은 카드를 선택. 새 status가 생기면 여기만 확장하면 됩니다.
function renderProject(project) {
  if (project.status === 'comingSoon') {
    return <ComingSoonProject project={project} />;
  }
  return <MainProject project={project} />;
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="프로젝트">
      <List>
        {projects.map((project) => (
          <Reveal key={project.id}>{renderProject(project)}</Reveal>
        ))}
      </List>
    </Section>
  );
}

export default Projects;
