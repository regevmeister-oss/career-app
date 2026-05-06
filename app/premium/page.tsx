"use client";

import { useSession } from "next-auth/react";

export default function PremiumPage() {
  const sessionData = useSession();

  if (!sessionData) {
    return null;
  }

  const { data } = sessionData;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Premium ??
      </h1>

      {data ? (
        <p>Welcome PRO user</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </main>
  );
}
