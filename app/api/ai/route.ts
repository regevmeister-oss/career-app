import OpenAI from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { answers } = await req.json()

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a premium career advisor. Be insightful and inspiring."
        },
        {
          role: "user",
          content: "User answers: " + answers.join(", ")
        }
      ],
      temperature: 0.7
    })

    return NextResponse.json({
      result: response.choices[0].message.content
    })

  } catch (e) {
    return NextResponse.json({ error: "AI failed" }, { status: 500 })
  }
}





