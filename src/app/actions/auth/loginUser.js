"use server"
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
    const userCollection = dbConnect('users');
    const user = await userCollection.findOne({ email: payload.email });
    console.log('USER DATA', user);

    // Email and password validation check
    const { email, password } = payload;
    if (!email || !password) {
        console.log("❌ Missing email or password");
        return null;
    }

    // Check if user exists in the database
    if (!user) {
        console.log("❌ User not found");
        return null;
    }

    console.log("🔍 Stored Hashed Password:", user.password);
    console.log("🔍 Entered Payload Password:", payload.password);

    // Compare the entered password with the stored hashed password
    const isPassOk = await bcrypt.compare(payload.password, user.password);

    if (!isPassOk) {
        console.log("❌ Password mismatch");
        return null;
    }

    return user;
}
