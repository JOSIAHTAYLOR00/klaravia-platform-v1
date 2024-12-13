export const calculateTotalCost = (basePrice: number, panel: any, battery: any): string => {
  let total = basePrice;
  if (panel?.additional_cost) total += panel.additional_cost;
  if (battery?.additional_cost) total += battery.additional_cost;
  return total.toLocaleString();
};