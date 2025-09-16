import AuthForm from '@/components/auth-form'
import { AuthModeType } from '@/types'
import React from 'react'

const Home: React.FC<{ [searchParams: string]: { mode: AuthModeType } }> = ({
  searchParams
}) => {
  const formMode = searchParams.mode ?? 'login'
  return <AuthForm mode={formMode} />
}

export default Home
