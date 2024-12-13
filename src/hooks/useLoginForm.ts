import { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { AuthError } from '@aws-amplify/auth';
import { LoginFormProps } from '@/types/Auth/LoginForm/types';

export function useLoginForm({ onSuccess, onError }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password,
        options: {
          authFlowType: rememberMe ? "USER_PASSWORD_AUTH" : "USER_SRP_AUTH"
        }
      });

      if (isSignedIn) {
        onSuccess();
      } else {
        // Handle additional auth steps if needed
        console.log('Additional authentication steps required:', nextStep);
        setError('Additional authentication steps required');
      }
    } catch (error) {
      const authError = error as AuthError;
      console.error('Error signing in:', authError);
      setError(authError.message);
      onError(authError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    isLoading,
    error,
    handleLogin,
  };
}