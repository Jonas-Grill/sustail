import React from "react";
import Link from "next/link";
import {LockClosedIcon} from '@heroicons/react/20/solid'
import {BASE_URL} from "./_app";
import {useRouter} from "next/router";
import {User} from "../types/User";

export const login = async (email: string, password: string, setUser: (user: User) => void) => {
    const loginOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }

    const loginRes = await fetch(`${BASE_URL}/login`, loginOptions);

    if (loginRes.status === 400) {
        alert("Invalid email or password");
        return false;
    } else {
        const loginResult = await loginRes.json();

        const userOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loginResult.token}`
            },
        }

        fetch(`${BASE_URL}/users/self`, userOptions).then(res => {
            res.json().then(user => {
                setUser({
                    ...user,
                    token: loginResult.token,
                });
            });
        });

        return true;
    }
}

export default function Login({setUser}: {setUser: (user: User) => void}) {
    const router = useRouter();

    const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;

        const success = await login(email, password, setUser);

        if (success) {
            router.push('/');
        }
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
                    <form className="mt-8 space-y-6" onSubmit={submitLogin}>
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
                                <LockClosedIcon className="h-5 w-5 text-gray-300 group-hover:text-sustail-light"
                                                aria-hidden="true"/>
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
