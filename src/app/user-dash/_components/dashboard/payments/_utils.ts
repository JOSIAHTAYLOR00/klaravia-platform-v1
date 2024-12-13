export const formatCentsToDollars = (cents: number): string => {
  if (typeof cents !== "number" || isNaN(cents)) {
    throw new Error("Input must be a valid number.");
  }

  return (cents / 100).toLocaleString("en-US", { 
    style: "currency", 
    currency: "USD" 
  });
};