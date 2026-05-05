'use client'

import { useEffect, useState } from 'react'

export default function ResultPage() {
  const [isPro, setIsPro] = useState(false)
  const [ai, setAi] = useState<any>(null)

  useEffect(() => {
    const pro = localStorage.getItem('isPro')
    if (pro === 'true') setIsPro(true)

    fetch('/api/analysis', { method: 'POST' })
      .then(res => res.json())
      .then(setAi)
  }, [])

  const handleUpgrade = async () => {
    const res = await fetch('/api/checkout', { method: 'POST' })
    const data = await res.json()
    window.location.href = data.url
  }

  if (!ai) return <div style={{padding:40}}>Loading AI...</div>

  return (
    <div style={{ padding: 40, background:'#0f172a', color:'white', minHeight:'100vh' }}>
      
      <h1>?? Your Career Result</h1>

      <div style={{ background:'#1e293b', padding:20, borderRadius:12, marginTop:20 }}>
        <h2>{ai.title}</h2>
        <p>{ai.summary}</p>
      </div>

      <div style={{ position:'relative', marginTop:30, background:'#1e293b', padding:20, borderRadius:12 }}>
        
        <div style={{
          filter: isPro ? 'none' : 'blur(6px)'
        }}>
          <h2>?? Full Career Plan</h2>
          <ul>
            {ai.plan.map((p:string,i:number)=>(<li key={i}>{p}</li>))}
          </ul>
        </div>

        {!isPro && (
          <div style={{
            position:'absolute',
            inset:0,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            background:'rgba(0,0,0,0.7)'
          }}>
            <h2>?? Unlock Full Plan</h2>
            <button onClick={handleUpgrade} style={{
              marginTop:20,
              padding:'12px 24px',
              background:'#22c55e',
              border:'none',
              borderRadius:8,
              fontWeight:'bold'
            }}>
              Upgrade ??
            </button>
          </div>
        )}

      </div>
    </div>
  )
}


