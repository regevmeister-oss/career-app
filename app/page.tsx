"use client";

export default function Home() {
  const text = \Feeling lost? Are you working in a place where you're not truly happy?

If you'd like, we have a short journey for you — a deep dive into your real desires and needs, guiding you toward your true professional path.

Do you want to begin?\;

  return (
    <main className="min-h-screen flex items-center justify-center text-white text-center p-10">
      <h1 className="text-3xl">{text}</h1>
    </main>
  );
}