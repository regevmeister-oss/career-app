"use client";

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Discover Your Ideal Career</h1>
      <p>
        Answer a few questions and we’ll reveal how your brain works and what
        career fits you best.
      </p>

      <button
        onClick={() => alert("Test coming soon!")}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          borderRadius: 8,
        }}
      >
        Start Test
      </button>
    </main>
  );
}