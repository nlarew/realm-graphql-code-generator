import fetch from "node-fetch"
import getAuthorizationHeader from "./getAuthorizationHeader";
import { IntrospectionQuery, getIntrospectionQuery } from "graphql";

export default async function introspect(graphql_url: string): Promise<IntrospectionQuery> {
  const result = await fetch(graphql_url, {
    method: 'post',
    body: JSON.stringify({ query: getIntrospectionQuery() }),
    headers: {
      'Authorization': await getAuthorizationHeader(),
      'Content-Type': 'application/json',
    },
  })
  const { data } = await result.json();
  return data
}
