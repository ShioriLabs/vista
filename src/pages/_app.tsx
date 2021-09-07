import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import 'normalize.css'

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <ThemeProvider theme={{}}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
