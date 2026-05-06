"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    fetch("/api/ai/analyze", {
      method: "POST",
      body: JSON.stringify({ answers }),
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="text-white p-10">Analyzing...</div>;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">{data.personality}</h1>

      <p className="mb-6">{data.message}</p>

      {/* FREE PART */}
      <div className="mb-6">
        <h2 className="text-2xl">Strengths</h2>
        <ul>{data.strengths.map((s:any,i:number)=><li key={i}>✔ {s}</li>)}</ul>
      </div>

      {/* LOCKED PART */}
      <div className="opacity-40 blur-sm">
        <h2 className="text-2xl">Careers</h2>
        <ul>{data.careers.map((c:any,i:number)=><li key={i}>💼 {c}</li>)}</ul>
      </div>

      <button
        onClick={async () => {
          const res = await fetch("/api/checkout", { method: "POST" });
          const data = await res.json();
          window.location.href = data.url;
        }}
        className="mt-10 px-6 py-3 bg-yellow-400 text-black rounded-xl"
      >
        Unlock Full Career Path 🚀
      </button>
    </main>
  );
}
