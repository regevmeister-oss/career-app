"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]");

    fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="text-white">Analyzing...</p>;

  return (
    <div className="w-full bg-gray-800 h-2 fixed top-0 left-0">
  <div className="bg-yellow-400 h-2" style={{ width: "80%" }} />
</div>

<main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl text-yellow-400 mb-4">
        {data.career}
      </h1>

      <p className="mb-6">{data.reason}</p>

      {/* ?? LOCK */}
      <div className="bg-black/60 border border-yellow-400 p-6 rounded-xl max-w-xl">

        <p className="mb-4">
          אנחנו רואים כאן משהו עמוק יותר…
        </p>

        <p className="blur-sm select-none">
          {data.personality_insight}
        </p>

        <button
          onClick={() => router.push("/pricing")}
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full"
        >
          Unlock Full Analysis ??
        </button>

      </div>

    
      <div className="mt-10 text-sm text-gray-400">
        אתה נמצא בטופ <span className="text-yellow-400 font-bold">12%</span> 
        מבחינת מודעות קריירה ??
      </div>


      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("הלינק הועתק ?? שתף לחברים");
        }}
        className="mt-6 border border-yellow-400 px-6 py-3 rounded-full"
      >
        שתף תוצאה
      </button>


      <div className="mt-8 text-center">
        <p className="mb-2 text-gray-300">
          הזמן 2 חברים ופתח ניתוח מלא בחינם ??
        </p>
      </div>

</main>
  );
}
