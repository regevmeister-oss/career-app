"use client";

export default function PayButton() {
  const handlePay = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <button
      onClick={handlePay}
      className="bg-yellow-500 px-6 py-3 rounded-xl text-black font-bold mt-6"
    >
      Unlock Premium ()
    </button>
  );
}


