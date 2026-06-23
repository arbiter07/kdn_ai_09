import Link from "next/link";

const highlights = [
  {
    label: "Environment",
    title: "환경",
    desc: "탄소 배출과 에너지 사용처럼 측정 가능한 지표로 변화를 보여줍니다."
  },
  {
    label: "Social",
    title: "사회",
    desc: "안전, 지역사회, 공급망 등 사람에게 닿는 영향을 사례로 풀어냅니다."
  },
  {
    label: "Governance",
    title: "지배구조",
    desc: "투명한 의사결정과 윤리 기준으로 신뢰를 만드는 과정을 다룹니다."
  }
];

const goals = [
  "ESG 개념을 누구나 이해하기 쉽게 전달",
  "카드뉴스와 영상으로 핵심 메시지 시각화",
  "발표 슬라이드로 프로젝트 결과 공유"
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="page-title">
        <div className="heroText">
          <p className="eyebrow">KDN AI 09 · ESG Project</p>
          <h1 id="page-title">9조 ESG 프로젝트</h1>
          <p className="intro">
            한전KDN 연수 9조가 준비한 ESG 프로젝트 소개 페이지입니다.
            환경·사회·지배구조 관점에서 지속가능한 미래를 카드뉴스와 영상으로
            쉽게 전달합니다.
          </p>
          <div className="heroActions">
            <Link href="/cardnews" className="btnPrimary">
              카드뉴스 보기
            </Link>
            <Link href="/slides" className="btnGhost">
              발표 슬라이드
            </Link>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <img src="/esg-hero.png" alt="" />
        </div>
      </section>

      <section className="sectionHeader" aria-labelledby="about-title">
        <p className="eyebrow">About ESG</p>
        <h2 id="about-title">ESG란 무엇일까요</h2>
      </section>

      <section className="cardGrid" aria-label="ESG 세 가지 축">
        {highlights.map((item) => (
          <article className="newsCard" key={item.label}>
            <div className="cardTopline">
              <span className="cardLabel">{item.label}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="nextStep" aria-labelledby="goal-title">
        <div>
          <p className="eyebrow">Project Goal</p>
          <h2 id="goal-title">우리 프로젝트의 목표</h2>
          <p>
            어려운 ESG 개념을 일상의 언어로 풀어내고, 카드뉴스·영상·발표
            자료로 한눈에 이해할 수 있도록 구성했습니다.
          </p>
        </div>
        <ul>
          {goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
