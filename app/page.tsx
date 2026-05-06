'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [showText, setShowText] = useState(false);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);

      setTimeout(() => {
        setShowChoices(true);
      }, 7000); // זמן עד שכל המשפט נגמר
    }, 2000); // דיליי ראשוני
  }, []);

  const text = [
    "מרגיש אבוד?",
    "אם אתה שוב עובד במקום שבו אתה לא מאושר?",
    "יש לנו מסע קצר בשבילך...",
    "צלילה לרצונות והצרכים האמיתיים שלך",
    "בדרך לאמת המקצועית שלך.",
    "",
    "תרצה לצאת למסע?"
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      
      {showText && (
        <div className="text-3xl md:text-5xl font-bold leading-relaxed space-y-4">
          {text.map((line, i) => (
            <p
              key={i}
              style={{
                animation: \adeIn 1s ease forwards\,
                animationDelay: \\s\,
                opacity: 0
              }}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {showChoices && (
        <div className="flex gap-6 mt-12">
          
          <button
            onClick={() => router.push('/onboarding')}
            className="w-32 h-32 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:scale-110 transition text-lg"
          >
            כן
          </button>

          <button
            onClick={() => alert('כשתרצה, אנחנו כאן ??')}
            className="w-32 h-32 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:scale-110 transition text-lg"
          >
            לא
          </button>

        </div>
      )}

      <style jsx>{\
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      \}</style>

    </div>
  );
}
