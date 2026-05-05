export async function GET() {
  return Response.json({
    questions: [
      "What motivates you to get up in the morning?",
      "Do you prefer working alone or with people?",
      "What type of environment makes you feel productive?",
      "Do you enjoy structure or flexibility?",
      "What kind of problems excite you?",
      "Do you prefer stability or risk?",
      "What are your natural strengths?",
      "What drains your energy?",
      "What kind of lifestyle do you want?",
      "Where do you see yourself in 5 years?"
    ]
  });
}




