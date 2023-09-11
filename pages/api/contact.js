import { MongoClient } from 'mongodb';

async function connectDatabase() {
    try {
        const client = await MongoClient.connect(
            'mongodb+srv://temp:YfQXHS9cdVbgLAVC@cluster0.kvvkn7c.mongodb.net/'
        );
        return client;
    } catch (error) {
        throw new Error('Could not connect to the database!');
    }
}

async function insertDocument(client, document) {
    try {
        const db = client.db();
        const result = await db.collection('message').insertOne(document);
        return result;
    } catch (error) {
        throw new Error('Message storing failed!');
    }
}

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        // Validation: Check if email is valid, name is not empty, and message is not empty.
        if (!email || !email.includes('@') || !name.trim() || !message.trim()) {
            res.status(422).json({ message: 'Invalid data' });
            return;
        }

        let client;
        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({ message: error.message });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        try {
            const result = await insertDocument(client, newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            res.status(500).json({ message: error.message });
            client.close();
            return;
        }

        client.close();

        res.status(201).json({ message: 'Successful', data: newMessage });
    }
}

export default handler;
