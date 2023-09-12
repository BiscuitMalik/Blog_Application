import { MongoClient } from "mongodb";
export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://haroon:KAPhHY2eBEvAgDzT@cluster0.kvvkn7c.mongodb.net/')
    return client;
}

export default handler;