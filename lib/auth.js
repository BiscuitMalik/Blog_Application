import { hash } from "bcryptjs";
export async function encryptPassword(password) {
    const hashPassword = await hash.password(password, 12)
    return hashPassword;
}