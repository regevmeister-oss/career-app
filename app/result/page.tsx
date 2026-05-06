"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);

        // Reveal sequence
        setTimeout(() => setStep(1), 1500);
        setTimeout(() => setStep(2), 3500);
        setTimeout(() => setStep(3), 5500);
        setTimeout(() => setStep(4), 7500);
      });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      {!data && (
        <h1 className="text-2xl animate-pulse">
          אנחנו מנתחים את האישיות שלך...
        </h1>
      )}

      {data && (
        <div className="max-w-xl space-y-6">

          {step >= 1 && (
            <h1 className="text-4xl font-bold text-yellow-400 animate-fadeIn">
              {data.career}
            </h1>
          )}

          {step >= 2 && (
            <p className="text-lg text-gray-300 animate-fadeIn">
              {data.reason}
            </p>
          )}

          {step >= 3 && (
            <div className="bg-red-900/30 p-4 rounded-xl animate-fadeIn">
              <h2 className="font-bold mb-2">?? מה עלול לעצור אותך</h2>
              <p>{data.risks}</p>
            </div>
          )}

          {step >= 4 && (
            <div className="bg-green-900/30 p-4 rounded-xl animate-fadeIn">
              <h2 className="font-bold mb-2">?? הצעדים הבאים שלך</h2>
              <ul className="space-y-2">
                {data.next_steps?.map((s: string, i: number) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      )}

    </main>
  );
}
