import { 
  signIn as amplifySignIn,
  signUp as amplifySignUp,
  signOut as amplifySignOut,
  getCurrentUser,
  fetchAuthSession,
  type SignUpOutput,
  type AuthUser
} from 'aws-amplify/auth'
import { type CognitoUser } from '@/types/Auth/auth'

export async function signUp(
  username: string, 
  password: string, 
  attributes: Record<string, string>
) {
  try {
    const result = await amplifySignUp({
      username,
      password,
      options: {
        userAttributes: attributes
      }
    })
    
    // SignUpOutput has isSignUpComplete and nextStep
    return result
  } catch (error) {
    console.error('Error signing up:', error)
    throw error
  }
}

export async function signIn(username: string, password: string) {
  try {
    const result = await amplifySignIn({ 
      username, 
      password 
    })
    return result
  } catch (error) {
    console.error('Error signing in:', error)
    throw error
  }
}

export async function signOut() {
  try {
    await amplifySignOut()
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

export async function getAuthUser(): Promise<CognitoUser | null> {
  try {
    const authUser = await getCurrentUser()
    
    // Transform AuthUser into your CognitoUser type
    return {
      username: authUser.username,
      userId: authUser.userId || "",
      attributes: {
        sub: authUser.userId,
        email: authUser.signInDetails?.loginId || '',
        'custom:user_id': (authUser as CognitoUser).attributes?.['custom:user_id'] || '',
        'custom:first_name': (authUser as CognitoUser).attributes?.['custom:first_name'] || '',
        'custom:last_name': (authUser as CognitoUser).attributes?.['custom:last_name'] || ''
      }
    }
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const session = await fetchAuthSession()
    return !!session.tokens
  } catch {
    return false
  }
}