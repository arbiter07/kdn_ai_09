const SITE_URL = "https://kdn-ai-09.pages.dev";

const cardNews = [
  { src: "/kdn/cardnews-01.png", label: "01 도입" },
  { src: "/kdn/cardnews-02.png", label: "02 환경" },
  { src: "/kdn/cardnews-03.png", label: "03 사회" },
  { src: "/kdn/cardnews-04.png", label: "04 지배구조" },
  { src: "/kdn/cardnews-05.png", label: "05 마무리" }
];

const flow = [
  ["01", "도입", "한전KDN의 ESG 이야기"],
  ["02", "E", "지속가능한 미래를 위한 친환경 실천"],
  ["03", "S", "함께 웃는 상생의 가치"],
  ["04", "G", "투명하고 바른 신뢰의 기준"],
  ["05", "마무리", "착한 에너지, ESG는 계속됩니다"]
];

const process = [
  ["01", "자료 정리", "회의 메모와 카드뉴스 키워드를 정리해 친환경·상생·신뢰 메시지를 먼저 잡았습니다."],
  ["02", "프롬프트 설계", "한전KDN 맥락, 밝은 일러스트 톤, 피해야 할 표현을 프롬프트에 반영했습니다."],
  ["03", "시각 초안 제작", "AI로 이미지와 영상 콘셉트를 빠르게 만들고 여러 버전을 비교했습니다."],
  ["04", "검수·수정", "로고, 문구, 가독성, 메시지 흐름을 확인해 발표용 결과물로 다듬었습니다."]
];

function Logo() {
  return (
    <img
      className="slideLogo"
      src="/kdn/logo-hanjeon-kdn.png"
      alt="한전KDN"
    />
  );
}

export default function Home() {
  return (
    <main className="deck" aria-label="한전KDN ESG 발표 웹 슬라이드">
      <section className="slide slideCover" aria-labelledby="slide-1-title">
        <img className="slideBg" src="/kdn/cover-light-16x9.png" alt="" />
        <Logo />
        <div className="coverCopy">
          <p className="slideKicker">KDN ESG Story · AI 카드뉴스/영상 프로젝트</p>
          <h1 id="slide-1-title">데이터로 전력을 잇고, 신뢰로 미래를 밝히다</h1>
          <p>한전KDN의 ESG 이야기를 밝고 친근한 카드뉴스 톤으로 전합니다.</p>
        </div>
        <span className="slideNo">01</span>
      </section>

      <section className="slide slidePlan" aria-labelledby="slide-2-title">
        <img className="slideBg" src="/kdn/planning-light-16x9.png" alt="" />
        <Logo />
        <div className="slideTitleBlock">
          <span className="orangeBar" />
          <h2 id="slide-2-title">카드뉴스 내용 분석 및 구성 방향</h2>
          <p>친환경 · 상생 · 신뢰를 한전KDN의 ESG 이야기로 연결</p>
        </div>

        <div className="messageBox">
          <strong>메인 메시지</strong>
          <span>지구를 살리고, 이웃을 돕고, 믿음을 더하는 ESG</span>
        </div>

        <div className="planLayout">
          <div className="topicStack">
            <article>
              <b>E</b>
              <strong>환경경영</strong>
              <span>탄소중립 · 온실가스 감축 · RE100</span>
            </article>
            <article>
              <b>S</b>
              <strong>사회공헌</strong>
              <span>동반성장 · 중소기업 지원 · 한마음봉사단</span>
            </article>
            <article>
              <b>G</b>
              <strong>지배구조</strong>
              <span>청렴 · 윤리경영 · 정보공개 AAA</span>
            </article>
          </div>
          <div className="flowPanel">
            <h3>5장 카드 흐름</h3>
            {flow.map(([num, label, text]) => (
              <div className="flowRow" key={num}>
                <em>{num}</em>
                <b>{label}</b>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="slideNo">02</span>
      </section>

      <section className="slide slideCards" aria-labelledby="slide-3-title">
        <Logo />
        <div className="centerTitle">
          <span className="orangeBar" />
          <h2 id="slide-3-title">완성 카드뉴스 시안</h2>
          <p>친환경 · 상생 · 신뢰 메시지를 5장 흐름으로 구성</p>
        </div>
        <div className="cardNewsWall" aria-label="카드뉴스 5장">
          {cardNews.map((card) => (
            <figure key={card.label}>
              <img src={card.src} alt={card.label} />
              <figcaption>{card.label}</figcaption>
            </figure>
          ))}
        </div>
        <span className="slideNo">03</span>
      </section>

      <section className="slide slideProcess" aria-labelledby="slide-4-title">
        <img className="slideBg faint" src="/kdn/soft-network-16x9.png" alt="" />
        <Logo />
        <div className="slideTitleBlock">
          <span className="orangeBar" />
          <h2 id="slide-4-title">영상 AI 활용 및 프로젝트 소감</h2>
          <p>AI는 초안을 빠르게 만들고, 팀은 메시지의 방향과 신뢰를 완성했습니다.</p>
        </div>
        <div className="processGrid">
          {process.map(([num, title, body], index) => (
            <article key={num} className={index > 1 ? "blueTone" : ""}>
              <em>{num}</em>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="takeaway">
          <strong>느낀 점</strong>
          <span>질문이 구체적일수록 AI 결과 품질이 올라갔습니다.</span>
          <strong>한 줄 결론</strong>
          <span>사람의 검수가 메시지의 신뢰를 완성했습니다.</span>
        </div>
        <span className="slideNo">04</span>
      </section>

      <section className="slide slideVideo" aria-labelledby="slide-5-title">
        <img className="slideBg" src="/kdn/video-bright-16x9.png" alt="" />
        <Logo />
        <div className="videoCopy">
          <p className="slideKicker">Video Sample</p>
          <h2 id="slide-5-title">영상 삽입 샘플</h2>
          <p>영상팀 결과물이 오면 중앙 프레임에 바로 올릴 수 있습니다.</p>
        </div>
        <div className="videoFrame">
          <span aria-hidden="true">▶</span>
          <p>영상 파일 또는 YouTube 임베드 영역</p>
        </div>
        <div className="qrCard">
          <img src="/kdn/site-qr.svg" alt={`${SITE_URL} 접속 QR코드`} />
          <strong>웹으로 보기</strong>
          <span>{SITE_URL.replace("https://", "")}</span>
        </div>
        <span className="slideNo">05</span>
      </section>
    </main>
  );
}
