"use client";

export default function PremiumPage() {
  const handleUpgrade = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-yellow-400 mb-6">
        Unlock Your Full Career Analysis 🔒
      </h1>

      <p className="mb-8 text-gray-300 text-center max-w-md">
        Get a personalized AI career roadmap tailored to your life, goals,
        and personality.
      </p>

      <button
        onClick={handleUpgrade}
        className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
      >
        Upgrade to PRO ($20)
      </button>
    </div>
  );
}

