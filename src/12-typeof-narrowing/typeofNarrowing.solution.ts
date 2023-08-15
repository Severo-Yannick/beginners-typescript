export const coerceAmount = (amount: number | { amount: number }): number => {
  if (typeof amount === "number") return amount;
  
  return amount.amount;
};
