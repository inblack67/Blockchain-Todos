import { FC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css'

const MyApp:FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
