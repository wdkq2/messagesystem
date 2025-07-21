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

### 3. OpenAI 프록시 URL 설정

OpenAI 키가 포함된 코드를 GitHub에 올리지 않기 위해 Cloudflare Workers 등에서 프록시를 구성합니다. `my-pwa` 폴더에 `.env` 파일을 만들고 아래 값을 입력하세요. 이 파일은 Git에 커밋되지 않습니다.


```bash
cp my-pwa/.env.example my-pwa/.env
# .env 편집 후 프록시 주소 입력
```

`.env` 예시:

```env
VITE_OPENAI_PROXY_URL=https://YOUR_WORKER.example.com/api/openai
VITE_OPENAI_MODEL=gpt-4o
```

모델 명은 필요에 따라 변경할 수 있습니다.


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

메시지 작성 후 **저장** 버튼을 누르면 화면 중앙에 "저장되었습니다!" 알림이 잠시 표시되고, 내용이 브라우저의 IndexedDB에 저장됩니다.
상단의 **저장 목록** 버튼을 누르면 화면 왼쪽에 목록 패널이 열립니다. 기본 이름(`저장-1`, `저장-2` …)을 클릭해 수정할 수 있고, 검색창에 이름을 입력해 원하는 멘트를 빠르게 찾을 수 있습니다. 패널 상단의 **닫기** 버튼을 눌러 목록을 숨길 수 있습니다.

결과 창 우측 상단의 **복사** 버튼을 누르면 답변이 클립보드로 복사되고 "복사되었습니다!" 문구가 잠시 표시됩니다. 저장 목록의 각 멘트에도 **복사** 버튼과 **삭제** 버튼이 추가되어 손쉽게 복사하거나 목록에서 제거할 수 있습니다.

### 5. 빌드

```bash
pnpm build
```

`dist` 폴더에 정적 파일이 생성됩니다.


### 6. GitHub Pages 배포

```bash
pnpm run deploy
```
위 명령은 `my-pwa` 디렉터리에서 실행합니다. `pnpm deploy` 대신 **`pnpm run deploy`**를 사용하세요. 스크립트는 빌드 후 `gh-pages` 브랜치를 자동으로 정리해 다시 배포할 수 있도록 합니다.
배포 전에는 로컬 저장소에 GitHub 원격이 `origin` 이름으로 설정되어 있어야 합니다. 없다면 다음과 같이 추가하고 첫 푸시를 진행하세요.

```bash
git remote add origin https://github.com/YOUR_ID/messagesystem.git
git push -u origin main
```
만약 여전히 `fatal: a branch named 'gh-pages' already exists` 오류가 발생하면 아래 명령으로 남은 브랜치를 삭제한 뒤 다시 실행하세요.

```bash
git branch -D gh-pages
git push origin --delete gh-pages # 원격 브랜치가 남은 경우
```

GitHub 저장소의 **Settings → Pages**에서 Source를 `gh-pages` 브랜치와 `/`(root) 폴더로 지정하세요. 페이지에 README만 보인다면 이 설정을 다시 확인합니다. 설정 후 잠시 기다리면 `https://YOUR_ID.github.io/messagesystem/` 주소에서 최신 PWA를 확인할 수 있습니다. 프로젝트의 `vite.config.js`에는 이미 `base: '/messagesystem/'`가 설정되어 있습니다.

### 7. 바탕화면에 앱 설치하기

앱을 GitHub Pages에 배포한 뒤 브라우저에서 배포 주소를 열면 주소창 우측에 설치 아이콘이 표시됩니다(또는 브라우저 메뉴에서 **앱 설치**를 선택). 해당 버튼을 누르면 PWA가 바탕화면 또는 모바일 홈 화면에 추가됩니다. 설치 후 아이콘을 더블클릭하면 독립 실행형 창으로 문자 작성 웹 앱이 열립니다. 네트워크가 연결되지 않은 상태에서도 최근에 방문한 페이지는 캐시된 파일을 이용해 열 수 있습니다.

### 원격 변경 사항 적용하기

GitHub 저장소의 코드가 수정된 경우 로컬 환경에서 다음 명령을 실행해 최신 코드를 가져올 수 있습니다.

```bash
git pull origin main
pnpm install # 의존성 변경 시
```

작업 중이라면 `git stash`로 수정 사항을 임시 저장한 후 `git pull` 명령을 실행하세요.
