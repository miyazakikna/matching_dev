import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head';
import { AuthProvider } from '../context/AuthProvider'
import { Header } from '../components/Header'
import { Copyright, Layout } from '../components'
import Box from '@material-ui/core/Box';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
    <Head>
      <title>パーソナル</title>
      <meta
        name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* <Header /> */}
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
    

  )
}

export default MyApp