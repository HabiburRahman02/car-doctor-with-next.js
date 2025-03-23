"use server"
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
    const userCollection = dbConnect('users');
    const user = await userCollection.findOne({ email: payload.email });
    console.log('USER', user);
    if (user) {
        console.log('user ache');
    }
    else {
       return {message: 'Can not same'}
    }
    const isPassOk = bcrypt.compare(user.password, payload.password);
    if(isPassOk){
        return user
    }
    else{
        return  {message: 'Password not oky'}
    }
}
