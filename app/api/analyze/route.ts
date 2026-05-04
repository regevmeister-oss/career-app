import { NextResponse } from "next/server";

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

Respond in a powerful, premium, human-like way.

{
  "identity": "",
  "strengths": [],
  "weaknesses": [],
  "careers": [],
  "hiddenPotential": "",
  "insight": ""
}
`;

    // TEMP MOCK RESPONSE (עד שנחבר AI אמיתי)
    return NextResponse.json({
      identity: "Creative Strategic Thinker",
      strengths: ["Vision", "Creativity", "Independence"],
      weaknesses: ["Overthinking"],
      careers: ["Entrepreneur", "Product Manager"],
      hiddenPotential: "You can build impactful products",
      insight: "You think differently than most people"
    });

  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}