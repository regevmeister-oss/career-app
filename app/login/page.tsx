"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-6">Login</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded text-black mb-4"
      />

      <button
        onClick={() => signIn("credentials", { email, callbackUrl: "/result" })}
        className="bg-yellow-500 px-6 py-3 rounded-xl text-black font-bold"
      >
        Continue
      </button>
    </div>
  );
}




