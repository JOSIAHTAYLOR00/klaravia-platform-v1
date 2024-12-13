// hooks/auth/useSignUp.ts
import { signUp, confirmSignUp, signIn, resendSignUpCode } from 'aws-amplify/auth';
import { v4 as uuidv4 } from "uuid";
import { type SignUpFormData } from '@/types/Auth/auth';
import { useAuth } from './useAuth';

export function useSignUp() {
  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.startsWith("1") ? `+${cleaned}` : `+1${cleaned}`;
  };

  const { checkAuth, setUser } = useAuth();

  const handleSignUp = async (formData: SignUpFormData) => {
    try {
      console.log('handle signup called')
      const user = await signUp({
        username: formData.email,
        password: formData.password,
        options: {
          userAttributes: {
            email: formData.email,
            phone_number: formatPhoneNumber(formData.phone),
            'custom:user_id': uuidv4(),
            'custom:first_name': formData.firstName,
            'custom:last_name': formData.lastName,
          },
        }
      });

      const { userId, isSignUpComplete, nextStep } = user;

     console.log('user::', user)

      return {
        userId,
        isSignUpComplete,
        nextStep
      };
    } catch (error) {
      console.error('Error in sign up:', error);
      throw error;
    }
  };

  const verifyCode = async (email: string, code: string) => {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: email,
        confirmationCode: code
      });

      // With autoSignIn enabled, user will be automatically signed in
      // after successful confirmation if they haven't been signed in yet
      return {
        isSignUpComplete,
        nextStep
      };
    } catch (error) {
      console.error('Error in verification:', error);
      throw error;
    }
  };

  const resendCode = async (email: string) => {
    try {
      const { destination, deliveryMedium, attributeName } = await resendSignUpCode({
        username: email,
      });
      
      return {
        destination,
        deliveryMedium,
        attributeName
      };
    } catch (error) {
      console.error('Error resending code:', error);
      throw error;
    }
  };

  const manualSignIn = async (email: string, password: string) => {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password: password
      });
      
      // Add a small delay to allow Amplify to complete its internal state updates
      await new Promise(resolve => setTimeout(resolve, 100));
      await checkAuth();  // Make sure to await this
  
      return {
        isSignedIn,
        nextStep
      };
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };
  

  return {
    signUp: handleSignUp,
    verifyCode,
    resendCode,
    signIn: manualSignIn
  };
}

// types/auth.ts
export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResult {
  userId: string;
  isSignUpComplete: boolean;
  nextStep: {
    signUpStep: string;
    codeDeliveryDetails?: {
      deliveryMedium: string;
      destination: string;
    };
  };
}