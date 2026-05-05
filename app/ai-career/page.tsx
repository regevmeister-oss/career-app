"use client";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-4xl md:text-5xl font-semibold mb-10">
        Feeling lost in your career?
      </h1>

      <p className="mb-10 text-gray-300 max-w-xl">
        A short journey into your true career alignment.
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => router.push("/ai-career/onboarding")}
          className="px-8 py-4 rounded-full bg-white text-black"
        >
          Yes
        </button>

        <button
          onClick={() => router.push("/ai-career/goodbye")}
          className="px-8 py-4 rounded-full border border-white"
        >
          No
        </button>
      </div>
    </div>
  );
}




