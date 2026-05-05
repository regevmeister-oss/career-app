"use client";

import { useEffect, useState } from "react";

export default function Result() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const answers = localStorage.getItem("answers");

    if (answers) {
      fetch("/api/analyze", {
        method: "POST",
        body: answers
      })
        .then(res => res.json())
        .then(setData);
    }
  }, []);

  if (!data) return <div className="text-white p-10">Analyzing...</div>;

  const isPro = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === 'true';

return (
    <div className="min-h-screen bg-black text-white p-10 space-y-6">
      <h1 className="text-4xl">Your Career DNA</h1>

      <p>{data.identity}</p>

      <button
        onClick={() => location.href="/ai-career/premium"}
        className="mt-10 px-8 py-4 bg-yellow-400 text-black rounded-full"
      >
        Unlock Premium
      </button>
    </div>
  );
}


