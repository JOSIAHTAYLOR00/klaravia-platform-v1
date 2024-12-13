"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useGetUser } from "@/hooks/userHooks";
import { getAuthUser, isAuthenticated, signOut } from "@/lib/auth";
import { type AuthContextType, type CognitoUser } from "@/types/Auth/auth";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [loading, setLoading] = useState(true);

  const {
    data: userData,
    loading: userDataLoading,
    refetch: refetchUserData,
  } = useGetUser({
    variables: {
      id: user?.attributes.sub || "",
    },
    skip: !user,
  });

  const checkAuth = async () => {
    console.log("checking auth...");
    setLoading(true);
    try {
      // First check authentication
      const authenticated = await isAuthenticated();
      console.log("is authenticated:", authenticated);

      if (!authenticated) {
        setUser(null);
        return;
      }

      // Then get user if authenticated
      try {
        const currentUser = await getAuthUser();
        setUser(currentUser);

        // Only fetch additional user data if we have a user_id
        if (currentUser?.attributes["custom:user_id"]) {
          try {
            await refetchUserData();
          } catch (error) {
            console.error("Error fetching user data:", error);
            // Don't throw here - we still have a valid auth session
          }
        }
      } catch (error) {
        console.error("Error getting auth user:", error);
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const memoizedCheckAuth = useCallback(checkAuth, [refetchUserData]);

  useEffect(() => {
    memoizedCheckAuth();
  }, [memoizedCheckAuth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userData: userData?.getUser || null,
        checkAuth,
        loading: loading || userDataLoading,
        signOut: handleSignOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
