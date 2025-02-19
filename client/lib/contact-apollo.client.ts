import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        people: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return [...existing, ...incoming]
          }
        }
      }
    }
  }
})

export const contactApolloClient = new ApolloClient({
  uri: process.env.contactServerUrl,
  cache: cache
})
