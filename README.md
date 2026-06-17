<div align="center">

# 🌿 오준호 · Portfolio

**“비효율을 그냥 지나치지 못하는 백엔드 개발자”**

동작하는 결과물에서 멈추지 않고, 더 효율적이고 관리하기 좋은 방법을 끝까지 고민합니다.<br/>
인증·권한 관리처럼 서비스의 신뢰를 떠받치는 영역에 강점이 있습니다.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styledcomponents&logoColor=white)
![Pretendard](https://img.shields.io/badge/font-Pretendard-1a1a1a)

</div>

---

## 📖 소개

백엔드 개발자(신입, 풀스택 가능) **오준호**의 개인 포트폴리오 웹사이트입니다.
미니멀·모던한 다크 테마에 sage(green) 포인트 컬러를 사용했고, 모바일까지 대응하는 반응형으로 제작했습니다.

가장 특징적인 부분은 **`Work` 섹션** — 직접 구현한 화면과 핵심 코드를
**VS Code 형태의 인터랙티브 IDE UI**로 보여줍니다. (파일 탐색기 · 탭 · 코드 하이라이팅 · 터미널 설명 패널)

---

## 🗂️ 폴더 구조

```
Portfolio/
├─ PORTFOLIO_CONTENT.md      # 포트폴리오에 들어갈 실제 콘텐츠(원본)
├─ README.md
└─ front/                    # 프론트엔드 (추후 백엔드와 분리 관리)
   ├─ index.html             # Pretendard CDN, 메타 태그
   ├─ vite.config.js
   ├─ package.json
   └─ src/
      ├─ main.jsx            # 진입점
      ├─ App.jsx             # 섹션 조립 + 테마 주입
      ├─ data/
      │  └─ portfolio.js     # ★ 모든 텍스트/프로젝트/코드 데이터 (단일 소스)
      ├─ styles/
      │  ├─ theme.js         # 색·간격·breakpoint 토큰 (다크 + sage)
      │  └─ GlobalStyle.js   # 전역 리셋/타이포
      ├─ components/         # 재사용 UI
      │  ├─ Section · Container · Card · Tag · Accordion · Reveal
      │  └─ ide/             # Work 섹션 전용 IDE 부품
      │     ├─ Explorer.jsx      # 파일 탐색기
      │     ├─ CodePane.jsx      # 이미지/코드 분할 뷰
      │     ├─ BottomPanel.jsx   # 화면설명/회고/트러블슈팅 터미널
      │     └─ highlighter.js    # 문법 하이라이팅 설정
      └─ sections/           # 페이지 섹션
         └─ Header · Hero · About · Skills · Projects · Workspace · Contact · Footer
```

> 💡 **설계 포인트** — 텍스트·코드·이미지는 전부 [`front/src/data/portfolio.js`](front/src/data/portfolio.js)에 모았습니다.
> 화면(컴포넌트)과 내용(데이터)을 분리해, 콘텐츠를 추가/수정할 때 JSX를 건드리지 않아도 됩니다.

---

## 🚀 실행 방법

```bash
cd front
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```

---

## 🧩 섹션 구성

| 섹션 | 내용 |
| --- | --- |
| **Hero** | 한 줄 정체성 + 직무 + CTA(프로젝트 / 이메일) |
| **About** | 소개 + 강점 3가지 카드 |
| **Skills** | Backend / Frontend / Tools·Infra |
| **Projects** | Sloway(상세 · 트러블슈팅 아코디언) / TaskFlow(준비 중) |
| **Work** | 🖥️ VS Code 형태 IDE — 구현 화면 + 핵심 코드 + 설명 |
| **Contact** | 이메일(mailto) + GitHub |

---

## ✍️ 콘텐츠 수정 가이드

모든 내용은 [`front/src/data/portfolio.js`](front/src/data/portfolio.js) 한 곳에서 관리합니다.

- **Work 섹션 파일 채우기** — `workspace.projects[].files[]` 의 각 항목에서
  - `image.src` : AWS S3 / CloudFront 이미지 URL (비우면 “화면 준비 중” 폴백)
  - `code` : 실제 코드 (백틱 템플릿 문자열, 비우면 “코드 준비 중”)
  - `explain` / `retro` / `trouble` : 하단 터미널 패널 탭 내용
- **새 언어 하이라이팅** : [`front/src/components/ide/highlighter.js`](front/src/components/ide/highlighter.js)에 `registerLanguage` 한 줄 추가
- **색/간격 변경** : [`front/src/styles/theme.js`](front/src/styles/theme.js)의 토큰만 수정

---

## 🛠️ 기술 스택 (사이트 자체)

- **React 19** + **Vite 6**
- **styled-components 6** (ThemeProvider 기반 디자인 토큰)
- **react-syntax-highlighter** (PrismLight — 필요한 언어만 등록해 경량화)
- **Pretendard** (가변 폰트, CDN)

---

## 📬 Contact

- ✉️ Email — **soooh1030@naver.com**
- 🧑‍💻 GitHub — [Sloway (팀 레포)](https://github.com/bobohyeon/Sloway_Project) · [TaskFlow](https://github.com/blackbean9081-svg/TaskFlow)
- 🎓 KH정보교육원 AWS 클라우드 기반 DevOps 개발자 양성과정 수료 · 부천대학교 컴퓨터소프트웨어과 졸업

---

<div align="center">
<sub>© 오준호 (Oh Jun Ho)</sub>
</div>
