export function calculateMatches(answers: any) {
  const careers = [
    { role: "Software Engineer", weights: { social: 0.2, creativity: 0.6, risk: 0.4 } },
    { role: "Entrepreneur", weights: { social: 0.7, creativity: 0.8, risk: 0.9 } },
    { role: "Designer", weights: { social: 0.5, creativity: 0.9, risk: 0.5 } },
  ];

  return careers.map((career) => {
    const score =
      answers.socialLevel * career.weights.social +
      answers.creativity * career.weights.creativity +
      answers.risk * career.weights.risk;

    return {
      role: career.role,
      fit: Math.round(score * 100),
    };
  });
}




