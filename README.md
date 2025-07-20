# MessageSystem PWA

이 저장소는 React 기반 PWA 예제 프로젝트를 포함합니다. 모든 소스 코드는 `my-pwa` 폴더에 위치합니다.

## 실행 방법

### 1. 환경 준비
Node.js와 pnpm이 필요합니다. pnpm이 없다면 아래 명령으로 전역 설치할 수 있습니다.

```bash
npm install -g pnpm
```

### 2. 의존성 설치
레포지토리를 클론한 후 `my-pwa` 디렉터리에서 다음 명령을 실행합니다.

```bash
cd my-pwa
pnpm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173` 주소를 열어 앱을 확인합니다.

### 4. 빌드

```bash
pnpm build
```

`dist` 폴더에 정적 파일이 생성됩니다.

### 5. GitHub Pages 배포

```bash
pnpm deploy
```

`gh-pages` 브랜치로 빌드 결과가 업로드되며, GitHub Pages 설정에서 해당 브랜치를 배포 대상으로 지정하면 됩니다.
