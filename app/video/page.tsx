// 실제 발표 영상이 준비되면 아래 YOUTUBE_ID 값만 우리 영상 ID로 교체하세요.
// 예) https://www.youtube.com/watch?v=AbCdEfGhIjK  ->  YOUTUBE_ID = "AbCdEfGhIjK"
const YOUTUBE_ID = "5qap5aO4i9A"; // placeholder: 일반 자연/배경 영상

export default function VideoPage() {
  return (
    <main className="page">
      <section className="sectionHeader" aria-labelledby="video-title">
        <p className="eyebrow">Our Video</p>
        <h2 id="video-title">프로젝트 영상</h2>
      </section>

      <section aria-label="프로젝트 소개 영상">
        <div className="videoFrame">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="9조 ESG 프로젝트 영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className="videoCaption">
          현재는 임시 영상이 연결되어 있습니다. 우리 팀이 제작한 영상을
          유튜브에 업로드한 뒤 링크만 교체하면 이 자리에 표시됩니다.
        </p>
      </section>
    </main>
  );
}
