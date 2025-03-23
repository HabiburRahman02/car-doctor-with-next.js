"use server"
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'
export const registerUser = async (payload) => {
    const userCollection = dbConnect('users')

    const user = await userCollection.findOne({ email: payload.email })
    if (!user) {
        const hashPassword =await bcrypt.hash(payload.password,10);
        payload.password = hashPassword;
        const result = await userCollection.insertOne(payload);
        return result;
    }
    return { success: false, message: 'already exist' }


}