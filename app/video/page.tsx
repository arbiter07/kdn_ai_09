const cues = [
  "한전KDN ESG 카드뉴스 소개",
  "친환경 · 상생 · 신뢰 키워드 연결",
  "팀 프로젝트 소감과 마무리 메시지"
];

export default function VideoPage() {
  return (
    <main className="page">
      <section className="sectionHeader centered" aria-labelledby="video-title">
        <p className="eyebrow">Video</p>
        <h1 id="video-title" className="pageTitle">
          영상 삽입 샘플
        </h1>
        <p className="sectionLead">
          PPT 5페이지처럼 밝은 분위기의 영상 프레임을 웹에도 준비했습니다.
        </p>
      </section>

      <section className="videoHero" aria-label="프로젝트 영상 샘플">
        <div className="videoMock">
          <img src="/kdn/video-bright-16x9.png" alt="한전KDN ESG 영상 샘플" />
          <div className="playMark" aria-hidden="true">
            ▶
          </div>
        </div>
        <aside className="videoPanel">
          <p className="eyebrow">Sample Script</p>
          <h2>세상을 밝히는 착한 에너지</h2>
          <p>
            영상팀 최종본은 이 영역의 샘플 이미지를 실제 영상으로 교체해도
            전체 분위기가 유지되도록 설계했습니다.
          </p>
          <ul>
            {cues.map((cue) => (
              <li key={cue}>{cue}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
