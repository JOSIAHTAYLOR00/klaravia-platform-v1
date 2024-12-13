import { type User } from '@/API'
import { AuthUser } from 'aws-amplify/auth'

export interface CognitoUser extends AuthUser {
  username: string
  userId: string
  attributes: {
    sub: string
    email: string
    'custom:user_id': string
    'custom:first_name': string
    'custom:last_name': string
  }
}

export interface SignUpResult {
  isSignUpComplete: boolean
  nextStep: {
    signUpStep: string
    codeDeliveryDetails?: {
      destination: string
      deliveryMedium: string
      attributeName: string
    }
  }
}

export interface AuthContextType {
  user: CognitoUser | null
  setUser: (user: CognitoUser | null) => void;
  userData: User | null
  checkAuth: () => Promise<void>
  loading: boolean
  signOut: () => Promise<void>
  isAuthenticated: () => Promise<boolean>
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}