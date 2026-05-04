"use client";

import { useRouter } from "next/navigation";

export default function OnboardingIntro() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">

      {/* 🖼️ Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')", // שים את התמונה שלך ב-public/bg.jpg
        }}
      />

      {/* 🌑 Overlay לשיפור קריאות */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🎯 Content CENTER */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          IGUIDE
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8">
          Discover the perfect career path based on your personality,
          lifestyle, and goals. Powered by AI.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/ai-career/onboarding/questions")}
          className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
        >
          Start Your Analysis
        </button>

        {/* Small note */}
        <p className="mt-6 text-gray-400 text-sm">
          Takes less than 2 minutes
        </p>

      </div>
    </div>
  );
}