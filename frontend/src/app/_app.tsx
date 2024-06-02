// _app.js

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient'; // Import useApollo hook from your Apollo Client setup

import 'tailwindcss/tailwind.css';
import './globals.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
