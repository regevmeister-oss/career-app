"use client";

export default function Premium() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <h1 className="text-3xl mb-6">Upload your CV</h1>

      <input type="file" className="mb-6" />

      <button className="px-8 py-4 bg-white text-black rounded-full">
        Analyze Deeply
      </button>
    </div>
  );
}





