"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const answers = localStorage.getItem("answers");

    if (answers) {
      router.push("/result");
    } else {
      router.push("/onboarding");
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      Loading...
    </div>
  );
}