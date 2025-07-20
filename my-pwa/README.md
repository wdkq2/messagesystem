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
2. `.env` 파일 준비
   ```bash
   cp .env.example .env
   # .env 파일을 열어 프록시 URL 입력
   ```
3. 개발 서버 실행
   ```bash
   pnpm dev
   ```
   브라우저에서 `http://localhost:5173` 를 열어 확인합니다.
4. 프로덕션 빌드
   ```bash
   pnpm build
   ```
5. GitHub Pages 배포(선택)
   ```bash
   pnpm run deploy
   ```
   위 명령은 프로젝트 루트(`my-pwa` 디렉터리)에서 실행해야 하며,
   `pnpm deploy` 대신 **`pnpm run deploy`** 를 사용합니다.
   스크립트는 이전 배포로 남아 있는 `gh-pages` 브랜치를 자동 정리한 뒤 결과물을 푸시합니다.
   배포 전에는 로컬 저장소에 GitHub 원격이 `origin`으로 설정되어 있는지 확인하세요. 없다면 아래 명령으로 추가하고 첫 푸시를 수행합니다.

   ```bash
   git remote add origin https://github.com/YOUR_ID/messagesystem.git
   git push -u origin main
   ```
   만약 오류가 지속되면 다음 명령으로 브랜치를 삭제하세요.

   ```bash
   git branch -D gh-pages
   git push origin --delete gh-pages
   ```
