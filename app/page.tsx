"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl font-bold mb-6">
        מרגיש אבוד?
      </h1>

      <p className="mb-10 max-w-xl">
        אם תרצה, יש לנו מסע קצר שיעזור לך להבין את הכיוון המקצועי שלך
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => router.push("/onboarding")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full"
        >
          כן
        </button>

        <button
          onClick={() => alert("כשתרצה – אנחנו כאן")}
          className="border border-white px-6 py-3 rounded-full"
        >
          לא
        </button>
      </div>

    </main>
  );
}
