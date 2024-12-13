import { User, UserUpdateOptions } from "../API"

export type UserWithoutTypeName = Omit<User & { [key: string]: any }, "__typename">

export interface UserState extends UserWithoutTypeName {
  id: string
  updated_by: UserUpdateOptions
}