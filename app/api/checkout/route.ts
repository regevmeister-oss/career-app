import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "IGUIDE PRO 🚀",
            },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      success_url: "https://your-domain.com/success",
      cancel_url: "https://your-domain.com/cancel",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: "Stripe error" }, { status: 500 });
  }
}
