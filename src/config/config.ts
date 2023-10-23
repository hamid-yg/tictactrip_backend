import dotenv from "dotenv";

dotenv.config();

let mongodb_uri: string | undefined = "";

if (process.env.NODE_ENV === "production")
  mongodb_uri = process.env.MONGODB_PROD;
else if (process.env.NODE_ENV === "development")
  mongodb_uri = process.env.MONGODB_DEV;

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET_TOKEN,
  mongodb_uri
};
