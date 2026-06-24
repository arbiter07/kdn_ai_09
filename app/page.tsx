import Link from "next/link";

const pillars = [
  {
    key: "E",
    title: "친환경",
    desc: "탄소중립, 온실가스 감축, RE100 실천을 한전KDN의 지속가능한 미래 메시지로 정리했습니다."
  },
  {
    key: "S",
    title: "상생",
    desc: "동반성장, 중소기업 지원제도, 사회공헌을 함께 웃는 상생의 가치로 연결했습니다."
  },
  {
    key: "G",
    title: "신뢰",
    desc: "청렴, 윤리경영, 정보공개 최우수 성과를 투명하고 바른 신뢰의 기준으로 보여줍니다."
  }
];

const flow = [
  "카드뉴스 내용 분석",
  "AI 이미지와 문구 초안 제작",
  "로고, 문장, 가독성 검수",
  "발표 PPT와 영상 흐름 통합"
];

export default function Home() {
  return (
    <main className="page homePage">
      <section className="storyHero" aria-labelledby="page-title">
        <div className="heroCopy">
          <img
            className="kdnLogo"
            src="/kdn/logo-hanjeon-kdn.png"
            alt="한전KDN"
          />
          <p className="eyebrow">KDN ESG Story · AI 카드뉴스/영상 프로젝트</p>
          <h1 id="page-title">
            <span>한전KDN의</span>
            <span>ESG 이야기</span>
          </h1>
          <p className="heroSlogan">
            지구를 살리고, 이웃을 돕고, 믿음을 더하는
          </p>
          <p className="intro">
            PPT의 밝은 카드뉴스 톤을 웹으로 확장해 친환경, 상생, 신뢰의
            메시지를 한눈에 볼 수 있도록 구성했습니다.
          </p>
          <div className="heroActions">
            <Link href="/cardnews" className="btnPrimary">
              카드뉴스 보기
            </Link>
            <Link href="/slides" className="btnGhost">
              발표 흐름 보기
            </Link>
          </div>
        </div>
        <div className="heroPreview">
          <img
            src="/kdn/cover-light-16x9.png"
            alt="한전KDN ESG 카드뉴스 표지"
          />
        </div>
      </section>

      <section className="sectionHeader" aria-labelledby="pillar-title">
        <p className="eyebrow">Core Message</p>
        <h2 id="pillar-title">친환경 · 상생 · 신뢰</h2>
      </section>

      <section className="pillarGrid" aria-label="ESG 핵심 메시지">
        {pillars.map((pillar) => (
          <article className={`pillarCard pillar${pillar.key}`} key={pillar.key}>
            <span className="pillarKey">{pillar.key}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.desc}</p>
          </article>
        ))}
      </section>

      <section className="projectBand" aria-labelledby="project-title">
        <div>
          <p className="eyebrow">Project Flow</p>
          <h2 id="project-title">PPT와 같은 흐름으로 웹에서도 전달</h2>
          <p>
            5장 카드뉴스와 영상 삽입 샘플까지 한 화면 안에서 자연스럽게
            이어지도록 정리했습니다.
          </p>
        </div>
        <ol className="flowList">
          {flow.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
