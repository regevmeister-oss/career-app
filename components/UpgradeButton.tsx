"use client";

import { useRouter } from "next/navigation";

export default function UpgradeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/premium")}
      className="bg-yellow-500 px-6 py-3 rounded-xl text-black font-bold mt-6"
    >
      Unlock Premium Analysis
    </button>
  );
}
