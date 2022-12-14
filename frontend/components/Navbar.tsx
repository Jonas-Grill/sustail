import {Fragment, useState} from "react";
import {Dialog, Popover, Transition} from "@headlessui/react";
import {Bars3Icon, ShoppingBagIcon, UserCircleIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import {User} from "../types/User";
import {CartItem} from "../types/Cart";

const navigation = {
    pages: [
        {name: 'Products', href: '/products'},
        {name: 'Recipes', href: '/'},
        {name: 'About us', href: '/aboutUs'},
    ],
}

export default function Navbar({
                                   user,
                                   setUser,
                                   cart
                               }: { user: User | undefined, setUser: (user: User | undefined) => void, cart: CartItem[] }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-white flex-col">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel
                                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <Link href={page.href}>
                                                <a className="-m-2 block p-2 font-medium text-gray-900 hover:text-sustail">
                                                    {page.name}
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {!user ?
                                        <>
                                            <div className="flow-root">
                                                <Link href="/login">
                                                    <a className="-m-2 block p-2 font-medium text-gray-900 hover:text-sustail">
                                                        Sign in
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="flow-root">
                                                <Link href="/register">
                                                    <a className="-m-2 block p-2 font-medium text-gray-900 hover:text-sustail">
                                                        Create account
                                                    </a>
                                                </Link>
                                            </div>
                                        </>
                                        :
                                        <div className="flow-root">
                                            <button
                                                className="-m-2 block p-2 font-medium text-gray-900 hover:text-sustail"
                                                onClick={event => setUser(undefined)}>
                                                Logout
                                            </button>
                                        </div>
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <a>
                                        <Image
                                            className="h-8 w-auto"
                                            src="/Sustail.png"
                                            alt=""
                                            width="30" height="30"
                                        />
                                    </a>
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.pages.map((page) => (
                                        <Link key={page.name} href={page.href}>
                                            <a className="flex items-center text-sm font-medium text-gray-700 hover:text-sustail">
                                                {page.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                {!user ?
                                    <div
                                        className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <Link href="/register">
                                            <a className="text-sm font-medium text-gray-700 hover:text-sustail">
                                                Create account
                                            </a>
                                        </Link>
                                    </div> :
                                    <div className="flow-root">
                                        <button className="text-sm font-medium text-gray-700 hover:text-sustail"
                                                onClick={event => setUser(undefined)}>
                                            Logout
                                        </button>
                                    </div>
                                }

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link href="/cart">
                                        <a className="group -m-2 flex items-center p-2">
                                            <ShoppingBagIcon
                                                className="h-6 w-6 flex-shrink-0 text-sustail group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <span
                                                className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                            >{cart.length}</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </Link>
                                </div>
                                {/* Profile */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    {user ?
                                        <Link href="/profile">
                                            <a className="group -m-2 flex items-center p-2">
                                                <UserCircleIcon
                                                    className="h-6 w-6 flex-shrink-0 text-sustail group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        </Link> :
                                        <Link href="/login">
                                            <a className="h-6 w-6 flex-shrink-0 text-sustail hover:text-gray-500">
                                                Sign in
                                            </a>
                                        </Link>}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
