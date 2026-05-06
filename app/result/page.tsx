"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="text-white">Analyzing...</p>;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl text-yellow-400 mb-4">
        {data.career}
      </h1>

      <p className="mb-6">{data.reason}</p>

      {/* ?? LOCK */}
      <div className="bg-black/60 border border-yellow-400 p-6 rounded-xl max-w-xl">

        <p className="mb-4">
          אנחנו רואים כאן משהו עמוק יותר…
        </p>

        <p className="blur-sm select-none">
          {data.personality_insight}
        </p>

        <button
          onClick={() => router.push("/pricing")}
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full"
        >
          Unlock Full Analysis ??
        </button>

      </div>

    </main>
  );
}
