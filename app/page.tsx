"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);

      setTimeout(() => {
        setShowChoices(true);
      }, 2000);

    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center text-center px-6">
      <div>
        {showText && (
          <h1 className="text-3xl md:text-5xl font-bold leading-relaxed mb-10">
            מרגיש אבוד? <br />
            עובד במקום שלא עושה אותך מאושר? <br /><br />
            יש לנו מסע קצר בשבילך — <br />
            צלילה לרצונות והצרכים האמיתיים שלך, <br />
            בדרך לאמת המקצועית שלך. <br /><br />
            <span className="text-yellow-400">
              תרצה לצאת למסע?
            </span>
          </h1>
        )}

        {showChoices && (
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => router.push("/ai-career")}
              className="w-32 h-32 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition"
            >
              כן
            </button>

            <button
              onClick={() => alert("לא לכולם מתאימה התבוננות פנימית.\nכשתרצה, אנחנו כאן ??")}
              className="w-32 h-32 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition"
            >
              לא
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
