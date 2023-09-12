import { encryptPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";

async function handler(req, res) {
    const data = req.body;
    const { email, password } = data
    if (!email || !email.includes('@') || !password || !password.trim().length < 7) {
        res.status(422).json({ message: 'Data is not valid1' })
        return
    }

    const client = await connectToDatabase()
    const db = client.db()

    const hashPassword = encryptPassword(password)

    const result = await db.collection('users').insertOne({
        email: email,
        password: hashPassword
    })

    res.status(201).json({ message: 'Created user succesfuly' })

}
export default handler;