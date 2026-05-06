"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [text, setText] = useState("");

  const fullText = מרגיש אבוד?
אם אתה שוב עובד במקום שבו אתה לא מאושר?

יש לנו מסע קצר בשבילך.
צלילה לרצונות והצרכים האמיתיים שלך,
בדרך לאמת המקצועית שלך.

תרצה לצאת למסע?;

  useEffect(() => {
    // delay לפני הופעה
    setTimeout(() => {
      setShow(true);

      // אפקט כתיבה
      let i = 0;
      const interval = setInterval(() => {
        setText((prev) => prev + fullText[i]);
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);

          // הופעת כפתורים אחרי טקסט
          setTimeout(() => {
            setShowChoices(true);
          }, 2000);
        }
      }, 35);

    }, 2000);
  }, []);

  return (
    <main className="h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-2xl px-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-relaxed whitespace-pre-line">
              {text}
            </h1>

            {showChoices && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-6 justify-center mt-10"
              >
                <button
                  onClick={() => router.push("/ai-career/onboarding/questions")}
                  className="w-32 h-32 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 hover:scale-110 transition"
                >
                  כן
                </button>

                <button
                  onClick={() => alert("כשתהיה מוכן — אנחנו כאן 💙")}
                  className="w-32 h-32 rounded-full backdrop-blur-lg bg-white/5 border border-white/10 hover:scale-110 transition"
                >
                  לא
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
