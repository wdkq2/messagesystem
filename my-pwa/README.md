# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 프로젝트 실행 방법 (한국어)

아래 명령들을 순서대로 실행하면 개발 서버 실행과 빌드, 배포가 가능합니다.

1. 의존성 설치
   ```bash
   pnpm install
   ```
2. 개발 서버 실행
   ```bash
   pnpm dev
   ```
   브라우저에서 `http://localhost:5173` 를 열어 확인합니다.
3. 프로덕션 빌드
   ```bash
   pnpm build
   ```
4. GitHub Pages 배포(선택)
   ```bash
   pnpm deploy
   ```
