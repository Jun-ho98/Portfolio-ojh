import { useState } from 'react';
import styled from 'styled-components';

// 접고 펼치는 아코디언. 트러블슈팅 항목처럼 길어질 수 있는 내용을
// 한 화면에 다 펼치지 않고 제목만 보여주다 필요할 때 펼치기 위해 사용합니다.
//
// 표현(스타일)만 담당하고, "무엇을 보여줄지"는 children으로 주입받습니다(SRP).
// 펼침 상태는 각 항목이 스스로 관리합니다.

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.pointBorder};
  }
`;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => theme.space(5)} ${({ theme }) => theme.space(6)};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textStrong};
`;

const Icon = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.point};
  font-size: 1.5rem;
  line-height: 1;
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
  transition: transform 0.25s ease;
`;

// max-height 트랜지션으로 부드럽게 펼침. 닫힘 시 내용은 DOM에 남지만 시각적으로 숨김.
const Panel = styled.div`
  max-height: ${({ $open }) => ($open ? '600px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition:
    max-height 0.35s ease,
    opacity 0.35s ease;
`;

const PanelInner = styled.div`
  padding: 0 ${({ theme }) => theme.space(6)} ${({ theme }) => theme.space(6)};
`;

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Item>
      <Trigger type="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        <span>{title}</span>
        <Icon $open={open} aria-hidden="true">
          +
        </Icon>
      </Trigger>
      <Panel $open={open}>
        <PanelInner>{children}</PanelInner>
      </Panel>
    </Item>
  );
}

export default AccordionItem;
