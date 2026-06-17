import { useState } from 'react';
import styled from 'styled-components';

// 좌측 파일 탐색기. 프로젝트(폴더) → 파일 트리를 보여주고,
// 파일 클릭 시 상위(Workspace)로 선택을 알립니다(onSelect). 표시만 책임집니다(SRP).

const Aside = styled.aside`
  width: 230px;
  flex-shrink: 0;
  background: #1e1e1e;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  overflow-y: auto;
  user-select: none;

  /* 모바일에서는 상단 탭으로 파일 전환이 가능하므로 탐색기를 숨깁니다. */
  @media (max-width: 760px) {
    display: none;
  }
`;

const Title = styled.div`
  padding: ${({ theme }) => theme.space(3)} ${({ theme }) => theme.space(4)};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8a8f8c;
`;

const Workspace = styled.div`
  padding: 0 ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)};
`;

const Row = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(2)};
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.space(1.5)} ${({ theme }) => theme.space(2)};
  padding-left: ${({ $depth, theme }) => theme.space(2 + $depth * 4)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ $active }) => ($active ? '#fff' : '#c9cdcb')};
  background: ${({ $active }) => ($active ? 'rgba(143,191,159,0.14)' : 'transparent')};
  border-radius: ${({ theme }) => theme.radius.sm};
  border-left: 2px solid ${({ $active, theme }) => ($active ? theme.colors.point : 'transparent')};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Chevron = styled.span`
  display: inline-block;
  width: 12px;
  font-size: 0.7rem;
  color: #8a8f8c;
  transform: rotate(${({ $open }) => ($open ? '90deg' : '0deg')});
  transition: transform 0.15s ease;
`;

// 확장자별 점 색으로 파일 종류를 구분 (실제 아이콘 폰트 없이 가볍게)
const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
  background: ${({ $ext }) =>
    ({ java: '#e76f51', sql: '#4fb6c9', js: '#e9c46a', jsx: '#e9c46a' }[$ext] || '#8a8f8c')};
`;

function extOf(name) {
  const dot = name.lastIndexOf('.');
  return dot === -1 ? '' : name.slice(dot + 1);
}

function ProjectNode({ project, activeFileId, onSelect }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Row type="button" $depth={0} onClick={() => setOpen((prev) => !prev)}>
        <Chevron $open={open}>▶</Chevron>
        <span>{project.name}</span>
      </Row>
      {open &&
        project.files.map((file) => (
          <Row
            key={file.id}
            type="button"
            $depth={1}
            $active={file.id === activeFileId}
            onClick={() => onSelect(file.id)}
          >
            <Dot $ext={extOf(file.name)} aria-hidden="true" />
            <span>{file.name}</span>
          </Row>
        ))}
    </div>
  );
}

function Explorer({ projects, activeFileId, onSelect }) {
  return (
    <Aside>
      <Title>Explorer</Title>
      <Workspace>
        <Row type="button" $depth={0} as="div" style={{ cursor: 'default' }}>
          <span style={{ color: '#8a8f8c', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
            PORTFOLIO WORKSPACE
          </span>
        </Row>
        {projects.map((project) => (
          <ProjectNode
            key={project.id}
            project={project}
            activeFileId={activeFileId}
            onSelect={onSelect}
          />
        ))}
      </Workspace>
    </Aside>
  );
}

export default Explorer;
