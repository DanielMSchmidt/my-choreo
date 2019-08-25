import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, GraphQLRequest } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import introspectionResult from "./graphql.schema.json";

function isSubscription({ query }: GraphQLRequest) {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}

export default function getGraphQLClient() {
  const baseUrl = process.env.API_ORIGIN
    ? process.env.API_ORIGIN
    : "http://my-choreo.herokuapp.com/v1/graphql";

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult
  });

  return new ApolloClient({
    cache: new InMemoryCache({ fragmentMatcher }),
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      ApolloLink.split(
        isSubscription,
        new WebSocketLink({
          options: { reconnect: true },
          uri: baseUrl.replace("http://", "ws://")
        }),
        new HttpLink({
          credentials: "same-origin",
          uri: baseUrl
        })
      )
    ])
  });
}
