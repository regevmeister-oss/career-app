export default function Home() {
  const text = \Feeling lost? Are you working in a place where you're not truly happy?

If you'd like, we have a short journey for you — a deep dive into your real desires and needs, guiding you toward your true professional path.\;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Discover Your True Career</h1>
        <p className="whitespace-pre-line text-gray-300">{text}</p>
        <a href="/ai-career" className="bg-white text-black px-6 py-3 rounded-xl">
          Start Test →
        </a>
      </div>
    </main>
  );
}
