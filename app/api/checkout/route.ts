import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

async function createCheckout() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

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
          unit_amount: 999,
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    metadata: {
      userId: "user_123",
    },
  });

  return session.url;
}

export async function POST() {
  const url = await createCheckout();
  return NextResponse.json({ url });
}

export async function GET() {
  const url = await createCheckout();
  return NextResponse.redirect(url!);
}