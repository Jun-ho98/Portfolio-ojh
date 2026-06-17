import { useState } from 'react';
import styled from 'styled-components';
import { SyntaxHighlighter, vscDarkPlus } from './highlighter';

// 에디터 본문: 화면(이미지)과 코드를 토글 상태에 맞춰 보여줍니다.
// 이미지 로드 실패/미입력, 코드 미입력 같은 빈 상태를 모두 방어적으로 처리합니다.

const Area = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  background: #1e1e1e;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const Pane = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.07);
  }

  @media (max-width: 760px) {
    & + & {
      border-left: none;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }
  }
`;

const Shot = styled.div`
  width: 100%;
  height: 100%;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space(4)};

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const Fallback = styled.div`
  width: 100%;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8f8c;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background: repeating-linear-gradient(
    45deg,
    #202220,
    #202220 12px,
    rgba(255, 255, 255, 0.02) 12px,
    rgba(255, 255, 255, 0.02) 24px
  );
`;

const CopyBtn = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space(2)};
  right: ${({ theme }) => theme.space(3)};
  z-index: 2;
  padding: ${({ theme }) => theme.space(1)} ${({ theme }) => theme.space(3)};
  font-size: 0.72rem;
  color: #d6d9d7;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

const CodeWrap = styled.div`
  position: relative;
  height: 100%;
`;

const codeStyle = {
  margin: 0,
  padding: '20px 20px 28px',
  background: 'transparent',
  fontSize: '0.92rem',
  lineHeight: 1.7,
  minHeight: '360px',
};

// 핵심 라인 콜아웃 바: "이 코드의 어디가 중요한지"를 라인번호와 함께 짚어줍니다.
const Callouts = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space(2)};
  padding: ${({ theme }) => theme.space(3)} ${({ theme }) => theme.space(4)};
  background: #1b1d1c;
  border-bottom: 1px solid rgba(143, 191, 159, 0.25);
`;

const Callout = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space(2)};
  font-size: 0.74rem;
  color: ${({ theme }) => theme.colors.text};

  b {
    color: ${({ theme }) => theme.colors.point};
    font-weight: 700;
    font-family: 'JetBrains Mono', Consolas, monospace;
  }
`;

function Screenshot({ image }) {
  const [failed, setFailed] = useState(false);
  const ok = Boolean(image?.src) && !failed;

  if (!ok) return <Fallback>화면 준비 중</Fallback>;
  return (
    <Shot>
      <img src={image.src} alt={image.alt} loading="lazy" onError={() => setFailed(true)} />
    </Shot>
  );
}

function CodeBlock({ file }) {
  const [copied, setCopied] = useState(false);
  const hasCode = Boolean(file.code && file.code.trim());
  const highlights = file.highlights ?? [];
  const highlightLines = new Set(highlights.map((h) => h.line));

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(file.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!hasCode) {
    return <Fallback>// 코드 준비 중 — {file.name}</Fallback>;
  }

  // 강조 라인에 sage 배경 + 좌측 액센트를 입힙니다(시선 유도).
  const lineProps = (lineNumber) => {
    if (!highlightLines.has(lineNumber)) return { style: { display: 'block' } };
    return {
      style: {
        display: 'block',
        background: 'rgba(143, 191, 159, 0.16)',
        boxShadow: 'inset 3px 0 0 #8fbf9f',
      },
    };
  };

  return (
    <CodeWrap>
      {highlights.length > 0 && (
        <Callouts>
          {highlights.map((h) => (
            <Callout key={h.line}>
              <b>L{h.line}</b>
              {h.label}
            </Callout>
          ))}
        </Callouts>
      )}
      <CopyBtn type="button" onClick={handleCopy}>
        {copied ? '복사됨' : 'Copy'}
      </CopyBtn>
      <SyntaxHighlighter
        language={file.language}
        style={vscDarkPlus}
        customStyle={codeStyle}
        showLineNumbers
        wrapLines
        lineProps={lineProps}
      >
        {file.code}
      </SyntaxHighlighter>
    </CodeWrap>
  );
}

function CodePane({ file, showImage, showCode }) {
  // 둘 다 꺼지는 상태를 막아 항상 최소 하나는 보이도록 보정
  const image = showImage || !showCode;
  const code = showCode || !showImage;

  return (
    <Area>
      {image && (
        <Pane>
          <Screenshot image={file.image} />
        </Pane>
      )}
      {code && (
        <Pane>
          <CodeBlock file={file} />
        </Pane>
      )}
    </Area>
  );
}

export default CodePane;
