"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("answers");
    if (stored) {
      setAnswers(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Your Results</h1>

      <ul className="space-y-2 mb-8">
        {answers.map((a, i) => (
          <li key={i} className="bg-white/10 p-3 rounded">
            {a}
          </li>
        ))}
      </ul>


      <PayButton />
    </div>
  );
}

/* =========================
   PAY BUTTON (Stripe)
========================= */
function PayButton() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-500 px-6 py-3 rounded text-black font-bold hover:bg-green-400 transition"
    >
      Upgrade to PRO 🚀
    </button>
  );
}