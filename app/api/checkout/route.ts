import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // apiVersion removed,
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
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],

    // ?? זה החיבור למשתמש
    metadata: {
      userId,
    },

    success_url: "https://iguide.tech/success",
    cancel_url: "https://iguide.tech/cancel",
  });

  return NextResponse.json({ url: session.url });
}



