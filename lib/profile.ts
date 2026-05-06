export function detectProfile(answers: any[]) {
  let explorer = 0;
  let builder = 0;
  let analyst = 0;

  answers.forEach((a) => {
    const val = a.toLowerCase();

    if (val.includes("freedom") || val.includes("creative")) explorer++;
    if (val.includes("stable") || val.includes("routine")) builder++;
    if (val.includes("logic") || val.includes("analyze")) analyst++;
  });

  if (explorer >= builder && explorer >= analyst) {
    return {
      type: "Pathfinder",
      title: "The Pathfinder ??",
      description: "You are driven by freedom, curiosity, and meaning."
    };
  }

  if (builder >= explorer && builder >= analyst) {
    return {
      type: "Architect",
      title: "The Architect ??",
      description: "You thrive on structure, stability, and building things that last."
    };
  }

  return {
    type: "Strategist",
    title: "The Strategist ??",
    description: "You are analytical, thoughtful, and driven by understanding systems."
  };
}
