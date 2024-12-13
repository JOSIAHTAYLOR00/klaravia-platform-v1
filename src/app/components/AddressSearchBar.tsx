"use client";

import { useGoogleAutocomplete } from "@/hooks/useGoogleAutocomplete";
import { Location } from "@/types/address";
import { useToast } from "@chakra-ui/react";

interface AddressSearchBarProps {
  onSubmit: (location: Location) => Promise<void>;
}

export default function AddressSearchBar({ onSubmit }: AddressSearchBarProps) {
  const toast = useToast();

  const { address, setAddress, autocompleteRef, handleKeyPress } = useGoogleAutocomplete({
    onSubmit,
    onError: (message: string) => {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
    onStateError: () => {
      toast({
        title: "State not serviceable",
        description: "We currently service Arizona exclusively",
        variant: "warning",
      });
    },
  });

  return (
    <div className="relative w-full">
      <input
        id="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter your address"
        ref={autocompleteRef}
        className="w-full bg-surface-layer-10 dark:bg-surface-dark-layer-5 rounded-md pl-10 pr-4 py-4 placeholder-gray-500 focus:outline-none border-0"
        required
      />
    </div>
  );
}
