"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy slides; can be overridden by passing `slides` prop
const defaultSlides = [
  {
    image: "/blogs/blog backdrop.png",
    link: "/categories/all",
    text: "Explore Our Latest Insights",
  },
  {
    image: "/social-banner2.jpg",
    link: "https://layr0.org",
    text: "Explore Our Cross Broker Trading Platform",
  },
  {
    image: "/character.png",
    link: "https://example.com/three",
    text: "Design. Develop. Deliver.",
  },
];

const clampIndex = (idx, length) => {
  if (length === 0) return 0;
  return (idx + length) % length;
};

const HomeCarousel = ({ slides = defaultSlides, autoIntervalMs = 5000 }) => {
  const [index, setIndex] = useState(0);
  const length = slides.length;
  const timerRef = useRef(null);

  const containerRef = useRef(null);
  const dragState = useRef({ startX: 0, currentX: 0, dragging: false });

  const goTo = (next) => setIndex((i) => clampIndex(next, length));
  const next = () => setIndex((i) => clampIndex(i + 1, length));
  const prev = () => setIndex((i) => clampIndex(i - 1, length));

  // Auto-advance
  useEffect(() => {
    if (length <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      next();
    }, autoIntervalMs);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [length, autoIntervalMs]);

  // Drag handlers (mouse + touch)
  const onStart = (clientX) => {
    dragState.current = { startX: clientX, currentX: clientX, dragging: true };
  };
  const onMove = (clientX) => {
    if (!dragState.current.dragging) return;
    dragState.current.currentX = clientX;
  };
  const onEnd = () => {
    if (!dragState.current.dragging) return;
    const delta = dragState.current.currentX - dragState.current.startX;
    dragState.current.dragging = false;
    const threshold = 50; // px
    if (Math.abs(delta) > threshold) {
      if (delta < 0) next(); // swiped left -> next
      else prev(); // swiped right -> prev
    }
  };

  const handleMouseDown = (e) => onStart(e.clientX);
  const handleMouseMove = (e) => onMove(e.clientX);
  const handleMouseUp = () => onEnd();
  const handleMouseLeave = () => onEnd();

  const handleTouchStart = (e) => onStart(e.touches[0].clientX);
  const handleTouchMove = (e) => onMove(e.touches[0].clientX);
  const handleTouchEnd = () => onEnd();

  const transformStyle = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index]
  );

  if (!length) return null;

  return (
    <div className="w-full inline-block select-none">
      <article
        className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]"
      >
        {/* Viewport */}
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden rounded-3xl"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides track */}
          <div
            className="absolute inset-0 flex h-full w-full transition-transform duration-500 ease-out"
            style={transformStyle}
          >
            {slides.map((s, i) => (
              <div key={i} className="relative min-w-full h-full">
                <Link
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-[1]"
                  />
                  {/* Image */}
                  <Image
                    src={s.image}
                    alt={s.text}
                    fill
                    className="w-full h-full object-center object-cover rounded-3xl"
                    sizes="100vw"
                    priority={i === 0}
                  />
                  {/* Text overlay */}
                  <div className="absolute inset-0 z-[2] flex items-end">
                    <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 text-light">
                      <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">
                        <span className="hero-title-underline brand-blue-text">{s.text}</span>
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Controls */}
          {length > 1 && (
            <>
              <button
                aria-label="Previous slide"
                onClick={(e) => {
                  e.preventDefault();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-[3] grid place-items-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-[3] grid place-items-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(i);
                    }}
                    className={
                      "h-2 w-2 rounded-full transition-all " +
                      (i === index ? "bg-white w-6" : "bg-white/50")
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </article>
    </div>
  );
};

export default HomeCarousel;

