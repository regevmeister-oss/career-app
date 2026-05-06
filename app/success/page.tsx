"use client";

import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    // סימולציה (בהמשך נחליף ל-DB אמיתי)
    localStorage.setItem("isPro", "true");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white flex-col">
      <h1 className="text-4xl text-green-400 mb-4">
        🎉 התשלום הצליח!
      </h1>
      <p>פתחת את גרסת PRO</p>
    </div>
  );
}





