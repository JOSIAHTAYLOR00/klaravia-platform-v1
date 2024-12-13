'use client';

import { useState, useEffect } from 'react';
import { SolarConstants, SystemEstimates } from '../types/solarEstimates';
import { useUserDataContext } from '@/providers/UserDataProvider';
import { 
  calculateBaseSystemSize,
  calculateSystemEstimates,
  adjustPanels 
} from '@/../utils/calculations';

export function useSolarCalculator() {
  const [loading, setLoading] = useState(true);
  const [systemEstimates, setSystemEstimates] = useState<SystemEstimates | null>(null);
  const [panelAdjustment, setPanelAdjustment] = useState(0);
  const { userData } = useUserDataContext();

  const CONSTANTS: SolarConstants = {
    avgElectricityRate: 0.18,
    avgSunHoursPerDay: 5.5,
    systemEfficiency: 0.85,
    panelWattage: 400,
    costPerWatt: 2.4,
    annualDegradation: 0.005,
    CO2PerKWh: 0.0007,
    treesPerTonCO2: 40,
    averageHomeEmissions: 7.72
  };

  const handlePanelAdjustment = (adjustment: number) => {
    setPanelAdjustment(prev => {
      const newAdjustment = adjustPanels(
        prev,
        adjustment,
        calculateBaseSystemSize(userData, CONSTANTS),
        CONSTANTS
      );
      return newAdjustment;
    });
  };

  useEffect(() => {
    const calculateEstimates = async () => {
      setLoading(true);
      try {
        const estimates = await calculateSystemEstimates(
          userData,
          CONSTANTS,
          panelAdjustment,
          handlePanelAdjustment
        );
        setSystemEstimates(estimates);
      } catch (error) {
        console.error('Error calculating solar estimates:', error);
        setSystemEstimates(null);
      } finally {
        setLoading(false);
      }
    };

    calculateEstimates();
  }, [userData, panelAdjustment]);

  console.log('SolarCalculator', loading, systemEstimates, handlePanelAdjustment)

  return { loading, systemEstimates, handlePanelAdjustment };
}
