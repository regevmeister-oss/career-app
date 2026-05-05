"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";

export default function QuestionsPage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (answer: string) => {
    const updated = [...answers, answer];
    setAnswers(updated);

    if (updated.length === questions.length) {
      submit(updated);
    }
  };

  const submit = async (finalAnswers: string[]) => {
    setLoading(true);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify({ answers: finalAnswers }),
    });

    const data = await res.json();
    localStorage.setItem("analysis", JSON.stringify(data));
    window.location.href = "/result";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
      {loading ? (
        <h1 className="text-3xl">Analyzing your future...</h1>
      ) : (
        <>
          <h1 className="text-4xl mb-10">
            {questions[answers.length]}
          </h1>

          <div className="flex gap-6">
            <button onClick={() => handleAnswer("Yes")} className="bg-green-500 px-6 py-3 rounded-xl">
              Yes
            </button>
            <button onClick={() => handleAnswer("No")} className="bg-red-500 px-6 py-3 rounded-xl">
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}


