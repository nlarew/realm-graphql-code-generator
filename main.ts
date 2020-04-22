// "realm graphql generate --typescript"
import * as dotenv from "dotenv"
import * as fs from "fs";
import { getRealmApp } from "./utils/realmApp"
import introspect from "./utils/introspect"
import { codegen } from "@graphql-codegen/core";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import {
  buildClientSchema,
  printSchema,
  parse,
  GraphQLSchema,
  IntrospectionQuery,
} from "graphql";

dotenv.config()

main({
  atlasProjectId: process.env.MONGODB_ATLAS_PROJECT_ID,
  realmAppId: process.env.REALM_APP_ID,
})

interface Params {
  atlasProjectId: string;
  realmAppId: string;
  outputFile?: string;
}
async function main({
  atlasProjectId,
  realmAppId,
  outputFile="./realm-graphql-schema.ts",
}: Params) {
  // Construct the GraphQL endpoint URL
  const app = await getRealmApp(atlasProjectId, realmAppId);
  const graphqlUrl = `https://stitch.mongodb.com/api/admin/v3.0/groups/${atlasProjectId}/apps/${app._id}/graphql`
  // Query the endpoint to get the GraphQL schema
  const introspectionSchemaResult: IntrospectionQuery = await introspect(graphqlUrl);
  const schema: GraphQLSchema = buildClientSchema(introspectionSchemaResult);
  // Generate TypeScript types based on the GraphQL schema
  const output = await codegen({
    filename: outputFile,
    schema: parse(printSchema(schema)),
    plugins: [{ typescript: {} }],
    pluginMap: {
      typescript: typescriptPlugin,
    },
    documents: [],
    config: {}
  });
  // Write the generated types to the {{outputFile}}
  fs.writeFileSync(outputFile, output);
  console.log(`Successfully generated types. Saved in ${outputFile}.`)
}
