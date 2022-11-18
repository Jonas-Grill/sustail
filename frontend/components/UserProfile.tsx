import Link from "next/link";
import {User} from "../types/User";
import {Order} from "../types/Order";
import {Product} from "../types/Product";

const badges = [
    {
        id: 1,
        name: 'Badge 1',
        href: '/3.png',
        imageSrc: '/3.png',
        imageAlt: 'Badge for reaching 100 sustainability points',
    },
    {
        id: 2,
        name: 'Badge 2',
        href: '/4.png',
        imageSrc: '/4.png',
        imageAlt: 'Badge for reaching 200 sustainability points',
    },
    {
        id: 3,
        name: 'Badge 3',
        href: '/5.png',
        imageSrc: '/5.png',
        imageAlt: 'Badge for reaching 300 sustainability points',
    },
    {
        id: 4,
        name: 'Badge 4',
        href: '/6.png',
        imageSrc: '/6.png',
        imageAlt: 'Badge for reaching 400 sustainability points',
    }
]

export default function UserProfile({user, orders, products}: { user: User, orders: Order[], products: Product[] }) {
    return (
        <div className="bg-white">
            <div
                className="overflow-hidden bg-slate-100 shadow sm:rounded-lg mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 grid-rows-2 auto-cols-max gap-4">

                    <div
                        className="bg-white row-span-2 d-flex flex-column align-items-center text-center shadow-lg shadow-2xl">
                        <img src="/Justus.png" alt="User Photo" className="rounded-b-full"></img>
                        <div className="mt-3">
                            <div className="grid grid-cols-2 m-4">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    {user.name.first} {user.name.last}
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    {user.email}
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Phone</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    (49) 123-456
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Address</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    {user.address.street} {user.address.street_number}, {user.address.postal_code}, {user.address.city}
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Bank Account</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    {user.banking_info.iban}
                                </div>
                            </div>
                        </div>
                        <Link href="#">
                            <a className="mt-3 mb-3 inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                Edit
                            </a>
                        </Link>
                    </div>


                    <div className="shadow-lg shadow-2xl bg-white">
                        <div>
                            <h5 className="text-gray-900 text-xl font-medium mb-1 ml-3">My orders</h5>
                        </div>

                        <div className="grid grid-cols-5 auto-cols-max gap-4 ml-3">
                            <div className="sm-4 text-left font-semibold">
                                <h6 className="mb-0">Nr.</h6>
                            </div>
                            <div className="sm-4 text-left font-semibold">
                                <h6 className="mb-0">Status</h6>
                            </div>
                            <div className="sm-4 text-left font-semibold">
                                <h6 className="mb-0">Address</h6>
                            </div>
                            <div className="sm-4 text-left font-semibold">
                                <h6 className="mb-0">Amount</h6>
                            </div>
                            <div className="sm-4 text-left font-semibold">
                                <h6 className="mb-0">Product</h6>
                            </div>
                        </div>

                        <div className="divide-y divide-sustail">
                            {orders?.map((order: Order, index) => (
                                <div className="grid grid-cols-5 auto-cols-max gap-4 ml-3">
                                    <div className="sm-4 text-left">
                                        <h6 className="mb-0">{index}</h6>
                                    </div>
                                    <div className="sm-4 text-left">
                                        <h6 className="mb-0">{order.state}</h6>
                                    </div>
                                    <div className="sm-4 text-left">
                                        <h6 className="mb-0">{order.address.street} {order.address.street_number}, {order.address.postal_code}, {order.address.city}</h6>
                                    </div>
                                    <div className="sm-4 text-left">
                                        <h6 className="mb-0">
                                            {order.quantity}
                                        </h6>
                                    </div>
                                    <div className="sm-4 text-left">
                                        <h6 className="mb-0">{products?.find((product: Product) => product._id === order.product_id)?.name}</h6>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-center mb-3 mr-3">
                                <Link href="#">
                                    <a className="mt-3 inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                        View all orders
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white col-span-2 mt-4 shadow-lg shadow-2xl">
                        <div>
                            <h5 className="text-gray-900 text-xl font-medium mb-3 ml-3">My badges</h5>
                        </div>
                        <div
                            className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ml-3 mr-3 mb-3">
                            {badges.map((badge) => (
                                <Link key={badge.id} href={badge.href}>
                                    <a key={badge.id} className="group">
                                        <div
                                            className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                            <img
                                                src={badge.imageSrc}
                                                alt={badge.imageAlt}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <h3 className="mt-1 text-lg font-medium text-gray-900">{badge.name}</h3>
                                        <p className="mt-4 text-sm text-gray-700">{badge.imageAlt}</p>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
