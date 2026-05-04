export default function Home() {
  return (
    <main className="relative h-screen w-full text-white">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10">
        <h1 className="text-6xl font-bold mb-6">IGUIDE</h1>

        <p className="text-xl mb-6 max-w-xl">
          Discover the perfect career path based on your personality,
          lifestyle, and goals. Powered by AI.
        </p>

        <a
          href="/ai-career/onboarding"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Start Your Analysis
        </a>

        <p className="mt-4 text-sm opacity-80">
          Takes less than 2 minutes
        </p>
      </div>
    </main>
  );
}