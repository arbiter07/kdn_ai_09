const cards = [
  {
    marker: "E",
    label: "Environment",
    title: "환경은 숫자로 말합니다",
    lead: "탄소 배출, 에너지 사용량, 재활용률처럼 비교 가능한 지표를 먼저 정리합니다.",
    detail: "우리 주제가 정해지면 핵심 환경 지표 3개를 골라 변화 추이를 카드뉴스로 보여줍니다.",
    accent: "green"
  },
  {
    marker: "S",
    label: "Social",
    title: "사람 중심의 지속가능성",
    lead: "안전, 접근성, 지역사회, 공급망처럼 이해관계자에게 닿는 영향을 살펴봅니다.",
    detail: "사회 영역은 사례 중심으로 풀어내면 읽는 사람이 빠르게 공감할 수 있습니다.",
    accent: "blue"
  },
  {
    marker: "G",
    label: "Governance",
    title: "신뢰는 투명성에서 시작됩니다",
    lead: "의사결정 구조, 정보 공개, 윤리 기준은 ESG의 실행력을 보여주는 근거입니다.",
    detail: "보고서, 정책, 평가 기준을 연결해 신뢰를 만드는 흐름을 시각화합니다.",
    accent: "gold"
  }
];

const checkpoints = ["핵심 주제 확정", "자료 출처 정리", "카드뉴스 톤 결정"];

export default function Home() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="page-title">
        <div className="heroText">
          <p className="eyebrow">KDN AI 09 ESG Project</p>
          <h1 id="page-title">9조 화이팅</h1>
          <p className="intro">
            지속가능한 미래를 환경, 사회, 지배구조 관점으로 쉽게 전달하는
            ESG 카드뉴스의 첫 화면입니다.
          </p>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <img src="/esg-hero.png" alt="" />
        </div>
      </section>

      <section className="sectionHeader" aria-labelledby="cards-title">
        <p className="eyebrow">Card News Draft</p>
        <h2 id="cards-title">ESG 핵심 카드</h2>
      </section>

      <section className="cardGrid" aria-label="ESG 카드뉴스 목록">
        {cards.map((card, index) => (
          <article className={`newsCard ${card.accent}`} key={card.marker}>
            <div className="cardTopline">
              <span className="cardNumber">0{index + 1}</span>
              <span className="cardLabel">{card.label}</span>
            </div>
            <div className="marker" aria-hidden="true">
              {card.marker}
            </div>
            <h3>{card.title}</h3>
            <p className="lead">{card.lead}</p>
            <p>{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="nextStep" aria-labelledby="next-title">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2 id="next-title">이후 내용 확장 방향</h2>
          <p>
            세부 주제와 자료가 정해지면 각 카드에 실제 수치, 출처, 사례를
            추가해 발표용 흐름으로 다듬으면 됩니다.
          </p>
        </div>
        <ul>
          {checkpoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

