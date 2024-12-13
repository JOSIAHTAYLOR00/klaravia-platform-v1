import { UserWithoutTypeName } from '@/types/user'
import { UserUpdateOptions } from '@/API'

export function processUserData(userData: UserWithoutTypeName, authUserData: any): UserWithoutTypeName | null {
  if (!userData) return null

  const processedData = { ...userData }
  
  // Remove unnecessary fields
  delete processedData.google_solar_object
  delete processedData.createdAt
  delete processedData.installer
  delete processedData.installerId
  delete processedData.state
  delete processedData.stateId
  delete processedData.updatedAt
  delete processedData.utility_provider
  delete processedData.__typename

  // Ensure required fields
  processedData.updated_by = UserUpdateOptions.DYNAMO
  processedData.id = processedData.id || authUserData?.id

  return processedData
}