"use client";

import { useCallback, useState } from "react";

const slides = [
  {
    eyebrow: "01 Cover",
    title: "데이터로 전력을 잇고, 신뢰로 미래를 밝히다",
    body: "한전KDN의 ESG 이야기를 밝고 친근한 카드뉴스 톤으로 여는 표지입니다.",
    image: "/kdn/cover-light-16x9.png"
  },
  {
    eyebrow: "02 Planning",
    title: "카드뉴스 내용 분석 및 구성 방향",
    body: "친환경, 상생, 신뢰를 중심으로 5장 카드 흐름을 설계했습니다.",
    image: "/kdn/planning-light-16x9.png"
  },
  {
    eyebrow: "03 Card News",
    title: "완성 카드뉴스 시안",
    body: "도입, 환경, 사회, 지배구조, 마무리 순서로 메시지를 이어갑니다.",
    image: "/kdn/cardnews-01.png"
  },
  {
    eyebrow: "04 AI Process",
    title: "영상 AI 활용 및 프로젝트 소감",
    body: "AI는 초안을 빠르게 만들고, 팀은 메시지의 방향과 신뢰를 완성했습니다.",
    image: "/kdn/soft-network-16x9.png"
  },
  {
    eyebrow: "05 Video",
    title: "영상 삽입 샘플",
    body: "영상팀 결과물이 오면 밝은 분위기의 중앙 프레임에 바로 연결할 수 있습니다.",
    image: "/kdn/video-bright-16x9.png"
  }
];

export default function SlidesPage() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const slide = slides[index];

  return (
    <main className="page">
      <section className="sectionHeader centered" aria-labelledby="slides-title">
        <p className="eyebrow">Presentation</p>
        <h1 id="slides-title" className="pageTitle">
          PPT 발표 흐름
        </h1>
        <p className="sectionLead">
          실제 PPT의 5페이지 구성과 같은 순서로 웹에서도 확인할 수 있습니다.
        </p>
      </section>

      <section className="pptViewer" aria-label="발표 슬라이드 뷰어">
        <div className="pptStage">
          <img src={slide.image} alt="" />
          <div className="pptOverlay">
            <p>{slide.eyebrow}</p>
            <h2>{slide.title}</h2>
            <span>{slide.body}</span>
          </div>
        </div>

        <div className="slideControls">
          <button type="button" className="slideBtn" onClick={goPrev}>
            이전
          </button>
          <span className="slideIndicator">
            {index + 1} / {total}
          </span>
          <button type="button" className="slideBtn" onClick={goNext}>
            다음
          </button>
        </div>

        <div className="thumbRail" aria-label="슬라이드 선택">
          {slides.map((item, i) => (
            <button
              key={item.eyebrow}
              type="button"
              className={`thumbButton${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <img src={item.image} alt="" />
              <span>{item.eyebrow}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
