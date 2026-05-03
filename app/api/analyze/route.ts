import OpenAI from "openai";
import { NextResponse } from "next/server";
import { buildPrompt } from "../../../lib/promptBuilder"; // אם alias לא עובד

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // 📥 קבלת תשובות מהלקוח
    const { answers } = await req.json();

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { result: "Invalid input data." },
        { status: 400 }
      );
    }

    console.log("✅ ANSWERS:", answers);

    // 🧠 בניית פרומפט חכם
    const prompt = buildPrompt(answers);

    console.log("🧠 PROMPT:", prompt);

    // 🤖 קריאה ל־OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a world-class career psychologist and advisor. Analyze deeply and give powerful, structured insights.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const result =
      response.choices?.[0]?.message?.content ||
      "No response generated.";

    console.log("🔥 RESULT:", result);

    // 📤 החזרת תשובה ל־frontend
    return NextResponse.json({ result });
  } catch (error) {
    console.error("❌ ERROR:", error);

    return NextResponse.json(
      {
        result:
          "Something went wrong while analyzing your profile. Please try again.",
      },
      { status: 500 }
    );
  }
}
