"use client";

import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Button, VStack, Text, CircularProgress } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CheckoutFormProps, PaymentState } from "../stages/_types";
import { formatCentsToDollars } from "./_utils";

export const CheckoutForm = ({ chargeAmount, onPaymentSuccess, onPaymentError }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentState, setPaymentState] = useState<PaymentState>({
    isLoading: false,
    isSuccessful: false,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setPaymentState((prev: any) => ({ ...prev, isLoading: true }));

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}`,
        },
        redirect: "if_required",
      });

      if (error) {
        setPaymentState({
          isLoading: false,
          isSuccessful: false,
          error: error.message,
        });
        onPaymentError?.(error.message || "There was an error with this payment");
        return;
      }

      setPaymentState({
        isLoading: false,
        isSuccessful: true,
      });
      onPaymentSuccess?.();
    } catch (err) {
      setPaymentState({
        isLoading: false,
        isSuccessful: false,
        error: "Payment processing failed",
      });
      onPaymentError?.("Payment processing failed");
    }
  };

  if (paymentState.isSuccessful) {
    return <PaymentSuccess />;
  }

  return (
    <VStack minW="full" justifyContent="center">
      {paymentState.isLoading ? <LoadingState /> : <PaymentForm stripe={stripe} chargeAmount={chargeAmount} onSubmit={handleSubmit} />}
    </VStack>
  );
};

const PaymentSuccess = () => (
  <VStack w="full">
    <Text fontWeight="bold" fontSize="26px" color="green.500">
      Payment Successful!
    </Text>
    <VStack w="full" p="20px">
      <FaRegCircleCheck color="#38A169" size="60px" />
    </VStack>
  </VStack>
);

const LoadingState = () => (
  <VStack w="full" alignItems="center">
    <CircularProgress isIndeterminate />
  </VStack>
);

const PaymentForm = ({ stripe, chargeAmount, onSubmit }: { stripe: any; chargeAmount: number; onSubmit: (e: React.FormEvent) => Promise<void> }) => (
  <form id="payment-form" onSubmit={onSubmit} style={{ width: "100%" }}>
    <PaymentElement id="payment-element" />
    <Button w="full" mt="20px" disabled={!stripe} type="submit" id="submit" bgColor="#605ff6" color="white" _hover={{ bgColor: "#706ff0" }}>
      {`${chargeAmount === 10000 ? "Order" : "Submit Payment"} - ${formatCentsToDollars(chargeAmount)}`}
    </Button>
  </form>
);
