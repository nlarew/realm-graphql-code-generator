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
function getAccessToken(publicKey, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const auth_url = "https://stitch.mongodb.com/api/admin/v3.0/auth/providers/mongodb-cloud/login";
        const result = yield node_fetch_1.default(auth_url, {
            method: 'post',
            body: JSON.stringify({
                username: publicKey,
                apiKey: privateKey,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        const { access_token, refresh_token } = yield result.json();
        return access_token;
    });
}
exports.default = getAccessToken;
//# sourceMappingURL=getStitchAccessToken.js.map