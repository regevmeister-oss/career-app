import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    const prompt = 
You are a world-class career advisor.

Analyze the following user answers and return a deep career insight.

User answers:


Return JSON ONLY in this format:
{
  "career": "...",
  "reason": "...",
  "risks": "...",
  "next_steps": ["...", "...", "..."]
}
;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a career expert." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;

    let parsed;

    try {
      parsed = JSON.parse(text || "{}");
    } catch {
      parsed = { raw: text };
    }

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json(
      { error: "AI failed" },
      { status: 500 }
    );
  }
}
