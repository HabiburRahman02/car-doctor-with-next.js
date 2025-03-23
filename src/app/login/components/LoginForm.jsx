"use client"

import { loginUser } from "@/app/actions/auth/loginUser";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        let data = { email, password };
        loginUser(data);
        try {
            const res = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                // redirect: false
            })
            // if (res.ok) {
            //     router.push('/')
            // }
            // else {
            //     alert('Unauthenticated')
            // }
        } catch (error) {
            console.log('ERR', error);
            alert('Unauthenticated user')
        }

    }
    return (
        <form onSubmit={handleLogin}>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-secondary mt-4">Login</button>
                </fieldset>
            </div>
        </form>
    );
};

export default LoginForm;