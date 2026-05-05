'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function RegisterPage() {
  const [email, setEmail] = useState("")

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      callbackUrl: "/premium"
    })
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




