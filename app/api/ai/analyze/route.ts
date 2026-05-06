import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { answers } = await req.json();

  // 💡 כאן בעתיד נחבר OpenAI אמיתי
  // כרגע - סימולציה חכמה

  const result = {
    personality: "Creative Explorer",
    strengths: ["חשיבה יצירתית", "רגישות לאנשים", "יכולת הסתגלות"],
    weaknesses: ["חוסר מיקוד", "קושי בהתמדה"],
    careers: ["UX Designer", "Content Creator", "Product Manager"],
    message: "יש לך פוטנציאל גבוה מאוד — אבל אתה צריך כיוון ברור ומסגרת נכונה."
  };

  return NextResponse.json(result);
}
