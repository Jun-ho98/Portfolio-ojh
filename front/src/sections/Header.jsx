import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { media } from '../styles/theme';
import { profile, navItems } from '../data/portfolio';

// 상단 고정 네비게이션. 스크롤 시 배경을 살짝 입혀 가독성을 확보합니다.
// 앵커(<a href="#id">) + GlobalStyle의 scroll-behavior:smooth 로 부드러운 이동을 처리합니다.

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? 'rgba(14, 16, 15, 0.8)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textStrong};
  letter-spacing: -0.01em;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space(7)};

  ${media.mobile} {
    display: none; /* 모바일: 단일 페이지라 Hero CTA로 이동 유도, 상단 네비는 생략 */
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.point};
  }
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll(); // 새로고침 시 현재 위치 반영
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Container>
        <Inner>
          <Logo href="#top">{profile.name}</Logo>
          <Nav>
            {navItems.map((item) => (
              <NavLink key={item.id} href={`#${item.id}`}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
        </Inner>
      </Container>
    </Bar>
  );
}

export default Header;
