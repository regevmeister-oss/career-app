'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/result')
    }, 3000)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white text-3xl animate-pulse">
      Analyzing your inner world...
    </main>
  )
}




