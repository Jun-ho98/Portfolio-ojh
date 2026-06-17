import styled from 'styled-components';

// 하단 터미널 패널. 화면 설명 / 회고 / 트러블슈팅을 탭으로 전환합니다.
// 각 탭의 텍스트는 file 데이터에서 받아오고, 비어 있으면 "준비 중"을 표시합니다.

const TABS = [
  { key: 'explain', label: '화면 설명', cmd: 'explain' },
  { key: 'retro', label: '회고', cmd: 'retro' },
  { key: 'trouble', label: '트러블슈팅', cmd: 'trouble' },
];

const Wrap = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: #181818;
  display: flex;
  flex-direction: column;
  height: 240px;
  flex-shrink: 0;
`;

const Tabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space(1)};
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(3)} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const Tab = styled.button`
  padding: ${({ theme }) => theme.space(2)} ${({ theme }) => theme.space(3)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ $active }) => ($active ? '#fff' : '#8a8f8c')};
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.point : 'transparent')};

  &:hover {
    color: #fff;
  }
`;

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.space(4)} ${({ theme }) => theme.space(5)};
  font-family: 'JetBrains Mono', Consolas, 'D2Coding', monospace;
  font-size: 0.82rem;
  line-height: 1.7;
`;

const Prompt = styled.p`
  color: ${({ theme }) => theme.colors.point};
  margin-bottom: ${({ theme }) => theme.space(3)};

  span {
    color: #8a8f8c;
  }
`;

const Content = styled.pre`
  white-space: pre-wrap;
  word-break: keep-all;
  color: #c9cdcb;
  font-family: inherit;
`;

const Empty = styled.p`
  color: #6f7472;
`;

function BottomPanel({ projectName, file, activeTab, onTabChange }) {
  const current = TABS.find((t) => t.key === activeTab) ?? TABS[0];
  const text = file[current.key];

  return (
    <Wrap>
      <Tabs>
        {TABS.map((tab) => (
          <Tab
            key={tab.key}
            type="button"
            $active={tab.key === activeTab}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>
      <Body>
        <Prompt>
          <span>portfolio@macbook:~/{projectName}$</span> ./{current.cmd}.sh {file.name}
        </Prompt>
        {text && text.trim() ? (
          <Content>{text}</Content>
        ) : (
          <Empty>// {current.label} 준비 중</Empty>
        )}
      </Body>
    </Wrap>
  );
}

export default BottomPanel;
