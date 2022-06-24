import { Appwrite } from "appwrite";
const appwriteSDK = new Appwrite();
appwriteSDK
  .setEndpoint("http://localhost/v1")
  .setProject("62b2bed19b3d6accc9da");

export default appwriteSDK;
