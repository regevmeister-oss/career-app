import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature")!;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  // TODO: handle event
  return new Response("ok", { status: 200 });
}
