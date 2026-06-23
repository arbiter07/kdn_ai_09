# KDN AI 09 ESG

Next.js 기반 ESG 카드뉴스 준비 페이지입니다.

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm test
npm audit --omit=dev
```

## Cloudflare Pages

GitHub 저장소를 연결한 뒤 Cloudflare Pages의 프로젝트 설정에서 아래 값으로 배포합니다.

```text
Build command: npm run build
Build output directory: out
Root directory: 비워둠
Production branch: main
```

기존 Build command가 `exit 0`이면 Cloudflare Pages 대시보드에서 프로젝트를 열고
`Settings > Build & deployments > Build configurations`로 이동한 뒤 Build command를
`npm run build`로 바꿉니다. 저장 후 `Deployments` 탭에서 최신 커밋을 다시 배포하거나,
GitHub에 새 커밋을 푸시하면 자동으로 재배포됩니다.
