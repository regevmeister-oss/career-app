"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";

export default function QuestionsPage() {
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((q, i) => (
        <div key={i}>{q}</div>
      ))}
    </div>
  );
}
