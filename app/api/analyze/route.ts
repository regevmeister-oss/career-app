import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { answers, entry } = await req.json();

    const analysis = await prisma.analysis.create({
      data: {
        userId: "demo-user",
        result: JSON.stringify({ answers, entry })
      }
    });

    return NextResponse.json({
      id: analysis.id,
      identity: "Creative Strategic Thinker",
      strengths: ["Vision", "Creativity", "Independence"],
      weaknesses: ["Overthinking"],
      careers: ["Entrepreneur", "Product Manager"],
      hiddenPotential: "You can build impactful products",
      insight: "You think differently than most people"
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}