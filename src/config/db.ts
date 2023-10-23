import { Db, MongoClient } from "mongodb";
import config from "./config";

export default async function connect_db() {
    try {
        console.log("connect", config.mongodb_uri);
        const client: MongoClient = await MongoClient.connect(config.mongodb_uri!);
        const db: Db = await client.db("Backend");
        return {client, db};
    } catch (err) {
        throw new Error("Cannot connect to database")
    }
}
