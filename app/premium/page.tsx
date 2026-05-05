'use client'

export default function PremiumPage() {
  const isPro = typeof window !== 'undefined' && localStorage.getItem('isPro') === 'true'

  if (!isPro) return <div style={{padding:40}}>?? Not authorized</div>

  return (
    <div style={{padding:40}}>
      <h1>?? PRO UNLOCKED</h1>
      <p>Your full AI career system is active.</p>
    </div>
  )
}


