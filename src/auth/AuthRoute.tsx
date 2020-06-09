import React, { createContext, useContext } from 'react'
import { Required } from 'utility-types'
import { RouteProps } from 'react-router'
import { Redirect, Route } from 'react-router-dom'
import { AuthQ_me } from '../graphql/generated'
import { useAuthContext } from './AuthContext'
import { rememberReturnTo } from './returnToAfterLogin'
import { NAV } from '../nav'

export type AuthenticatedUser = AuthQ_me

const AuthenticationContext = createContext<AuthenticatedUser>({} as AuthenticatedUser)
// Required - все содержимое обязательно
const AuthRoute: React.FC<Required<RouteProps, 'component'>> = ({ component, ...rest }) => {
  const Component = component

  const { user } = useAuthContext()
  if (!user) {
    if (rest.location) {
      rememberReturnTo(rest.location.pathname + rest.location.search)
    }
    return <Redirect to={NAV.Login}/>
  }

  return (
    <Route {...rest} render={(props) => (
      <AuthenticationContext.Provider value={user}>
        <Component {...props} />
      </AuthenticationContext.Provider>
    )}/>
  )
}

export default AuthRoute

export function useCurrentUser() {
  return useContext(AuthenticationContext)
}
