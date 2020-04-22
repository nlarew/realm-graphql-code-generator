import * as dotenv from "dotenv"
import getAccessToken from "./getStitchAccessToken";

dotenv.config()
const {
  MONGODB_CLOUD_PUBLIC_KEY,
  MONGODB_CLOUD_PRIVATE_KEY,
} = process.env

export default async function getAuthorizationHeader() {
  return `Bearer ${await getAccessToken(MONGODB_CLOUD_PUBLIC_KEY, MONGODB_CLOUD_PRIVATE_KEY)}`
}
