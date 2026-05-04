"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const text = `Feeling lost? Are you working in a place where you're not truly happy?

If you'd like, we have a short journey for you — a deep dive into your real desires and needs, guiding you toward your true professional path.

Do you want to begin?`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white text-center p-10 gap-10">
      <h1 className="text-3xl max-w-2xl">{text}</h1>

      <button
        onClick={() => router.push("/onboarding")}
        className="bg-white text-black px-6 py-3 rounded-xl text-lg hover:scale-105 transition"
      >
        Start Test →
      </button>
    </main>
  );
}