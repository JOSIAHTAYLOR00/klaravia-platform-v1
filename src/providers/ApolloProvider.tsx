"use client";

import { useEffect } from "react";
import { ApolloProvider as BaseApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo-client";

interface ApolloProviderProps {
  children: React.ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  console.log("ApolloProvider rendering start");

  // Initialize client immediately instead of using useState
  const client = initializeApollo();

  useEffect(() => {
    console.log("Apollo Client initialized:", {
      cache: client.cache.extract(),
      link: client.link,
      defaultOptions: client.defaultOptions,
    });
  }, [client]);

  console.log("ApolloProvider rendering with client");

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
}
