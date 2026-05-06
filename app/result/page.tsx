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

  if (!data) return <div className="text-white p-10">Analyzing your future...</div>;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">{data.personality}</h1>

      <p className="mb-6 text-lg opacity-80">{data.message}</p>

      <div className="mb-6">
        <h2 className="text-2xl mb-2">Strengths</h2>
        <ul>{data.strengths.map((s:any,i:number)=><li key={i}>✔ {s}</li>)}</ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl mb-2">Weaknesses</h2>
        <ul>{data.weaknesses.map((w:any,i:number)=><li key={i}>⚠ {w}</li>)}</ul>
      </div>

      <div>
        <h2 className="text-2xl mb-2">Recommended Careers</h2>
        <ul>{data.careers.map((c:any,i:number)=><li key={i}>💼 {c}</li>)}</ul>
      </div>
    </main>
  );
}
