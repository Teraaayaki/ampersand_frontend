/* eslint-disable require-jsdoc */
import type { AppProps } from "next/app";
import React, { ReactElement } from "react";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
