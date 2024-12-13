interface SolarSystemEstimate {
  numberOfPanels: number;
  systemSizeKW: string;
  annualKWhOutput: string;
}

export function estimateSolarSystemSize(
  monthlyKWh: number | null, 
  numberOfPanels: number | null = null
): SolarSystemEstimate {
  // Constants
  const averageSunHoursPerDay = 7; // Assume 7 hours of sunlight per day
  const systemEfficiency = 0.80; // Assume 80% system efficiency
  const panelWattage = 400; // Use 400W panels as specified

  let actualSystemSizeKW: number;
  let calculatedNumberOfPanels: number;
  let annualKWhOutput: number;

  if (numberOfPanels !== null) {
    // If number of panels is provided, calculate based on that
    calculatedNumberOfPanels = numberOfPanels;
    actualSystemSizeKW = (calculatedNumberOfPanels * panelWattage) / 1000;
    annualKWhOutput = actualSystemSizeKW * averageSunHoursPerDay * 365 * systemEfficiency;
  } else if (monthlyKWh !== null) {
    // If number of panels is not provided, calculate based on monthly kWh
    const dailyKWh = monthlyKWh / 30;
    const requiredKW = dailyKWh / (averageSunHoursPerDay * systemEfficiency);
    calculatedNumberOfPanels = Math.ceil((requiredKW * 1000) / panelWattage);
    actualSystemSizeKW = (calculatedNumberOfPanels * panelWattage) / 1000;
    annualKWhOutput = actualSystemSizeKW * averageSunHoursPerDay * 365 * systemEfficiency;
  } else {
    throw new Error("Either monthlyKWh or numberOfPanels must be provided");
  }

  return {
    numberOfPanels: calculatedNumberOfPanels,
    systemSizeKW: actualSystemSizeKW.toFixed(2),
    annualKWhOutput: annualKWhOutput.toFixed(2)
  };
}