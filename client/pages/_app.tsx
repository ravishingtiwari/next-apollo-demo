import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client/react'
import { contactApolloClient } from '../lib/contact-apollo.client'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={contactApolloClient} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
