"use client";

import { useRouter } from "next/navigation";

export default function AiCareerEntry() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          AI Career Test
        </h1>

        <p className="text-gray-400">
          Discover what career truly fits you
        </p>

        <button
          onClick={() => router.push("/ai-career/onboarding")}
          className="px-6 py-3 bg-white text-black rounded-xl"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}




