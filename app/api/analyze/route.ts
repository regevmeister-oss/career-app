import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { answers } = await req.json();

  const prompt = `
User answers:
${JSON.stringify(answers)}

Give a detailed career recommendation including:
- Best career paths
- Strengths
- Weaknesses
- Next steps
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return NextResponse.json({
    result: completion.choices[0].message.content,
  });
}





