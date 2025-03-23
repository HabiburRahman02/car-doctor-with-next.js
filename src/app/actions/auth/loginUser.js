"use server"
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
    const userCollection = dbConnect('users');
    const user = await userCollection.findOne({ email: payload.email });
    console.log('USER', user);
    const {email,password} = payload;
    if(!email || password) return null
    if (!user) return null
    const isPassOk = bcrypt.compare(user.password, payload.password);
    if(isPassOk){
        return user
    }
    else{
        return  null
    }
}
