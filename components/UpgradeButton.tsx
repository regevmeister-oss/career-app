"use client";

export default function UpgradeButton() {
  const handleClick = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition"
    >
      Upgrade to PRO 🚀
    </button>
  );
}