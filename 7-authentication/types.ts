export type AuthModeType = 'login' | 'signup'

export interface UserEntity {
  id: string
  email: string
  password: string
}
