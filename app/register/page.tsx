"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Register
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="mb-4 px-4 py-2 rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="mb-6 px-4 py-2 rounded text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-yellow-400 text-black px-6 py-2 rounded">
        Create Account
      </button>
    </main>
  );
}
