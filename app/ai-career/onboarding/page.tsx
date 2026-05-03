"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ResultPage() {
  const [result, setResult] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    async function fetchResult() {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      setResult(data.result);
      setLoading(false);
    }

    fetchResult();
  }, []);

  // ✨ אפקט כתיבה (Typing כמו GPT)
  useEffect(() => {
    if (!result) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(result.slice(0, i));
      i++;
      if (i > result.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [result]);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-start px-6 py-20 relative overflow-hidden">
      
      {/* 🌊 רקע */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />

      {/* 🧠 כותרת */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-4xl md:text-5xl font-serif text-center mb-10"
        style={{
          color: "black",
          WebkitTextStroke: "1px gold",
        }}
      >
        Your Personal Career Insight
      </motion.h1>

      {/* 🤖 כרטיס תוצאה */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20"
      >
        {loading ? (
          <div className="text-center text-lg animate-pulse">
            Analyzing your personality...
          </div>
        ) : (
          <pre className="whitespace-pre-wrap font-sans leading-relaxed text-lg">
            {displayedText}
          </pre>
        )}
      </motion.div>

      {/* 💰 CTA */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="z-10 mt-10 text-center"
        >
          <p className="mb-4 text-lg opacity-80">
            Want deeper insights and exact career matches?
          </p>

          <button className="bg-gradient-to-r from-yellow-500 to-pink-500 px-8 py-3 rounded-full text-black font-semibold hover:scale-105 transition">
            Unlock Full Report 🔓
          </button>
        </motion.div>
      )}
    </div>
  );
}