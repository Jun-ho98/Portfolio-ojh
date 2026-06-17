import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Explorer from '../components/ide/Explorer';
import CodePane from '../components/ide/CodePane';
import BottomPanel from '../components/ide/BottomPanel';
import { workspace } from '../data/portfolio';

// 'Work' 섹션 = VS Code 형태의 인터랙티브 IDE.
// 이 컴포넌트는 상태(열린 탭/활성 파일/이미지·코드 토글/하단 탭)만 관리하고,
// 실제 표시는 Explorer / CodePane / BottomPanel 에 위임합니다(SRP).

// 모든 파일을 (project, file) 쌍으로 평탄화 — id로 빠르게 찾기 위한 색인.
function buildIndex(projects) {
  const map = new Map();
  projects.forEach((project) => {
    project.files.forEach((file) => map.set(file.id, { project, file }));
  });
  return map;
}

const MENU = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

/* ---------- IDE 폭 (컨테이너 밖, 화면을 넓게 사용) ---------- */
const Bleed = styled.div`
  width: min(1680px, 94vw);
  margin: ${({ theme }) => theme.space(8)} auto 0;

  @media (max-width: 760px) {
    width: 100%;
    padding: 0 ${({ theme }) => theme.space(4)};
  }
`;

/* ---------- IDE 프레임 ---------- */
const Frame = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  height: min(92vh, 1000px);
  min-height: 720px;
  box-shadow: 0 30px 80px -40px rgba(0, 0, 0, 0.8);

  @media (max-width: 760px) {
    height: auto;
    min-height: 0;
  }

  /* 전체화면: 화면 전체를 덮음 */
  ${({ $full }) =>
    $full &&
    `
    position: fixed;
    inset: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border: none;
    border-radius: 0;
    margin: 0;
  `}
`;

const TitleBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(4)};
  height: 36px;
  padding: 0 ${({ theme }) => theme.space(4)};
  background: #323233;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const Menu = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space(4)};
  font-size: 0.78rem;
  color: #c9cdcb;

  @media (max-width: 760px) {
    display: none;
  }
`;

const WinTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.78rem;
  color: #9aa3a0;
  white-space: nowrap;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 760px) {
    position: static;
    transform: none;
    max-width: none;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;
  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  span:nth-child(1) {
    background: #ff5f56;
  }
  span:nth-child(2) {
    background: #ffbd2e;
  }
  span:nth-child(3) {
    background: #27c93f;
  }
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;
`;

const EditorCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

/* ---------- 탭 바 ---------- */
const TabBar = styled.div`
  display: flex;
  background: #252526;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(2)};
  padding: ${({ theme }) => theme.space(2.5)} ${({ theme }) => theme.space(4)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  white-space: nowrap;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#fff' : '#9aa3a0')};
  background: ${({ $active }) => ($active ? '#1e1e1e' : 'transparent')};
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  border-top: 2px solid ${({ $active, theme }) => ($active ? theme.colors.point : 'transparent')};
`;

const Close = styled.button`
  font-size: 0.9rem;
  line-height: 1;
  color: inherit;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

/* ---------- 툴바(브레드크럼 + 토글) ---------- */
const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(3)};
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(4)};
  background: #1e1e1e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Crumb = styled.div`
  font-size: 0.78rem;
  color: #8a8f8c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  b {
    color: #c9cdcb;
    font-weight: 500;
  }
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(2)};
  flex-shrink: 0;
`;

const Chip = styled.button`
  padding: ${({ theme }) => theme.space(1)} ${({ theme }) => theme.space(3)};
  font-size: 0.74rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ $active }) => ($active ? '#0e100f' : '#c9cdcb')};
  background: ${({ $active, theme }) => ($active ? theme.colors.point : 'rgba(255,255,255,0.07)')};
  transition:
    background 0.15s ease,
    color 0.15s ease;
`;

const BackBtn = styled.a`
  padding: ${({ theme }) => theme.space(1)} ${({ theme }) => theme.space(3)};
  font-size: 0.74rem;
  color: #c9cdcb;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.sm};
  &:hover {
    border-color: ${({ theme }) => theme.colors.point};
    color: ${({ theme }) => theme.colors.point};
  }
`;

/* ---------- 상태 바 ---------- */
const StatusBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(4)};
  height: 26px;
  padding: 0 ${({ theme }) => theme.space(4)};
  background: ${({ theme }) => theme.colors.point};
  color: #0e100f;
  font-size: 0.72rem;
  font-weight: 500;

  div {
    display: flex;
    gap: ${({ theme }) => theme.space(4)};
  }

  @media (max-width: 760px) {
    span.optional {
      display: none;
    }
  }
`;

const ActivityBar = styled.div`
  width: 48px;
  flex-shrink: 0;
  background: #2c2c2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space(5)};
  padding: ${({ theme }) => theme.space(4)} 0;
  font-size: 1.2rem;
  color: #8a8f8c;

  @media (max-width: 760px) {
    display: none;
  }
`;

// 초기에 열어둘 탭 구성 (실제 존재하는 id만 사용되도록 아래에서 필터링).
const INITIAL_OPEN = [
  'sloway-auth',
  'sloway-jwt',
  'sloway-admin-member',
  'sloway-exception',
  'sloway-role',
  'sloway-security',
];
const INITIAL_ACTIVE = 'sloway-security';

function Workspace() {
  const index = useMemo(() => buildIndex(workspace.projects), []);
  const firstId = workspace.projects[0]?.files[0]?.id;

  // 색인에 실제 존재하는 id만 초기 탭으로 사용 (데이터가 바뀌어도 안전하게)
  const initialOpen = INITIAL_OPEN.filter((id) => index.has(id));
  const [openIds, setOpenIds] = useState(
    initialOpen.length ? initialOpen : [firstId].filter(Boolean)
  );
  const [activeId, setActiveId] = useState(
    index.has(INITIAL_ACTIVE) ? INITIAL_ACTIVE : firstId
  );
  const [showImage, setShowImage] = useState(true);
  const [showCode, setShowCode] = useState(true);
  const [bottomTab, setBottomTab] = useState('explain');
  const [fullscreen, setFullscreen] = useState(false);

  const bottomRef = useRef(null);

  // 전체화면일 때: Esc 로 닫기 + 배경 스크롤 잠금.
  // 의존성에 fullscreen 만 두어, 켜질 때만 리스너/스크롤락을 건다.
  useEffect(() => {
    if (!fullscreen) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') setFullscreen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [fullscreen]);

  const entry = index.get(activeId);
  if (!entry) return null; // 데이터가 비어 있으면 섹션을 렌더링하지 않음
  const { project, file } = entry;

  const openFile = (id) => {
    setActiveId(id);
    setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setBottomTab('explain');
  };

  const closeTab = (id, event) => {
    event.stopPropagation();
    setOpenIds((prev) => {
      const next = prev.filter((openId) => openId !== id);
      // 활성 탭을 닫으면 인접 탭으로 활성 이동
      if (id === activeId && next.length) {
        const closedAt = prev.indexOf(id);
        setActiveId(next[Math.min(closedAt, next.length - 1)]);
      }
      return next;
    });
  };

  const goToExplain = () => {
    setBottomTab('explain');
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <Section id="work" eyebrow="Work" title="구현 화면 & 코드" fluid>
      <Bleed>
        <Frame $full={fullscreen}>
          <TitleBar>
            <Dots aria-hidden="true">
              <span />
              <span />
              <span />
            </Dots>
            <Menu>
              {MENU.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </Menu>
            <WinTitle>{file.name} — Portfolio Workspace — Visual Studio Code</WinTitle>
          </TitleBar>

          <Middle>
            <ActivityBar aria-hidden="true">
              <span>🗂️</span>
              <span>🔍</span>
              <span>⎇</span>
              <span>▦</span>
            </ActivityBar>

            <Explorer
              projects={workspace.projects}
              activeFileId={activeId}
              onSelect={openFile}
            />

            <EditorCol>
              <TabBar>
                {openIds.map((id) => {
                  const tab = index.get(id);
                  if (!tab) return null;
                  return (
                    <Tab
                      key={id}
                      $active={id === activeId}
                      onClick={() => {
                        setActiveId(id);
                        setBottomTab('explain');
                      }}
                    >
                      <span>{tab.file.name}</span>
                      <Close
                        type="button"
                        aria-label={`${tab.file.name} 닫기`}
                        onClick={(event) => closeTab(id, event)}
                      >
                        ×
                      </Close>
                    </Tab>
                  );
                })}
              </TabBar>

              <Toolbar>
                <Crumb>
                  Portfolio Workspace <span>›</span> <b>{project.name}</b> <span>›</span>{' '}
                  <b>{file.name}</b>
                </Crumb>
                <Toggles>
                  <Chip
                    type="button"
                    $active={showImage}
                    onClick={() => setShowImage((prev) => !prev)}
                  >
                    이미지
                  </Chip>
                  <Chip
                    type="button"
                    $active={showCode}
                    onClick={() => setShowCode((prev) => !prev)}
                  >
                    코드
                  </Chip>
                  <BackBtn as="button" type="button" onClick={goToExplain}>
                    ← 설명으로
                  </BackBtn>
                  <BackBtn
                    as="button"
                    type="button"
                    onClick={() => setFullscreen((prev) => !prev)}
                  >
                    {fullscreen ? '✕ 닫기 (Esc)' : '⛶ 전체화면'}
                  </BackBtn>
                </Toggles>
              </Toolbar>

              <CodePane file={file} showImage={showImage} showCode={showCode} />

              <div ref={bottomRef}>
                <BottomPanel
                  projectName={project.name}
                  file={file}
                  activeTab={bottomTab}
                  onTabChange={setBottomTab}
                />
              </div>
            </EditorCol>
          </Middle>

          <StatusBar>
            <div>
              <span>⎇ main*</span>
              <span>✓ 0 ⚠ 0</span>
            </div>
            <div>
              <span className="optional">Ln 1, Col 1</span>
              <span className="optional">Spaces: 2</span>
              <span className="optional">UTF-8</span>
              <span>{file.language.toUpperCase()}</span>
              <span className="optional">Prettier</span>
            </div>
          </StatusBar>
        </Frame>
      </Bleed>
    </Section>
  );
}

export default Workspace;
