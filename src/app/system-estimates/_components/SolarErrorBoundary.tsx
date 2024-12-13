"use client";

import { Component, ReactNode } from "react";
import { SolarErrorState } from "./SolarErrorState";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SolarErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || <SolarErrorState error={this.state.error} />;
    }
    return this.props.children;
  }
}
