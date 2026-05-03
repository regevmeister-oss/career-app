'use client'
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body style={{background:'#000',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',flexDirection:'column'}}>
        <h1>Something broke 😅</h1>
        <button onClick={reset} style={{marginTop:20,padding:'10px 20px'}}>
          Try again
        </button>
      </body>
    </html>
  )
}
