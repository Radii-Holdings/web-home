"use client";
import React from "react";

export default function ContactButton() {
  const handleClick = () => {
    window.location.href = "mailto:info@radii.in";
  };

  return (
    <button
      onClick={handleClick}
      className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded"
    >
      Email Us
    </button>
  );
}
