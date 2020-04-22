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
function getRealmApps(projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const realm_apps_url = `https://stitch.mongodb.com/api/admin/v3.0/groups/${projectId}/apps`;
        const result = yield node_fetch_1.default(realm_apps_url, {
            method: 'get',
            headers: {
                'Authorization': yield getAuthorizationHeader_1.default(),
            },
        });
        const apps = yield result.json();
        return apps;
    });
}
exports.getRealmApps = getRealmApps;
function getRealmApp(projectId, appId) {
    return __awaiter(this, void 0, void 0, function* () {
        const apps = yield getRealmApps(projectId);
        const app = apps.find(a => a.client_app_id === appId);
        if (!app) {
            throw new Error(`No app found with id: ${appId}`);
        }
        return app;
    });
}
exports.getRealmApp = getRealmApp;
//# sourceMappingURL=realmApp.js.map