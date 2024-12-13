"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class AuthErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Authentication error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-red-50 p-8 text-center">
              <h2 className="mb-4 text-lg font-semibold text-red-800">Authentication Error</h2>
              <p className="text-red-600">{this.state.error?.message}</p>
              <button onClick={() => this.setState({ hasError: false })} className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Try Again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
