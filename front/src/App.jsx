import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Workspace from './sections/Workspace';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// 페이지 조립 + 테마 주입만 담당. 섹션 순서:
// Hero → About → Skills → Projects → Work(IDE) → Contact.
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workspace />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
