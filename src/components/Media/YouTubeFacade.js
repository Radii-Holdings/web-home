"use client";

import { useState } from "react";

export default function YouTubeFacade({
  title,
  embedUrl,
  posterUrl,
  className = "",
  eyebrow = "Video walkthrough",
}) {
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    return (
      <div className={`relative aspect-video overflow-hidden ${className}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsActive(true)}
      aria-label={`Play ${title}`}
      className={`group relative aspect-video w-full overflow-hidden text-left ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(7, 12, 18, 0.3), rgba(7, 12, 18, 0.72)), url('${posterUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-dark/70" />
      <div className="relative flex h-full flex-col justify-end p-6 text-light sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-light/75">
          {eyebrow}
        </p>
        <h3 className="mt-3 max-w-2xl text-xl font-bold sm:text-2xl">{title}</h3>
        <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-light px-5 py-3 font-semibold text-dark transition group-hover:scale-105">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-light text-sm font-bold">
            Play
          </span>
          <span>Load video</span>
        </div>
      </div>
    </button>
  );
}
