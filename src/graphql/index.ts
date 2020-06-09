import { ApolloClient, ApolloLink, from, InMemoryCache } from '@apollo/client'
import { readToken } from '../auth/token'
import { createUploadLink } from 'apollo-upload-client'

const authLink = new ApolloLink((operation, forward) => {
  const tokens = readToken()
  if (tokens) {
    operation.setContext({
      headers: {
        Authorization: tokens.access_token
      }
    })
  }
  return forward(operation)
})

const uploadLink: ApolloLink = createUploadLink({
  uri: '/graphql',
  headers: {
    'keep-alive': 'true'
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authLink,
    uploadLink
  ])
})
