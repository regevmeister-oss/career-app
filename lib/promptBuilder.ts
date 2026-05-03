type Traits = {
  social: number;
  independence: number;
  structure: number;
  creativity: number;
  exploration: number;
  stability: number;
};

function analyzeTraits(answers: string[]): Traits {
  const traits: Traits = {
    social: 0,
    independence: 0,
    structure: 0,
    creativity: 0,
    exploration: 0,
    stability: 0,
  };

  answers.forEach((a) => {
    switch (a) {
      case "With people":
        traits.social += 3;
        break;
      case "Alone":
        traits.independence += 3;
        break;
      case "At work":
        traits.structure += 2;
        break;
      case "Creative":
        traits.creativity += 3;
        break;
      case "Explore":
        traits.exploration += 3;
        break;
      case "At home":
        traits.stability += 3;
        break;
      case "Pressure":
        traits.structure += 1;
        traits.stability -= 1;
        break;
    }
  });

  return traits;
}

function getTopTraits(traits: Traits) {
  return Object.entries(traits)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => key);
}

function buildNarrative(topTraits: string[]) {
  const map: Record<string, string> = {
    social: "deeply connected to people and human interaction",
    independence: "driven by autonomy and personal control",
    structure: "aligned with order, clarity, and systems",
    creativity: "fueled by ideas and original thinking",
    exploration: "motivated by curiosity and new experiences",
    stability: "grounded in security and emotional consistency",
  };

  return topTraits.map((t) => map[t]).join(", ");
}

export function buildPrompt(answers: string[]) {
  const traits = analyzeTraits(answers);
  const topTraits = getTopTraits(traits);
  const narrative = buildNarrative(topTraits);

  return `
You are an elite career strategist, psychologist, and behavioral analyst.

A user completed a deep introspection process.

---

RAW ANSWERS:
${answers.join(", ")}

TRAIT SCORES:
${JSON.stringify(traits, null, 2)}

DOMINANT TRAITS:
${topTraits.join(", ")}

PSYCHOLOGICAL SUMMARY:
The user is ${narrative}.

---

YOUR TASK:
Generate a premium-level career analysis that feels like a $200 report.

---

RULES:
- Be highly specific (no generic advice)
- Make the user feel deeply understood
- Combine psychology + career strategy
- Sound like ChatGPT at its best
- Avoid repeating the input

---

OUTPUT STRUCTURE:

## 🧠 Personality Profile
(Deep psychological breakdown — who they REALLY are)

## 🔥 Core Drivers
(What motivates them + what drains them)

## 💼 Ideal Work Environment
(Describe exact conditions where they thrive)

## 🚀 Top Career Paths
(3 specific directions with explanation WHY they fit THIS person)

## 💪 Strengths
(Concrete strengths derived from traits)

## ⚠️ Blind Spots
(Real risks / self-sabotage patterns)

## 📅 30-Day Action Plan
(Specific steps they can take immediately)

---

TONE:
- Insightful
- Confident
- Human
- Slightly emotional
- Premium

---

IMPORTANT:
This should feel like a breakthrough moment for the user.
`;
}