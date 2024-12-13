"use client";

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Box, VStack, CircularProgress } from "@chakra-ui/react";
import { stripePromise, STRIPE_APPEARANCE, STRIPE_LAYOUT } from "@/lib/config/stripe";
import { CheckoutForm } from "./CheckoutForm";
import { StripeComponentProps } from "@/app/user-dash/_types/payments";

export const StripeComponent = ({ chargeAmount }: StripeComponentProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: chargeAmount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to initialize payment");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Payment initialization failed");
      }
    };

    fetchClientSecret();
  }, [chargeAmount]);

  if (error) {
    return <Box className="text-red-500 text-center p-4">{error}</Box>;
  }

  return (
    <VStack w="full" maxW={{ base: "full", lg: "500px" }} bgColor="#efefef" p="20px" borderRadius="12px" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
      {clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: STRIPE_APPEARANCE,
            // maybe
            //@ts-ignore
            layout: STRIPE_LAYOUT,
          }}
        >
          <CheckoutForm chargeAmount={chargeAmount} />
        </Elements>
      ) : (
        <Box w="full" display="flex" justifyContent="center">
          <CircularProgress isIndeterminate />
        </Box>
      )}
    </VStack>
  );
};
