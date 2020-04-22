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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const getAuthorizationHeader_1 = __importDefault(require("./getAuthorizationHeader"));
const graphql_1 = require("graphql");
function introspect(graphql_url) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield node_fetch_1.default(graphql_url, {
            method: 'post',
            body: JSON.stringify({ query: graphql_1.getIntrospectionQuery() }),
            headers: {
                'Authorization': yield getAuthorizationHeader_1.default(),
                'Content-Type': 'application/json',
            },
        });
        const { data } = yield result.json();
        return data;
    });
}
exports.default = introspect;
//# sourceMappingURL=introspect.js.map