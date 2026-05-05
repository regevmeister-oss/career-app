export function generatePremiumAnalysis(answers: any) {
  const profile = buildProfile(answers);

  return {
    summary: generateSummary(profile),
    personality: generatePersonality(profile),
    strengths: generateStrengths(profile),
    weaknesses: generateWeaknesses(profile),
    careers: generateCareers(profile),
    nextSteps: generateNextSteps(profile),
  };
}

function buildProfile(answers: any) {
  return {
    freedom: answers.freedom ?? 0,
    money: answers.money ?? 0,
    people: answers.people ?? 0,
    creativity: answers.creativity ?? 0,
    stability: answers.stability ?? 0,
  };
}

function generateSummary(p: any) {
  if (p.freedom > 7 && p.creativity > 7) {
    return "You are driven by freedom and creative expression. Traditional jobs will feel limiting for you.";
  }

  if (p.stability > 7) {
    return "You value security and structure, and perform best in stable environments.";
  }

  return "You are adaptable, but still discovering what truly drives you.";
}

function generatePersonality(p: any) {
  return {
    workStyle:
      p.freedom > 6
        ? "Independent and self-driven"
        : "Structured and guided",

    environment:
      p.people > 6
        ? "Collaborative and social"
        : "Focused and individual",

    risk:
      p.stability > 6
        ? "Risk-averse"
        : "Comfortable with uncertainty",
  };
}

function generateStrengths(p: any) {
  const strengths = [];

  if (p.creativity > 6) strengths.push("Creative thinking");
  if (p.people > 6) strengths.push("Strong communication");
  if (p.freedom > 6) strengths.push("Self-management");
  if (p.stability > 6) strengths.push("Consistency");

  return strengths;
}

function generateWeaknesses(p: any) {
  const weaknesses = [];

  if (p.freedom > 7) weaknesses.push("Struggles with authority");
  if (p.stability < 3) weaknesses.push("Difficulty committing long-term");
  if (p.people < 3) weaknesses.push("Prefers isolation too much");

  return weaknesses;
}

function generateCareers(p: any) {
  const careers = [];

  if (p.creativity > 7) {
    careers.push("UX Designer", "Content Creator", "Brand Strategist");
  }

  if (p.stability > 7) {
    careers.push("Accountant", "Project Manager", "Operations Manager");
  }

  if (p.people > 7) {
    careers.push("Sales", "HR", "Community Manager");
  }

  return careers;
}

function generateNextSteps(p: any) {
  return [
    "Identify 1 career direction that matches your strengths",
    "Take a short online course",
    "Speak with someone already in that field",
  ];
}




