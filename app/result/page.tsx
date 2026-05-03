"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ResultPage() {
  const [stage, setStage] = useState(0);
  const [text, setText] = useState("");
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    async function fetchAI() {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      setText(data.result);
    }

    fetchAI();

    const stages = [
      "Analyzing your life patterns...",
      "Understanding your energy sources...",
      "Building your personal profile...",
    ];

    let i = 0;
    const interval = setInterval(() => {
      setStage(i);
      i++;
      if (i === stages.length) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stages = [
    "Analyzing your life patterns...",
    "Understanding your energy sources...",
    "Building your personal profile...",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">

      {/* 🔥 Skeleton בזמן טעינת תמונה */}
      {loadingImage && (
        <div className="absolute inset-0 bg-black animate-pulse z-0" />
      )}

      {/* 🔥 Background Image (מהיר) */}
      <Image
        src="/bg.jpg"
        alt="background"
        fill
        priority
        quality={70}
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          loadingImage ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoadingImage(false)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-3xl w-full bg-black/50 p-8 rounded-2xl border border-white/10 shadow-xl">

          {stage < 3 ? (
            <div className="text-xl animate-pulse text-center">
              {stages[stage]}
            </div>
          ) : (
            <div className="text-lg leading-relaxed whitespace-pre-line">
              {text}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
