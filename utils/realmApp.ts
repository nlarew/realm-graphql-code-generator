import fetch from "node-fetch"
import getAuthorizationHeader from "./getAuthorizationHeader"

type RealmAppDefinition = {
  _id: string,
  client_app_id: string,
  name: string,
  location: string,
  deployment_model: string,
  domain_id: string,
  group_id: string,
  last_used: number,
  last_modified: number
}

export async function getRealmApps(projectId: string): Promise<RealmAppDefinition[]> {
  const realm_apps_url = `https://stitch.mongodb.com/api/admin/v3.0/groups/${projectId}/apps`;
  const result = await fetch(realm_apps_url, {
    method: 'get',
    headers: {
      'Authorization': await getAuthorizationHeader(),
    },
  })
  const apps: RealmAppDefinition[] = await result.json()
  return apps;
}

export async function getRealmApp(projectId: string, appId: string): Promise<RealmAppDefinition> {
  const apps = await getRealmApps(projectId);
  const app = apps.find(a => a.client_app_id === appId);
  if(!app) {
    throw new Error(`No app found with id: ${appId}`)
  }
  return app
}
