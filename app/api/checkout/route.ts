import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const { userId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "IGUIDE PRO",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],

    metadata: {
      userId, // 🔥 חשוב
    },

    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium`,
  });

  return NextResponse.json({ url: session.url });
}





