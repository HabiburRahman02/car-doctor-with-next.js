"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { signOut } from "next-auth/react";

const Navbar = () => {
    const session = useSession();
    console.log('session', session);
    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/services'>Services</Link></li>
        <li><Link href='/contact'>Contact</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        session.status === 'authenticated' ?
                            <>
                                <button onClick={signOut()} className='btn btn-soft'>Logout</button>
                            </>
                            :
                            <>
                                <button className='btn btn-primary'><Link href='/register'>Register</Link></button>
                                <button className='btn btn-success ml-3'><Link href='/login'>Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;