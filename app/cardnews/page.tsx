const cards = [
  {
    number: "01",
    label: "도입",
    title: "한전KDN의 ESG 이야기",
    summary: "친환경, 상생, 신뢰라는 세 키워드를 한 번에 각인시키는 표지입니다.",
    image: "/kdn/cardnews-01.png"
  },
  {
    number: "02",
    label: "환경",
    title: "지속가능한 미래를 위한 친환경 실천",
    summary: "탄소중립, 온실가스 감축, RE100을 환경경영의 핵심으로 제시합니다.",
    image: "/kdn/cardnews-02.png"
  },
  {
    number: "03",
    label: "사회",
    title: "함께 웃는 상생의 가치",
    summary: "동반성장, 중소기업 지원제도, 사회공헌 활동을 따뜻한 이미지로 전달합니다.",
    image: "/kdn/cardnews-03.png"
  },
  {
    number: "04",
    label: "지배구조",
    title: "투명하고 바른 신뢰의 기준",
    summary: "청렴, 윤리경영, 부패방지 인증, 정보공개 AAA를 신뢰의 근거로 정리합니다.",
    image: "/kdn/cardnews-04.png"
  },
  {
    number: "05",
    label: "마무리",
    title: "세상을 밝히는 착한 에너지",
    summary: "한전KDN의 ESG가 친환경, 상생, 신뢰의 미래로 계속된다는 결론입니다.",
    image: "/kdn/cardnews-05.png"
  }
];

export default function CardNewsPage() {
  return (
    <main className="page">
      <section className="sectionHeader centered" aria-labelledby="cards-title">
        <p className="eyebrow">Card News</p>
        <h1 id="cards-title" className="pageTitle">
          완성 카드뉴스 5장
        </h1>
        <p className="sectionLead">
          PPT 3페이지와 같은 구성으로 카드 간격과 중앙 정렬을 맞췄습니다.
        </p>
      </section>

      <section className="posterGrid" aria-label="카드뉴스 이미지 목록">
        {cards.map((card) => (
          <article className="posterCard" key={card.number}>
            <img src={card.image} alt={`${card.number} ${card.title}`} />
            <div className="posterMeta">
              <span>{card.number}</span>
              <strong>{card.label}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="sectionHeader" aria-labelledby="analysis-title">
        <p className="eyebrow">Content Analysis</p>
        <h2 id="analysis-title">2페이지에 반영한 내용 흐름</h2>
      </section>

      <section className="analysisList" aria-label="카드뉴스 내용 분석">
        {cards.map((card) => (
          <article className="analysisItem" key={card.number}>
            <span className="analysisNumber">{card.number}</span>
            <div>
              <p className="analysisLabel">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
