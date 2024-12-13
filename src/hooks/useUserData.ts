import { useEffect, useRef } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'
import { useUpdateUser } from '../hooks/userHooks'
import { useAuth } from '@/hooks/useAuth'
import { storage } from '@/../utils/storage'
import { deepEqual } from '@/../utils/deepEqual'
import { UserUpdateOptions } from '@/API'
import { UserWithoutTypeName } from '@/types/user'
import { processUserData } from 'utils/userData'

export function useUserData(
  userData: UserWithoutTypeName, 
  setUserData: (data: UserWithoutTypeName) => void
) {
  const prevUserObject = useRef<UserWithoutTypeName>({
    id: '',
    updated_by: UserUpdateOptions.DYNAMO
  })
  
  const { userData: authUserData } = useAuth()
  const { updateUser } = useUpdateUser()

  useEffect(() => {
    async function syncUserData() {
      try {
        let isAuthenticated = false
        try {
          await getCurrentUser()
          isAuthenticated = true
        } catch {
          isAuthenticated = false
        }

        if (!isAuthenticated || deepEqual(prevUserObject.current, userData)) {
          console.warn('userData has not changed');
          return
        }

        const updatedData = processUserData(userData, authUserData)
        
        if (updatedData) {
          // Uncomment when ready to use updateUser mutation
          await updateUser({ variables: { input: updatedData } })
          
          setUserData(updatedData)
          prevUserObject.current = updatedData
          storage.set('userDObject', updatedData)
        }
      } catch (error) {
        console.error('Error syncing user data:', error)
      }
    }

    syncUserData()
  }, [userData, authUserData, setUserData])

  return { prevUserObject: prevUserObject.current }
}