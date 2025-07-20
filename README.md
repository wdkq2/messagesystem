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
### 3. API 키 설정

OpenAI API를 사용하려면 `my-pwa` 폴더에 `.env` 파일을 만들고 다음 값을 입력합니다. 이 파일은 Git에 커밋하지 마세요.

```bash
cp my-pwa/.env.example my-pwa/.env
# .env 편집 후 API 키 입력
```

`.env` 내용 예시:

```env
VITE_OPENAI_KEY=sk-...
VITE_OPENAI_MODEL=gpt-4o
```

### 4. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173` 주소를 열어 앱을 확인합니다.

### 4-1. 이슈 데이터 수정

앱 우측 상단의 **이슈 편집** 버튼을 클릭하면 부동산 이슈 목록을 직접 추가하거나
수정할 수 있습니다. 입력한 내용은 브라우저의 IndexedDB에 저장되어 새로고침 후에도
유지됩니다.

### 4-2. 저장한 멘트 확인

메시지 작성 후 **저장** 버튼을 누르면 해당 문구가 브라우저의 IndexedDB에 저장됩니다.
상단의 **저장 목록** 버튼을 클릭하면 저장된 모든 멘트를 확인할 수 있습니다.

### 5. 빌드

```bash
pnpm build
```

`dist` 폴더에 정적 파일이 생성됩니다.

### 6. GitHub Pages 배포

```bash
pnpm deploy
```

`gh-pages` 브랜치로 빌드 결과가 업로드되며, GitHub Pages 설정에서 해당 브랜치를 배포 대상으로 지정하면 됩니다.

### 7. 원격 변경 사항 적용

GitHub 저장소의 코드가 수정된 경우 로컬 환경에서 다음 명령을 실행해 최신 코드를 가져올 수 있습니다.

```bash
git pull origin main
pnpm install # 의존성 변경 시
```

작업 중이라면 `git stash` 로 수정 사항을 임시 저장한 후 `git pull` 명령을 실행하세요.
