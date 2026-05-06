import { NextResponse } from "next/server";
import OpenAI from "openai";
import { detectProfile } from "@/lib/profile";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    const profile = detectProfile(answers);

    const prompt = 
User personality type: C:\Users\user\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

Answers:


Give a deep, personal career analysis.

Return JSON:
{
  "career": "...",
  "reason": "...",
  "risks": "...",
  "next_steps": ["...", "..."],
  "personality_insight": "..."
}
;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a deep psychological career expert." },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
    });

    const text = completion.choices[0].message.content;

    let parsed;
    try {
      parsed = JSON.parse(text || "{}");
    } catch {
      parsed = { raw: text };
    }

    return NextResponse.json({ ...parsed, profile });
  } catch (e) {
    return NextResponse.json({ error: "AI failed" }, { status: 500 });
  }
}
