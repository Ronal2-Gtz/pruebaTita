import { GraphQLClient } from "graphql-request";

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl, 'LA URL')

export const graphqlClient = new GraphQLClient(apiUrl);