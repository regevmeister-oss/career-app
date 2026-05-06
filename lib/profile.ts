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

  if (explorer >= builder && explorer >= analyst) return "Explorer";
  if (builder >= explorer && builder >= analyst) return "Builder";
  return "Analyst";
}
