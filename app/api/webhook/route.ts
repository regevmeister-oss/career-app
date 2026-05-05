import Stripe from "stripe";
import { headers } from "next/headers";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature")!;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    const email = session.customer_details.email;

    await prisma.user.update({
      where: { email },
      data: { isPro: true },
    });
  }

  return new Response("OK");
}


