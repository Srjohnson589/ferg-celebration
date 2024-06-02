import { ApolloClient, InMemoryCache } from '@apollo/client';

export function useApollo(initialState) {
  return new ApolloClient({
    uri: 'http://localhost:3000/graphql', // Your GraphQL API endpoint
    cache: new InMemoryCache().restore(initialState || {}),
  });
}