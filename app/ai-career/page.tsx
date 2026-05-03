"use client";

import { useRouter } from "next/navigation";

export default function AICareerPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-start justify-center px-10">
      
      {/* DEBUG קטן */}
      <p className="text-sm opacity-50 mb-4">ROOT WORKING</p>

      {/* כותרת */}
      <h1 className="text-5xl font-bold mb-6">
        AI Career Finder 🚀
      </h1>

      {/* תיאור */}
      <p className="text-lg mb-8 opacity-80">
        Discover your perfect career path using AI
      </p>

      {/* כפתור */}
      <button
        onClick={() => router.push("/ai-career/onboarding")}
        className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition"
      >
        Start Analysis
      </button>

    </div>
  );
}