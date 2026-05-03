"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result || "No result");
      })
      .catch(() => {
        setResult("Error loading result");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex items-center justify-center px-6">
      {!result ? (
        <p className="animate-pulse text-lg">Analyzing your answers...</p>
      ) : (
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-bold mb-6">Your Career Insights 🚀</h1>
          <p className="leading-relaxed">{result}</p>
        </div>
      )}
    </div>
  );
}