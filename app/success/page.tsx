"use client";

export default function SuccessPage() {
  if (typeof window !== "undefined") {
    localStorage.setItem("isPro", "true");
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black">
      <h1 className="text-4xl text-yellow-400">
        Payment Successful 🎉
      </h1>
    </div>
  );
}
