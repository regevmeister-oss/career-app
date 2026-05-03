"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // 🔐 שמירת PRO (גרסה ראשונית)
    localStorage.setItem("isPro", "true");

    setTimeout(() => {
      router.push("/result");
    }, 1500);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <h1 className="text-3xl">Payment successful 🎉</h1>
    </div>
  );
}