"use client";

import { useSession } from "next-auth/react";

export default function PremiumPage() {
  const { data: session } = useSession();

  const handleUpgrade = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        userId: session?.user.id,
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-yellow-400 mb-6">
        Upgrade to PRO 💎
      </h1>

      <button
        onClick={handleUpgrade}
        className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
      >
        Pay $20
      </button>
    </div>
  );
}



