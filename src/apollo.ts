import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat, Operation, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { toast } from 'react-toastify';

export interface ILogUserInVariables {
  token: string;
}

const getToken = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return token;
  } else {
    return '';
  }
};

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  operation.setContext({
    headers: {
      'X-JWT': getToken(),
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GQL_URL,
});

const wsLink = new WebSocketLink({
  options: {
    connectionParams: {
      'X-JWT': getToken(),
    },
    reconnect: true,
  },
  uri: process.env.REACT_APP_WS_URL!,
});

const combinedLinks = split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.log(message);
      if (message === 'No JWT. I refuse to proceed') {
        toast.error(`Unexpected error: ${message}`);
        localStorage.removeItem('jwt');
        window.location.replace('/');
      }
    });
  }
  if (networkError) {
    toast.error(`Network error: ${networkError}`);
  }
});

const localStateLink = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: 'Auth',
      isLoggedIn: Boolean(localStorage.getItem('jwt')),
    },
  },
  resolvers: {
    Mutation: {
      logUserIn: (_: any, { token }: any, { cache: appCache }: any) => {
        localStorage.setItem('jwt', token);
        appCache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: true,
            },
          },
        });
        return null;
      },
      logUserOut: (_: any, __: any, { cache: appCache }: any) => {
        localStorage.removeItem('jwt');
        appCache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: false,
            },
          },
        });
        return null;
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorLink,
    localStateLink,
    concat(authMiddleware, combinedLinks),
  ]),
});

export default client;
