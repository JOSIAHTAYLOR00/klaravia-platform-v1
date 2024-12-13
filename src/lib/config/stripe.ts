import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";

// if (!process.env.NEXT_PUBLIC_STRIPE_PK) {
//   throw new Error('Missing Stripe public key');
// }

export const stripePromise = loadStripe('pk_test_51Pg5UkAOr0yExu1LkE9HiclST5HoPn40OK1AnHKszMdse1tB6JhynWAyb7mLDe6KCLInYmj935RUimYMoaCDz5jU00IdSDMznO');

export const STRIPE_APPEARANCE: StripeElementsOptions["appearance"] = {
  theme: "stripe",
};

export const STRIPE_LAYOUT = {
  type: "tabs" as const,
  defaultCollapsed: false,
};