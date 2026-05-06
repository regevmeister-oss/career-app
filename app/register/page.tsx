"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    window.location.href = "/login";
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
      <button onClick={handleRegister} className="bg-green-400 px-4 py-2 text-black">
        Register
      </button>
    </div>
  );
}

  return (
    <div style={{ padding: 40 }}>
      <h1>Register / Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />

      <button onClick={handleLogin}>
        Continue
      </button>
    </div>
  )
}





