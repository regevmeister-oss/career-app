"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    text: "Where in your life do you feel most alive?",
    options: ["At home", "At work", "Outside", "With people"],
  },
  {
    id: 2,
    text: "What drains your energy the most?",
    options: ["Routine", "People", "Pressure", "Lack of purpose"],
  },
  {
    id: 3,
    text: "What kind of environment helps you grow?",
    options: ["Structured", "Creative", "Social", "Independent"],
  },
  {
    id: 4,
    text: "If money didn’t matter, what would you do?",
    options: ["Create", "Help others", "Explore", "Build something"],
  },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  // delay ראשוני
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // מעבר שאלה
    setShow(false);

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setShow(true);
      } else {
        localStorage.setItem("answers", JSON.stringify(newAnswers));
        window.location.href = "/result";
      }
    }, 600);
  };

  const q = questions[current];

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-3xl text-center px-6">
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              {/* שאלה */}
              <h1
                className="text-5xl md:text-6xl font-serif mb-12"
                style={{
                  color: "white",
                  WebkitTextStroke: "0.8px #d4af37",
                }}
              >
                {q.text}
              </h1>

              {/* תשובות */}
              <div className="space-y-4">
                {q.options.map((opt, i) => (
                  <motion.button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="w-full py-4 px-6 rounded-xl bg-white/10 text-white text-xl backdrop-blur-md hover:bg-white/20 transition"
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}