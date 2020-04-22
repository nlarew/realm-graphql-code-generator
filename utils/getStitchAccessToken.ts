import fetch from "node-fetch"

export default async function getAccessToken(publicKey: string, privateKey: string) {
  const auth_url = "https://stitch.mongodb.com/api/admin/v3.0/auth/providers/mongodb-cloud/login";
  const result = await fetch(auth_url, {
    method: 'post',
    body: JSON.stringify({
      username: publicKey,
      apiKey: privateKey,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  const { access_token, refresh_token } = await result.json()
  return access_token;
}
