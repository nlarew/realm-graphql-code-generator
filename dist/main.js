"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// "realm graphql generate --typescript"
const dotenv = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
const realmApp_1 = require("./utils/realmApp");
const introspect_1 = __importDefault(require("./utils/introspect"));
const core_1 = require("@graphql-codegen/core");
const typescriptPlugin = __importStar(require("@graphql-codegen/typescript"));
const graphql_1 = require("graphql");
dotenv.config();
main({
    atlasProjectId: process.env.MONGODB_ATLAS_PROJECT_ID,
    realmAppId: process.env.REALM_APP_ID,
});
function main({ atlasProjectId, realmAppId, outputFile = "./realm-graphql-schema.ts", }) {
    return __awaiter(this, void 0, void 0, function* () {
        // Construct the GraphQL endpoint URL
        const app = yield realmApp_1.getRealmApp(atlasProjectId, realmAppId);
        const graphqlUrl = `https://stitch.mongodb.com/api/admin/v3.0/groups/${atlasProjectId}/apps/${app._id}/graphql`;
        // Query the endpoint to get the GraphQL schema
        const introspectionSchemaResult = yield introspect_1.default(graphqlUrl);
        const schema = graphql_1.buildClientSchema(introspectionSchemaResult);
        // Generate TypeScript types based on the GraphQL schema
        const output = yield core_1.codegen({
            filename: outputFile,
            schema: graphql_1.parse(graphql_1.printSchema(schema)),
            plugins: [{ typescript: {} }],
            pluginMap: {
                typescript: typescriptPlugin,
            },
            documents: [],
            config: {}
        });
        // Write the generated types to the {{outputFile}}
        fs.writeFileSync(outputFile, output);
        console.log(`Successfully generated types. Saved in ${outputFile}.`);
    });
}
//# sourceMappingURL=main.js.map