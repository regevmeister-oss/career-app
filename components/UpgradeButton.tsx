"use client";

import { useState } from "react";

export default function UpgradeButton() {
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async () => {
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Payment failed");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpgrade}
      className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-bold"
    >
      {loading ? "Redirecting..." : "Upgrade to PRO ??"}
    </button>
  );
}



