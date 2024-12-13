import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/providers/AuthProvider'
import { type AuthContextType } from '@/types/Auth/auth'

export function useAuth(): AuthContextType & { redirect: (path: string) => void } {
  const context = useContext(AuthContext)
  const router = useRouter()

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const redirect = (path: string) => {
    const redirectUrl = document.cookie
      .split('; ')
      .find(row => row.startsWith('redirectUrl='))
      ?.split('=')[1]

    if (redirectUrl) {
      // Clear the redirect cookie
      document.cookie = 'redirectUrl=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
      router.push(redirectUrl)
    } else {
      router.push(path)
    }
  }

  return {
    ...context,
    redirect
  }
}
