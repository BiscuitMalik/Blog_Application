import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || !name.trim() === '' || !message || !message.trim() === '') {
            res.status(422).json({ message: 'Invalid data' })
            return;
        }
        const newMessage = {
            email,
            name,
            message
        };

        let client;
        try {

            client = await MongoClient.connect('mongodb+srv://haroon:KAPhHY2eBEvAgDzT@cluster0.kvvkn7c.mongodb.net/')
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to the base!' })
            return;
        }
        const db = client.db()
        try {
            const result = await db.collection('message').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Message storing failed!' })
            return;
        }
        client.close()

        res.status(201).json({ message: 'Successful', data: newMessage })
    }



}

export default handler;