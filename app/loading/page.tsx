'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const messages = [
  "Analyzing your personality...",
  "Understanding your energy...",
  "Matching you to ideal paths...",
  "Almost there..."
]

export default function Loading() {
  const [step, setStep] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (step < messages.length - 1) {
      const t = setTimeout(() => setStep(step + 1), 2000)
      return () => clearTimeout(t)
    } else {
      setTimeout(() => {
        router.push('/result')
      }, 2000)
    }
  }, [step])

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-black text-white text-center">

      <div className="text-2xl mb-10 transition-all duration-700">
        {messages[step]}
      </div>

      <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

    </main>
  )
}


