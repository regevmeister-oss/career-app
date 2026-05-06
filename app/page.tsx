"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const fullText = `מרגיש אבוד? אם אתה שוב עובד במקום שבו אתה לא מאושר?

אם תרצה, יש לנו מסע קצר בשבילך, צלילה לרצונות והצרכים האמיתיים שלך, בדרך לאמת המקצועית שלך.

תרצה לצאת למסע?`;

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const words = fullText.split(" ");
    let index = 0;

    // ⏳ התחלה אחרי 2 שניות
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + words[index] + " ");
        index++;

        if (index === words.length) {
          clearInterval(interval);

          // ⏱️ תשובות אחרי 2 שניות
          setTimeout(() => {
            setShowAnswers(true);
          }, 2000);
        }
      }, 1000); // מילה כל שנייה
    }, 2000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      {/* 🧠 השאלה */}
      <h1 className="text-3xl md:text-5xl font-bold leading-relaxed max-w-3xl">
        {displayedText}
      </h1>

      {/* ⭕ תשובות */}
      {showAnswers && (
        <div className="flex gap-6 mt-10">

          {/* כן */}
          <button
            onClick={() => router.push("/ai-career/onboarding")}
            className="w-32 h-32 rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:scale-110 transition flex items-center justify-center text-lg font-bold"
          >
            כן
          </button>

          {/* לא */}
          <button
            onClick={() => alert("לא לכולם מתאימה התבוננות פנימית, כשתרצה אנחנו כאן 🙏")}
            className="w-32 h-32 rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:scale-110 transition flex items-center justify-center text-lg font-bold"
          >
            לא
          </button>

        </div>
      )}

    </main>
  );
}

