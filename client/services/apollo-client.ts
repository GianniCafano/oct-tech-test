import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: "http://localhost:3001/graphql", fetch }),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
    }
});

export default client;