import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        people: {
          keyArgs: false,
          merge (existing = [], incoming) {
            return [...existing, ...incoming]
          }
        }
      }
    }
  }
})

export const handler = (req: any, res: any) => {
  res.setHeader(
    'Cache-Control',
    's-maxage=86400'
  )
  res.status(200).json({ name: 'John Doe' })
}

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: cache
})

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
