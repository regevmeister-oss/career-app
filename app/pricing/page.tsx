"use client";

export default function PricingPage() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <div className="bg-white/10 p-10 rounded-2xl">
        <h1 className="text-3xl mb-4">IGUIDE PRO</h1>
        <p className="mb-6">Unlock full career insights</p>

        <button
          onClick={handleCheckout}
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl"
        >
          Upgrade
        </button>
      </div>
    </div>
  );
}





