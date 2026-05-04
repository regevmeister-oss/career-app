export async function POST(req: Request) {
  const { answers, entry } = await req.json();

  const prompt = `
You are a world-class career psychologist and AI career advisor.

USER ENTRY STATE:
${entry}

USER ANSWERS:
${JSON.stringify(answers, null, 2)}

Analyze deeply and return ONLY valid JSON:

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