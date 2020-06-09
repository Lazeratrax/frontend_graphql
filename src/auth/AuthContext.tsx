//useMemo - оптимизация памяти 
import React, { createContext, useContext, useMemo } from 'react'
import { AuthQ, AuthQ_me } from '../graphql/generated'
// компилятор
import { loader } from 'graphql.macro'
// прелодер
import { AuthenticationSplash } from './AuthenticationSplash'
import { useQuery } from '@apollo/client'
import { writeToken } from './token'
// экшн, загрузка схемы
export const AUTH_QUERY = loader('./authQuery.graphql')

export interface AuthContext {
  user: AuthQ_me | null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetchUser: () => Promise<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authenticate: (token: string) => Promise<any>,
}

export const AuthReactContext = createContext<AuthContext>({} as AuthContext)

export const AuthContext: React.FC = ({ children }) => {
  // распарс хуком  аполо
  const authQ = useQuery<AuthQ>(AUTH_QUERY)

  // Нужно для корректной обработки useEffect
  const userData = authQ.data?.me
  const authQRefetch = authQ.refetch

  const authContext = useMemo(() => {
    return {
      user: userData ?? null,
      refetchUser: () => authQRefetch(),
      authenticate: (token: string) => {
        writeToken({ access_token: token })
        return authQRefetch()
      }
    }
  }, [userData, authQRefetch])

  if (authQ.loading && !authQ.data) {
    return <AuthenticationSplash/>
  }

  return (
    <AuthReactContext.Provider value={authContext}>
      {children}
    </AuthReactContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthReactContext)
}
