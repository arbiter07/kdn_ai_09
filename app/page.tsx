const cardNews = [
  { src: "/kdn/cardnews-01.png", label: "01 도입" },
  { src: "/kdn/cardnews-02.png", label: "02 E 환경" },
  { src: "/kdn/cardnews-03.png", label: "03 S 사회" },
  { src: "/kdn/cardnews-04.png", label: "04 G 신뢰" },
  { src: "/kdn/cardnews-05.png", label: "05 마무리" }
];

const flow = [
  ["01", "도입", "더 좋은 미래와 ESG 소개"],
  ["02", "E", "깨끗한 지구를 위한 노력"],
  ["03", "S", "함께 만드는 따뜻한 세상"],
  ["04", "G", "신뢰를 만드는 힘"],
  ["05", "마무리", "ESG는 미래를 위한 약속"]
];

const process = [
  ["01", "자료 정리", "회의 메모와 카드뉴스 키워드를 정리해\n친환경·상생·신뢰 메시지를 먼저 잡았습니다."],
  ["02", "프롬프트 설계", "한전KDN 맥락, 밝은 일러스트 톤,\n피해야 할 표현을 프롬프트에 반영했습니다."],
  ["03", "시각 초안 제작", "AI로 이미지와 영상 콘셉트를 빠르게 만들고\n여러 버전을 비교했습니다."],
  ["04", "검수·수정", "로고, 문구, 가독성, 메시지 흐름을 확인해\n발표용 결과물로 다듬었습니다."]
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

function Footer({ no }: { no: string }) {
  return (
    <>
      <p className="slideFooter">KDN ESG Story · AI 카드뉴스/영상 프로젝트</p>
      <span className="slideNo">{no}</span>
    </>
  );
}

export default function Home() {
  return (
    <main className="deck" aria-label="한전KDN ESG 발표 웹 슬라이드">
      <section className="slide slideCover" aria-labelledby="slide-1-title">
        <img className="slideBg" src="/kdn/cover-light-16x9.png" alt="" />
        <Logo />
        <span className="titleBar" />
        <p className="coverLabel">KDN ESG Story</p>
        <div className="coverChips" aria-label="핵심 키워드">
          <span>ENERGY ICT</span>
          <span>DIGITAL ESG</span>
          <span>KDN</span>
        </div>
        <h1 id="slide-1-title" className="coverTitle">
          데이터로 에너지를 잇고,
          <br />
          신뢰로 미래를 밝히다
        </h1>
        <span className="teamNine">TEAM NINE</span>
        <Footer no="01" />
      </section>

      <section className="slide slidePlan" aria-labelledby="slide-2-title">
        <img className="slideBg" src="/kdn/planning-light-16x9.png" alt="" />
        <Logo />
        <span className="titleBar" />
        <h2 id="slide-2-title" className="slideTitle">
          카드뉴스 내용 분석 및 구성 방향
        </h2>
        <p className="slideSubtitle">
          환경 · 사람 · 신뢰를 한전KDN의 ESG 실천으로 연결
        </p>

        <div className="messageBox">
          <strong>메인 메시지</strong>
          <span>
            환경을 생각하고, 사람과 함께하며,
            <br />
            정직하게 행동하는 ESG
          </span>
        </div>

        <div className="topicStack">
          <article>
            <b>E</b>
            <strong>환경</strong>
            <span>온실가스 감축 · 탄소중립 · RE100</span>
          </article>
          <article>
            <b>S</b>
            <strong>사회</strong>
            <span>중소기업 지원 · KDN 한마음 봉사단</span>
          </article>
          <article>
            <b>G</b>
            <strong>지배구조</strong>
            <span>청렴·윤리경영 · AAA · 정보공개</span>
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
          <p>밝은 파스텔 · 학생 눈높이 · ESG 아이콘 중심</p>
        </div>
        <Footer no="02" />
      </section>

      <section className="slide slideCards" aria-labelledby="slide-3-title">
        <img className="slideBg" src="/kdn/planning-light-16x9.png" alt="" />
        <Logo />
        <div className="cardNewsWall" aria-label="카드뉴스 5장">
          {cardNews.map((card) => (
            <figure key={card.label}>
              <img src={card.src} alt={card.label} />
              <figcaption>{card.label}</figcaption>
            </figure>
          ))}
        </div>
        <Footer no="03" />
      </section>

      <section className="slide slideProcess" aria-labelledby="slide-4-title">
        <img className="slideBg" src="/kdn/soft-network-16x9.png" alt="" />
        <Logo />
        <span className="titleBar" />
        <h2 id="slide-4-title" className="slideTitle">
          영상 AI 활용 및 프로젝트 소감
        </h2>
        <p className="slideSubtitle">
          AI는 초안을 빠르게 만들고, 팀은 메시지의 방향과 신뢰를 완성했습니다.
        </p>

        <div className="processGrid">
          {process.map(([num, title, body]) => (
            <article key={num}>
              <em>{num}</em>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="takeaway">
          <article>
            <strong>느낀 점</strong>
            <span>
              질문이 구체적일수록
              <br />
              AI 결과 품질이 올라갔습니다.
            </span>
          </article>
          <article>
            <strong>한 줄 결론</strong>
            <span>
              사람의 검수가 메시지의
              <br />
              신뢰를 완성했습니다.
            </span>
          </article>
        </div>
        <Footer no="04" />
      </section>

      <section className="slide slideVideo" aria-labelledby="slide-5-title">
        <img className="slideBg" src="/kdn/video-bright-16x9.png" alt="" />
        <Logo />
        <span className="titleBar" />
        <h2 id="slide-5-title" className="slideTitle">
          영상 삽입 샘플
        </h2>
        <p className="slideSubtitle">
          영상팀 결과물이 오면 중앙 프레임에 바로 올릴 수 있습니다.
        </p>

        <div className="videoShell" aria-label="영상 삽입 위치">
          <div className="videoMount" data-video-slot="same-folder-embed">
            <span aria-hidden="true">▶</span>
            <p>VIDEO PLACEHOLDER</p>
          </div>
        </div>
        <p className="videoNote">
          밝은 배경 위에 영상을 얹는 형태라 발표장 화면에서도 답답하지 않게 보입니다.
        </p>
        <Footer no="05" />
      </section>
    </main>
  );
}
