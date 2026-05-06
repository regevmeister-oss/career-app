"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3 p-2 text-black"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="mb-3 p-2 text-black"
      />
      <button onClick={handleLogin} className="bg-yellow-400 px-4 py-2 text-black">
        Login
      </button>
    </div>
  );
}