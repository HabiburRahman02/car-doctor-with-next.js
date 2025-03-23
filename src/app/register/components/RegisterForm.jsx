"use client"
import { registerUser } from "@/app/actions/auth/registerUser";

const RegisterForm = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        let data = { name, email, password };
        registerUser(data);
    }
    return (
        <form onSubmit={handleRegister}>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Name</label>
                    <input name="name" type="email" className="input" placeholder="Name" />
                    <label className="fieldset-label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </div>
        </form>
    );
};

export default RegisterForm;