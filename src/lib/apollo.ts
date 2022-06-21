import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oo2twn0mlj01z405x47zi4/master",
  cache: new InMemoryCache(),
});
