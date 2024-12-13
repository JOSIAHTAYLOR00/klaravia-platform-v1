"use client";

import { useUserDataContext } from "@/providers/UserDataProvider";
import AddressSearchBar from "./AddressSearchBar";
import { callGoogleSolarApi } from "@/lib/api";
import { useToast } from "@chakra-ui/react";
import { Search, DollarSign, ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, UserUpdateOptions } from "@/API";

export function AddressFormClient() {
  const [address, setAddress] = useState("");
  const [electricBill, setElectricBill] = useState<number>();
  const [annualKwHUsage, setAnnualKwHUsage] = useState<number>(0);
  const [addressObject, setAddressObject] = useState({
    long_name: "",
    state: "",
    county: "",
    city: "",
    postal_code: "",
    street: "",
    lat: 0,
    lng: 0,
  });

  const router = useRouter();
  const toast = useToast();
  const { setUserData } = useUserDataContext();

  // TODO: UPDATE THIS FOR STATES OTHER THAN AZ
  const CONSTANTS = { localKwHPrice: 0.18 };

  useEffect(() => {
    if (electricBill && electricBill !== 0) {
      const annUsage = electricBill / CONSTANTS.localKwHPrice;
      setAnnualKwHUsage(annUsage * 12);
    }
  }, [electricBill]);

  const handleAddressSubmit = async (location: typeof addressObject) => {
    setAddressObject(location);
    try {
      const res = await callGoogleSolarApi(location.lat.toString(), location.lng.toString());
      if (res?.data) {
        setUserData((prevLeadData: User) => {
          if (
            JSON.stringify(prevLeadData) !==
            JSON.stringify({
              ...prevLeadData,
              google_solar_object: res.data,
            })
          ) {
            return {
              ...prevLeadData,
              google_solar_object: res.data,
            };
          }
          return prevLeadData;
        });
      }
    } catch (error) {
      console.error("Error processing response from google solar api", error);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!addressObject.long_name || !electricBill) {
      toast({
        title: "Missing Information",
        description: "Please enter your address and monthly bill amount.",
        variant: "destructive",
      });
      return;
    }

    setUserData((prevLeadData: User) => {
      if (
        JSON.stringify(prevLeadData) !==
        JSON.stringify({
          ...prevLeadData,
          address: addressObject.long_name,
          electric_bill: `${electricBill}`,
          estimatedAnnualUsage: `${Math.round(annualKwHUsage)}`,
          updated_by: UserUpdateOptions.DYNAMO,
        })
      ) {
        return {
          ...prevLeadData,
          address: addressObject.long_name,
          electric_bill: `${electricBill}`,
          estimatedAnnualUsage: `${Math.round(annualKwHUsage)}`,
          updated_by: UserUpdateOptions.DYNAMO,
        };
      }
      return prevLeadData;
    });
    router.push("/questionnaire-intro");
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <div className="w-full flex flex-col md:flex-row backdrop-blur-sm rounded-lg items-end gap-2">
        <div className="relative w-full flex-grow">
          <p className="w-full text-sm text-gray-400 mb-2 pl-2">Address</p>
          <Search size="20" className="absolute left-3 top-14 z-10 transform -translate-y-1/2 text-gray-400" />
          <AddressSearchBar onSubmit={handleAddressSubmit} />
        </div>

        <div className="relative w-full md:w-48">
          <p className="w-full text-sm text-gray-400 mb-2 pl-2">Monthly Bill</p>
          <DollarSign size="20" className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            placeholder="0.00"
            value={electricBill || ""}
            onChange={(e) => setElectricBill(Number(e.target.value))}
            className="w-full bg-surface-layer-10 dark:bg-surface-dark-layer-5 rounded-md pl-10 pr-4 py-4 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto h-14 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 dark:bg-amber-500 text-[#121212] px-8 py-4 rounded-md font-semibold transition-colors flex items-center justify-center"
        >
          Start
          <span className="inline-flex align-middle">
            <ChevronsRight className="ml-1 w-5 h-5" />
          </span>
        </button>
      </div>
    </form>
  );
}
