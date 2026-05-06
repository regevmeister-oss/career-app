export function buildProfile(answers: any) {
  return {
    personality: {
      introvertExtrovert: answers.socialLevel,
      analyticalCreative: answers.creativity,
      riskTolerance: answers.risk,
    },
    preferences: {
      remote: answers.remote === "yes",
      salaryImportance: answers.salary ?? 0.5,
    },
  };
}





