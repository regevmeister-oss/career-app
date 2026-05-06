import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
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
          unit_amount: 500, // 
        },
        quantity: 1,
      },
    ],
    success_url: process.env.NEXT_PUBLIC_URL + "/success",
    cancel_url: process.env.NEXT_PUBLIC_URL + "/cancel",
  });

  return NextResponse.json({ url: session.url });
}
