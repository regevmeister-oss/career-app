import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { answers, entry } = await req.json();

    const prompt = `
You are a world-class career psychologist and AI career advisor.

Analyze this user deeply.

Answers:
${JSON.stringify(answers)}

Return JSON:
{
  "title": "Career title",
  "summary": "Short explanation",
  "plan": ["step1", "step2", "step3"]
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0].message.content;

    return Response.json(JSON.parse(text!));

  } catch (err) {
    console.error(err);
    return Response.json({ error: "AI failed" }, { status: 500 });
  }
}





