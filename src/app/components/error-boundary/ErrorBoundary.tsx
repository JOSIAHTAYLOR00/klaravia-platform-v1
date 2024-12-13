"use client";

import { Component, ReactNode } from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Button, Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to your error reporting service
    console.error(`Error in ${this.props.name || "component"}:`, error, errorInfo);
  }

  handleReset = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box p={4}>
          <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="auto" py={4} rounded="md">
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {this.props.name ? `${this.props.name} Error` : "Application Error"}
            </AlertTitle>
            <AlertDescription maxWidth="sm" mb={4}>
              {this.state.error?.message || "Something went wrong"}
            </AlertDescription>
            <Button colorScheme="red" onClick={this.handleReset}>
              Try Again
            </Button>
          </Alert>
        </Box>
      );
    }

    return this.props.children;
  }
}
