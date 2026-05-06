"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    if (!session.user.isPro) {
      router.push("/premium");
      return;
    }

    generateResult();
  }, [session, status]);

  const generateResult = async () => {
    const res = await fetch("/api/analysis", {
      method: "POST",
      body: JSON.stringify({
        answers: JSON.parse(localStorage.getItem("answers") || "[]"),
      }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Generating your AI career path...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl text-yellow-400 mb-6">
        Your AI Career Path 🚀
      </h1>

      <div className="bg-gray-900 p-6 rounded-xl whitespace-pre-line">
        {result}
      </div>
    </div>
  );
}





