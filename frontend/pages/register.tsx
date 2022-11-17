import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Register() {

    const [user, setUser] = useState({
        type: "PRODUCER"
    })

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
                            className={(user.type=="CUSTOMER" ? "bg-sustail-dark " : "bg-sustail ")+"group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"}
                            onClick={function () {
                                setUser({type: "CUSTOMER"})
                            }}
                        >
                            Register as customer
                        </button>
                        <button
                            type="button"
                            className={(user.type=="PRODUCER" ? "bg-sustail-dark " : "bg-sustail ")+"group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"}
                            onClick={function () {
                                setUser({type: "PRODUCER"})
                            }}
                        >
                            Register as producer
                        </button>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="First name"
                                />
                            </div>
                            <div>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Last name"
                                />
                            </div>
                            <div className="flex">
                                <input
                                    id="street"
                                    name="street"
                                    required
                                    className="relative mt-4 block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Street"
                                />
                                <input
                                    id="number"
                                    name="number"
                                    required
                                    className="relative mt-4 block w-20 appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Number"
                                />
                            </div>
                            <div className="flex">
                                <input
                                    id="postalCode"
                                    name="postalCode"
                                    required
                                    className="relative block w-32 appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Postal code"
                                />
                                <input
                                    id="city"
                                    name="city"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="City"
                                />
                            </div>
                            <div>
                                <input
                                    id="country"
                                    name="country"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                    placeholder="Country"
                                />
                            </div>
                            <div>
                                <input
                                    id="iban"
                                    name="iban"
                                    required={user.type == "PRODUCER"}
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
                                Register as {user.type.toLowerCase()}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
