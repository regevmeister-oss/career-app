export async function POST(req: Request) {
  const { answers, entry } = await req.json();

 const prompt = `
You are a world-class career psychologist and AI career advisor.

USER ENTRY STATE:
${JSON.stringify(body, null, 2)}

Analyze the user deeply and return:
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
  "recommendedCareers": [],
  "nextSteps": []
}
`;

  return Response.json({
    identity: "Builder personality",
    strengths: ["Execution", "Vision"],
    weaknesses: ["Overthinking"],
    recommendedCareers: ["Startup", "Product"],
    nextSteps: ["Start small project"]
  });
}