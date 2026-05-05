import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a career advisor AI. Give structured career guidance."
        },
        {
          role: "user",
          content: "Give a career path with title, summary and 5 steps."
        }
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;

    return NextResponse.json({
      title: "AI Career Result",
      summary: text,
      plan: [
        "Step 1",
        "Step 2",
        "Step 3",
        "Step 4",
        "Step 5"
      ]
    });

  } catch (e:any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
