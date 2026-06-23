"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Cover",
    title: "9조 ESG 프로젝트",
    body: "한전KDN 연수 9조 · 지속가능한 미래를 위한 ESG 이야기"
  },
  {
    eyebrow: "Intro",
    title: "왜 ESG인가요?",
    body: "기업과 사회의 지속가능성을 평가하는 새로운 기준, 환경·사회·지배구조를 소개합니다."
  },
  {
    eyebrow: "Environment",
    title: "환경 (E)",
    body: "탄소 배출, 에너지 효율, 재생에너지 전환 등 측정 가능한 환경 지표를 살펴봅니다."
  },
  {
    eyebrow: "Social",
    title: "사회 (S)",
    body: "안전, 노동, 지역사회, 공급망 등 사람과 관계에 대한 책임을 다룹니다."
  },
  {
    eyebrow: "Governance",
    title: "지배구조 (G)",
    body: "투명한 의사결정, 윤리경영, 정보공개로 신뢰를 만드는 구조를 설명합니다."
  },
  {
    eyebrow: "Our Work",
    title: "우리가 만든 것",
    body: "ESG 핵심 메시지를 담은 카드뉴스와 소개 영상을 제작했습니다."
  },
  {
    eyebrow: "Closing",
    title: "감사합니다",
    body: "9조의 ESG 프로젝트 발표를 마칩니다. 질문을 환영합니다!"
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const slide = slides[index];

  return (
    <main className="page">
      <section className="sectionHeader" aria-labelledby="slides-title">
        <p className="eyebrow">Presentation</p>
        <h2 id="slides-title">발표 슬라이드</h2>
      </section>

      <section className="slideViewer" aria-label="발표 슬라이드 뷰어">
        <div className="slideStage" role="group" aria-roledescription="slide">
          <p className="slideEyebrow">{slide.eyebrow}</p>
          <h3 className="slideTitle">{slide.title}</h3>
          <p className="slideBody">{slide.body}</p>
        </div>

        <div className="slideControls">
          <button
            type="button"
            className="slideBtn"
            onClick={goPrev}
            aria-label="이전 슬라이드"
          >
            ← 이전
          </button>
          <span className="slideIndicator">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            className="slideBtn"
            onClick={goNext}
            aria-label="다음 슬라이드"
          >
            다음 →
          </button>
        </div>

        <div className="slideDots" aria-hidden="true">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`slideDot${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      </section>

      <p className="slideHint">키보드 좌우 화살표(← →)로도 넘길 수 있어요.</p>
    </main>
  );
}
