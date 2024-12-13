"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "./ChakraProvider";
import { AuthProvider } from "./AuthProvider";
import { ApolloProvider } from "./ApolloProvider";
import { AmplifyProvider } from "./AmplifyProvider";
import { UserDataProvider } from "./UserDataProvider";

export function Providers({ children }: { children: ReactNode }) {
  console.log("Providers component rendering");

  return (
    <ChakraProvider>
      <AmplifyProvider>
        <ApolloProvider>
          <AuthProvider>
            <UserDataProvider>{children}</UserDataProvider>
          </AuthProvider>
        </ApolloProvider>
      </AmplifyProvider>
    </ChakraProvider>
  );
}
