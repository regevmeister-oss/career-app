import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateInsights(answers: any) {
  const prompt = `
You are an expert career advisor.

Analyze the user's answers and return:

1. Career Matches (Top 3)
2. Strengths
3. Weaknesses
4. Ideal Work Environment
5. Action Plan

User answers:
${JSON.stringify(answers, null, 2)}
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

  return response.choices[0].message.content;
}