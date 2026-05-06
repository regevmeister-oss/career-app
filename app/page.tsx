import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-yellow-400">
        IGUIDE 🚀
      </h1>

      <p className="mb-8 text-lg text-gray-300">
        Find your perfect career using AI
      </p>

      <div className="flex gap-4">
        <Link href="/ai-career/onboarding">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            Start
          </button>
        </Link>

        <Link href="/login">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Login
          </button>
        </Link>
      </div>
    </main>
  );
}

