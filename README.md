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

## Cloudflare Workers

GitHub 저장소를 연결한 Cloudflare Workers 프로젝트에서는 아래 값으로 빌드합니다.

```text
Build command: npm run cf:build
Deploy command: npm run deploy
Root directory: 비워둠
```

이 프로젝트는 OpenNext Cloudflare adapter를 사용하므로 별도 output directory를 입력하지
않습니다. 기존 Build command가 `exit 0`이면 Cloudflare 대시보드에서 프로젝트를 열고
`Settings > Build` 또는 `Settings > Builds & deployments`의 Build command를
`npm run cf:build`로 바꿉니다. Deploy command는 `npm run deploy`로 둡니다.

저장 후 최신 커밋을 재배포하거나, GitHub에 새 커밋을 푸시하면 자동으로 다시 배포됩니다.
