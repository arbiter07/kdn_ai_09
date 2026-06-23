const cards = [
  {
    marker: "E",
    label: "Environment",
    title: "환경은 숫자로 말합니다",
    lead: "탄소 배출, 에너지 사용량, 재활용률처럼 비교 가능한 지표를 먼저 정리합니다.",
    detail: "핵심 환경 지표 3개를 골라 변화 추이를 카드뉴스로 보여줍니다.",
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

const explanations = [
  {
    marker: "E",
    accent: "green",
    title: "환경 (Environment)",
    body: "기후변화 대응, 자원 순환, 오염 저감처럼 지구에 미치는 영향을 다룹니다. 측정 가능한 데이터로 변화를 보여줄 때 메시지가 가장 또렷해집니다."
  },
  {
    marker: "S",
    accent: "blue",
    title: "사회 (Social)",
    body: "임직원 안전, 인권, 다양성, 지역사회 기여 등 사람과의 관계를 다룹니다. 실제 사례와 이야기로 전달하면 공감대가 빠르게 형성됩니다."
  },
  {
    marker: "G",
    accent: "gold",
    title: "지배구조 (Governance)",
    body: "투명한 의사결정, 윤리경영, 정보공개 체계를 다룹니다. 환경·사회 활동이 지속되도록 뒷받침하는 신뢰의 기반입니다."
  }
];

export default function CardNewsPage() {
  return (
    <main className="page">
      <section className="sectionHeader" aria-labelledby="cards-title">
        <p className="eyebrow">Card News</p>
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

      <section className="sectionHeader" aria-labelledby="explain-title">
        <p className="eyebrow">Explanation</p>
        <h2 id="explain-title">카드뉴스 설명</h2>
      </section>

      <section className="cardDetailList" aria-label="카드뉴스 설명 목록">
        {explanations.map((item) => (
          <article className={`cardDetail ${item.accent}`} key={item.marker}>
            <div className="marker" aria-hidden="true">
              {item.marker}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
