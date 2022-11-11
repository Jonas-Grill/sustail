import Navbar from "../components/Navbar";
import Link from "next/link";
import {GlobeEuropeAfricaIcon} from "@heroicons/react/20/solid";
import React from "react";

const products = [
    {
        id: 1,
        name: 'Apple',
        href: '#',
        price: '$2',
        imageSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-09/apples-mc-220921-e7070f.jpg',
        imageAlt: 'An apple.',
    },
    {
        id: 2,
        name: 'Banana',
        href: '#',
        price: '$3',
        imageSrc: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
        imageAlt: 'A banana.',
    },
    {
        id: 3,
        name: 'Orange',
        href: '#',
        price: '$2',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg',
        imageAlt: 'An orange.',
    },
    {
        id: 4,
        name: 'Milk',
        href: '#',
        price: '$4',
        imageSrc: 'https://www.thespruceeats.com/thmb/9_VG_uDvGCoqRu1XFIqjpsY8yns=/1000x1000/smart/filters:no_upscale()/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg',
        imageAlt: '500 ml milk.',
    }
]

const score = [{href: '#', average: 4, totalCount: 117},
    {href: '#', average: 3, totalCount: 117,},
    {href: '#', average: 2, totalCount: 117,},
    {href: '#', average: 5, totalCount: 117,}
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function OverallScore() {
    const overallScore = score.reduce((a, v) => a = a + v.average, 0,);
    return (overallScore / products.length)
}

export default function Cart() {
    return (
        <div className="flex-col">
            <Navbar/>
            <div className="bg-white px-10 py-10">
                <div><img src="Sustail.png" width="100" height="100"/>
                    <h3 className="text-lg font-medium leading-6 text-gray-900  grid grid-cols-3 gap-3">Shopping
                        Cart</h3></div>

                <div className="text-lg font-medium leading-6 text-gray-900 px-2 py-2 grid grid-cols-6 gap-5">
                    <div></div>
                    <div><h3 className=" text-lg font-medium leading-6 text-gray-900"> Product</h3></div>
                    <div><p className=" text-lg font-medium leading-6 text-gray-900"> Price</p></div>
                    <div><p className=" text-lg font-medium leading-6 text-gray-900"> Quantity</p></div>
                    <div></div>
                    <div><p className=" text-lg font-medium leading-6 text-gray-900"> Sustainability score</p></div>
                </div>

                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                </div>
                <dl className="divide-y divide-sustail">
                    {products.map((product) => (
                        <div key={product.id} className="bg-gray-50 px-2 py-2 grid grid-cols-6 gap-5">
                            <img className="overflow-hidden rounded-lg"
                                 src={product.imageSrc}
                                 width="200" height="200"/>
                            <div><p className="font-bold"> {product.name}</p></div>
                            <div><p className="font-bold"> {product.price}</p></div>
                            <div>
                                <input type="number" min="0"
                                       className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       id="exampleNumber0" placeholder="2"/>
                            </div>
                            <div>
                                <button
                                    className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"> Remove
                                </button>
                            </div>
                            <div>
                                <p className="mr-1 flex">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <GlobeEuropeAfricaIcon
                                            key={rating}
                                            className={classNames(
                                                OverallScore() > rating ? 'text-sustail' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />))}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="text-lg font-medium leading-6 text-gray-900 px-2 py-2 grid grid-cols-5 gap-5">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>
                            <p className=" text-gray-900">Overall Score</p>
                            <p className=" text-gray-900">Shipping Price</p>
                            <p className=" text-gray-900">Total Price</p>
                        </div>
                        <div>
                            <p className="mr-4 flex">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <GlobeEuropeAfricaIcon
                                        key={rating}
                                        className={classNames(
                                            OverallScore() > rating ? 'text-sustail' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />))}
                            </p>
                            <p className="font-bold text-gray-900">9.99$</p>
                            <p className="font-bold text-gray-900 mb-2">37.99$</p>
                            <Link href="/checkout">
                                <a className="inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                    Checkout
                                </a>
                            </Link>
                        </div>
                    </div>

                </dl>
            </div>
        </div>
    )
}