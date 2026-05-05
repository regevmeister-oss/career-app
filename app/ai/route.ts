import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const body = await req.json()

  const { answers } = body

  const prompt = `
User answers:
${JSON.stringify(answers)}

Write a deep psychological insight about this person.
Make it feel like a personal AI analysis.
`

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  })
  

  return NextResponse.json({
    text: response.choices[0].message.content,
  })
}




