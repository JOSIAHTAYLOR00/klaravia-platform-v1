import { 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink, 
  ApolloLink,
  NormalizedCacheObject
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

const GRAPHQL_ENDPOINT = "https://cxs4akn37zb55ffewsbgm57bmq.appsync-api.us-east-2.amazonaws.com/graphql";
const APPSYNC_KEY = "da2-ag5gfujygbczbpzneygficzviy";
const REGION = 'us-east-2';

if (!GRAPHQL_ENDPOINT || !APPSYNC_KEY) {
  throw new Error('Required environment variables are not defined');
}

const auth: { type: "API_KEY"; apiKey: string } = {
  type: "API_KEY", // or your auth type (API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, etc.)
  apiKey: "da2-ag5gfujygbczbpzneygficzviy", // process.env.REACT_APP_APPSYNC_KEY,
};

const httpLink = createHttpLink({ uri: GRAPHQL_ENDPOINT });

const link = ApolloLink.from([createAuthLink({ url: GRAPHQL_ENDPOINT, region: REGION, auth }), createSubscriptionHandshakeLink({ url: GRAPHQL_ENDPOINT, region: REGION, auth }, httpLink)]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});


export function initializeApollo() {
  return client;
}

export function getApolloClient() {
  return client;
}