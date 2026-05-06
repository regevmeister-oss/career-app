"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "{}");

    fetch("/api/analysis", {
      method: "POST",
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        מנתח את העתיד שלך עם AI...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl mb-6 text-yellow-400">
        התוצאות שלך 🔥
      </h1>

      <div className="whitespace-pre-line text-gray-300">
        {result}
      </div>
    </div>
  );
}