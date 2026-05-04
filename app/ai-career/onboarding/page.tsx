"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "When do you feel most alive?",
  "What problems do you enjoy solving?",
  "What drains your energy?",
  "If failure was impossible, what would you do?",
  "Do you prefer structure or freedom?",
  "People, ideas, or systems?",
  "Impact or income?",
  "Best work environment?",
  "What are you naturally good at?",
  "Where do you see yourself in 5 years?"
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const updated = [...answers, answer];
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(updated));
      router.push("/ai-career/result");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-3xl mb-10">{questions[step]}</h1>

      <div className="flex gap-6">
        <button onClick={() => handleAnswer("Yes")} className="border px-6 py-3 rounded-full">Yes</button>
        <button onClick={() => handleAnswer("No")} className="border px-6 py-3 rounded-full">No</button>
      </div>
    </div>
  );
}
