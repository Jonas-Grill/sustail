import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/Navbar"
import Pro from "../components/ProducerProfile"
import User from "../components/UserProfile"

import {LockClosedIcon} from '@heroicons/react/20/solid'
import Navbar from "../components/Navbar";

export default function Login({setUser}) {
    const submitLogin = async (event) => {
        event.preventDefault();

        const body = {
            email: event.target.email.value,
            password: event.target.password.value,
        }

        const res = await fetch(`https://api.agify.io/?name=${name}`);
        const result = await res.json();

        alert(`So your name is ${event.target.name.value}?`);
    };

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/Sustail.png"
                        alt="Sustail"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link href="/register" className="font-medium text-sustail hover:text-sustail-dark">
                            register as new user
                        </Link>
                    </p>
                    <form className="mt-8 space-y-6" onSubmit={submitLogin} action="#" method="POST">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                placeholder="Email address"
                            />
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-sustail py-2 px-4 text-sm font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-sustail focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-gray-300 group-hover:text-sustail-light" aria-hidden="true"/>
                            </span>
                            Sign in
                        </button>
                    </form>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-sustail hover:text-sustail-dark">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
