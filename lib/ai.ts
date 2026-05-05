import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function analyzeAnswers(answers: any) {
  const prompt = `
You are a world-class career psychologist and NLP expert.

Analyze the following user answers deeply.

Return JSON only in this format:
{
  "identity": "",
  "strengths": [],
  "weaknesses": [],
  "idealEnvironment": "",
  "recommendedCareers": [],
  "nextSteps": []
}

User answers:
${JSON.stringify(answers)}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const text = response.choices[0].message.content || "{}";

  try {
    return JSON.parse(text);
  } catch {
    return { error: "Failed to parse AI response", raw: text };
  }
}




