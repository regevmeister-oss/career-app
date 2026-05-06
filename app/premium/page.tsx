"use client";

import { useSession } from "next-auth/react";

export default function PremiumPage() {
  const sessionData = useSession();

  const session = sessionData?.data;
  const status = sessionData?.status;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not logged in</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-yellow-400 mb-4">
        Premium Area ??
      </h1>

      <p>Welcome {session.user?.email}</p>
    </main>
  );
}
