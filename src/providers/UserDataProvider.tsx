"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { UserState, UserWithoutTypeName } from "@/types/user";
import { storage } from "@/../utils/storage";
import { useUserData } from "@/hooks/useUserData";
import { UserUpdateOptions } from "@/API";

const defaultUserState: UserState = {
  id: "",
  updated_by: UserUpdateOptions.DYNAMO,
};

interface UserDataContextType {
  userData: UserWithoutTypeName;
  setUserData: (data: UserWithoutTypeName) => void;
  googleSolarObject: any;
  setGoogleSolarObject: (data: any) => void;
}

const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserState,
  setUserData: () => {},
  googleSolarObject: {},
  setGoogleSolarObject: () => {},
});

export const useUserDataContext = () => useContext(UserDataContext);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserWithoutTypeName>(defaultUserState);

  const [googleSolarObject, setGoogleSolarObject] = useState<any>();

  useEffect(() => {
    console.log("UserDataProvider, userdata:", userData);
  }, [userData]);

  useUserData(userData, setUserData);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        googleSolarObject,
        setGoogleSolarObject,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}
