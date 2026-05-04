'use client'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/analysis/all')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">Your Analyses</h1>

      {data.map((item, i) => {
        const result = JSON.parse(item.result)

        return (
          <div key={i} className="mb-6 p-4 border border-gray-700 rounded">
            <p><b>Identity:</b> {result.identity}</p>
            <p><b>Careers:</b> {result.recommendedCareers?.join(', ')}</p>
          </div>
        )
      })}
    </div>
  )
}
