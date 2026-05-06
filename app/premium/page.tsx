"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PremiumPage() {
  const { data } = useSession();
  const router = useRouter();

  if (!data) {
    return <p>Loading...</p>;
  }

  if (!data.user?.isPro) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl mb-6">?? Premium Locked</h1>

        <button
          onClick={() => router.push("/pricing")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full"
        >
          Unlock Now
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white">
      <h1>?? Welcome PRO user</h1>
    </main>
  );
}
