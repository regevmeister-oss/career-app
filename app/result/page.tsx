"use client";
import UpgradeButton from "@/components/UpgradeButton";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("analysis");
    if (stored) setData(JSON.parse(stored));
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10 space-y-8">
      <h1 className="text-5xl text-center text-yellow-400">
        Your Career DNA
      </h1>

      <p className="text-xl text-center">{data.identity}</p>

      <div>
        <h2 className="text-2xl text-yellow-400">Strengths</h2>
        <ul>
          {data.strengths?.map((s: string, i: number) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      <UpgradeButton />
<PayButton />
</div>

      <div>
        <h2 className="text-2xl text-yellow-400">Careers</h2>
        <ul>
          {data.recommendedCareers?.map((s: string, i: number) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
    <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
  Upgrade (coming soon)
</button>
</div>

      <div>
        <h2 className="text-2xl text-yellow-400">Next Steps</h2>
        <ul>
          {data.nextSteps?.map((s: string, i: number) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      <UpgradeButton />
<PayButton />
</div>
    <UpgradeButton />
<PayButton />
</div>
  );
}
