"use client";

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Discover your ideal career</h1>
      <p>This test will reveal how your brain actually works.</p>

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