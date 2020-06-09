import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { NAV } from '../nav'
import { deleteToken } from './token'
import { useApolloClient } from '@apollo/client'

const Logout: React.FC = () => {
  const apollo = useApolloClient()
  const history = useHistory()

  useEffect(() => {
    deleteToken()
    apollo.clearStore().then(() => void history.replace(NAV.Login))
  })

  return null
}

export default Logout
