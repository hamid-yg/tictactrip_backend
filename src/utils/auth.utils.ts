import connect_db from "../config/db";
import { v4 as uuid } from "uuid";

export async function generateToken(email: string) {
    try {
        const { db } = await connect_db();
        const token = uuid();
        const user = await db.collection("users").findOne({ email });
        if (user) {
            await db.collection("users").updateOne({ email }, { $set: { token } });
            const lastRequest = new Date(user.lastRequest);
            const now = new Date();
            const diff = now.getTime() - lastRequest.getTime();
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            if (diffDays > 1) {
                await db.collection("users").updateOne({ email }, { $set: { quota: 80000 } });
            }
        } else
            await db.collection("users").insertOne({ email, token, quota: 80000, lastRequest: new Date() });
        return { token };
    } catch (err) {
        throw new Error(`Cannot generate token: ${err}`);
    }
}

export async function checkToken(token: string) {
    try {
        const { db } = await connect_db();
        const user = await db.collection("users").findOne({ token });
        if (!user) return false;
        return user;
    } catch (err) {
        throw new Error("Cannot check token");
    }
}
