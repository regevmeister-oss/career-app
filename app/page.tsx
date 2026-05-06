"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6">

      {/* Logo / Title */}
      <h1 className="text-6xl font-extrabold mb-6 text-yellow-400 tracking-tight">
        IGUIDE 🚀
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Find your perfect career using AI.  
        Smart decisions based on your life, not just your resume.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">

        <Link href="/ai-career/onboarding">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg hover:scale-105">
            Start Your Journey
          </button>
        </Link>

        <Link href="/login">
          <button className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:scale-105">
            Login
          </button>
        </Link>

      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-gray-800 w-full max-w-xl"></div>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl">

        <div className="p-4 bg-gray-900 rounded-xl">
          <h3 className="text-yellow-400 font-bold mb-2">AI Analysis</h3>
          <p className="text-sm text-gray-400">
            Personalized career insights based on your answers
          </p>
        </div>

        <div className="p-4 bg-gray-900 rounded-xl">
          <h3 className="text-yellow-400 font-bold mb-2">Life Matching</h3>
          <p className="text-sm text-gray-400">
            Jobs that fit your lifestyle and preferences
          </p>
        </div>

        <div className="p-4 bg-gray-900 rounded-xl">
          <h3 className="text-yellow-400 font-bold mb-2">Smart Direction</h3>
          <p className="text-sm text-gray-400">
            Guidance even if you don’t know what you want yet
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-16 text-xs text-gray-500">
        © {new Date().getFullYear()} IGUIDE — Built with AI
      </div>

    </main>
  );
}

