"use client";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold text-yellow-400 mb-4 text-center">
        Your AI Career Blueprint is Ready ??
      </h1>

      <p className="text-gray-300 mb-6 text-center">
        Discover your ideal career path, salary potential, and next steps.
      </p>

      <div className="bg-white/10 p-6 rounded-xl mb-6 w-full max-w-md">
        <p className="text-lg mb-2">Top Match: <b>Product Manager</b></p>
        <p className="text-sm text-gray-400 blur-sm">
          Salary:  - 
        </p>
        <p className="text-sm text-gray-400 blur-sm">
          Roadmap: Learn product strategy, UX, leadership...
        </p>
      </div>

      <ul className="text-left mb-6 space-y-2">
        <li>? Personalized career path</li>
        <li>? Salary insights</li>
        <li>? Step-by-step roadmap</li>
        <li>? Skills to learn</li>
      </ul>

      <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl text-lg font-bold hover:scale-105 transition">
        ?? Unlock Full Report - 
      </button>

      <p className="text-gray-500 mt-4 text-sm">
        Limited lifetime access
      </p>

    </main>
  );
}
