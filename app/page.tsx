const slides = [
  {
    src: "/kdn/ppt-exact/slide-01.png",
    label: "01 KDN ESG Story 표지"
  },
  {
    src: "/kdn/ppt-exact/slide-02.png",
    label: "02 카드뉴스 구성 방향"
  },
  {
    src: "/kdn/ppt-exact/slide-03.png",
    label: "03 카드뉴스"
  },
  {
    src: "/kdn/ppt-exact/slide-04.png",
    label: "04 AI 활용 및 프로젝트 소감"
  },
  {
    src: "/kdn/ppt-exact/slide-05.png",
    label: "05 9조 영상 발표 ESG 송",
    hasVideoSlot: true
  }
];

export default function Home() {
  return (
    <main className="deck" aria-label="한전KDN ESG 발표 웹 슬라이드">
      {slides.map((slide, index) => (
        <section
          className="slide"
          aria-label={slide.label}
          key={slide.src}
        >
          <img
            className="pptSlide"
            src={slide.src}
            alt={`${slide.label} PPT 슬라이드`}
          />
          {slide.hasVideoSlot ? (
            <div
              aria-label="영상 임베드 위치"
              className="videoEmbedSlot"
              data-video-path="./ESG_song.mp4"
              data-video-slot="same-folder-embed"
            />
          ) : null}
          <span className="srOnly">{index + 1}번째 슬라이드</span>
        </section>
      ))}
    </main>
  );
}
