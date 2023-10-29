import { stripe } from "@/lib/stripe";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const cartDetails = await req.json();
  console.log("Cart Details", cartDetails);
  const origin = req.headers.get("origin");
  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: cartDetails,
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    billing_address_collection: "auto",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });
  return new Response(JSON.stringify(session), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
