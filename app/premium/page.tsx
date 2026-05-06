"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PremiumPage() {
  const router = useRouter();
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // סימולציה - בעתיד זה יבוא מהשרת / Stripe / DB
    const userPlan = localStorage.getItem("isPro");

    if (userPlan === "true") {
      setIsPro(true);
    }

    setLoading(false);
  }, []);

  const handleUpgrade = () => {
    // בעתיד → חיבור ל-Stripe Checkout
    router.push("/checkout");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        טוען...
      </div>
    );
  }

  // 🟢 משתמש פרימיום
  if (isPro) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl text-green-400 mb-4">
          🎉 אתה משתמש PRO
        </h1>
        <p className="text-lg text-gray-300">
          כל הפיצ'רים פתוחים לך
        </p>

        <button
          onClick={() => router.push("/ai-career/result")}
          className="mt-6 px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600 transition"
        >
          עבור לתוצאות שלך
        </button>
      </div>
    );
  }

  // 🔒 משתמש רגיל (נעול)
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          🔒 Premium Locked
        </h1>

        <p className="text-gray-300 mb-6">
          כדי לקבל תובנות קריירה עמוקות מותאמות אישית + המלצות AI,
          שדרג לגרסת PRO
        </p>

        {/* FEATURES */}
        <div className="text-left mb-8 space-y-3">
          <p>✅ ניתוח AI מלא של האישיות שלך</p>
          <p>✅ התאמת קריירה מדויקת</p>
          <p>✅ המלצות ללימודים והכשרה</p>
          <p>✅ מסלול קריירה עתידי</p>
        </div>

        <button
          onClick={handleUpgrade}
          className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition text-lg"
        >
          שדרג ל-PRO 🚀
        </button>

        <button
          onClick={() => router.push("/")}
          className="mt-4 text-sm text-gray-400 hover:text-white"
        >
    
        </button>
      </div>
    </div>
  );
}



