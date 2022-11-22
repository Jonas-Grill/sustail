import React, {useState} from "react";
import Link from "next/link";
import {BASE_URL} from "./_app";
import {useRouter} from "next/router";
import {login} from "./login";
import {User} from "../types/User";

const USER_TYPES = {
    PRODUCER: "PRODUCER",
    USER: "CUSTOMER"
}

export default function Register({setUser}: { setUser: (user: User) => void }) {
    const [userType, setUserType] = useState<string>(USER_TYPES.PRODUCER);

    const router = useRouter();

    const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = {
            name: {
                first: event.currentTarget.firstName.value,
                last: event.currentTarget.lastName.value
            },
            banking_info: {
                iban: event.currentTarget.iban.value ? event.currentTarget.iban.value : null,
            },
            address: {
                street: event.currentTarget.street.value,
                street_number: event.currentTarget.streetNumber.value,
                postal_code: event.currentTarget.postalCode.value,
                city: event.currentTarget.city.value,
            },
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
            type: userType === USER_TYPES.PRODUCER ? USER_TYPES.PRODUCER : "USER",
        }

        fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => {
            if (res.status === 201) {
                login(body.email, body.password, setUser);
                router.push("/");
            } else {
                res.json().then(data => {
                    alert(data.message);
                });
            }
        })
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/Sustail.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Register new account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link href="/login" className="font-medium text-sustail hover:text-sustail-dark">
                                login with existing account
                            </Link>
                        </p>
                    </div>

                    <div className="flex">
                        <button

                            type="button"
                            className={(userType == USER_TYPES.USER ? "bg-sustail-dark " : "bg-sustail ") + "group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"}
                            onClick={function () {
                                setUserType(USER_TYPES.USER)
                            }}
                        >
                            Register as customer
                        </button>
                        <button
                            type="button"
                            className={(userType == USER_TYPES.PRODUCER ? "bg-sustail-dark " : "bg-sustail ") + "group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"}
                            onClick={function () {
                                setUserType(USER_TYPES.PRODUCER)
                            }}
                        >
                            Register as producer
                        </button>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                placeholder="First name"
                            />
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                placeholder="Last name"
                            />
                            <div className="flex">
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    required
                                    className="relative mt-4 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Street"
                                />
                                <input
                                    id="streetNumber"
                                    name="streetNumber"
                                    type="text"
                                    required
                                    className="relative mt-4 block w-20 appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Number"
                                />
                            </div>
                            <div className="flex">
                                <input
                                    id="postalCode"
                                    name="postalCode"
                                    type="text"
                                    required
                                    className="relative block w-32 appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Postal code"
                                />
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="City"
                                />
                            </div>
                            <div>
                                <input
                                    id="iban"
                                    name="iban"
                                    type="text"
                                    autoCapitalize="on"
                                    maxLength={22}
                                    minLength={22}
                                    required={userType == USER_TYPES.PRODUCER}
                                    className="relative mt-4 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="IBAN"
                                />
                            </div>
                            <div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    className="relative mt-4 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    minLength={8}
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-sustail py-2 px-4 text-sm font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-sustail focus:ring-offset-2"
                            >
                                Register as {userType.toLowerCase()}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
