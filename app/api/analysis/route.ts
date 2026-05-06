import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    const prompt = `
You are a world-class career advisor AI.

Analyze the following user answers and provide deep, personalized insights.

User Answers:
${JSON.stringify(answers)}

Return:
1. Personality summary
2. Best career paths (3 options)
3. Strengths
4. Weaknesses
5. Recommended next steps
6. Ideal work environment

Make it powerful, emotional, and insightful.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const result = response.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json(
      { error: "AI failed" },
      { status: 500 }
    );
  }
}


