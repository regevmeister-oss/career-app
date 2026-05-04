import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { answers, entry } = await req.json();

    const prompt = `
You are a world-class career psychologist and AI career advisor.

USER ENTRY STATE:
${entry}

USER ANSWERS:
${JSON.stringify(answers, null, 2)}

Analyze deeply and return ONLY valid JSON with:
1. Personality type
2. Strengths
3. Weaknesses
4. Best career paths
5. Hidden potential
6. Unique insight

{
  "identity": "",
  "strengths": [],
  "weaknesses": [],
  "careers": [],
  "hiddenPotential": "",
  "insight": ""
}
`;

    // 🔥 קריאה ל-AI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an elite career advisor." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content || "{}";

    // 🔥 פרס JSON
    const parsed = JSON.parse(text);

    // 🔥 שמירה ל-DB
    const analysis = await prisma.analysis.create({
      data: {
        userId: "demo-user",
        result: JSON.stringify(parsed),
      },
    });

    return NextResponse.json({
      id: analysis.id,
      ...parsed,
    });

  } catch (error) {
    console.error("ANALYZE ERROR:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}