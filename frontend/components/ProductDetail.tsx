import {GlobeEuropeAfricaIcon} from '@heroicons/react/20/solid'
import Navbar from "./Navbar";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Product} from "../types/Product";
import React from "react";

const score = {href: '#', average: 4, totalCount: 117}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({product, addProductToCart}: { product: Product, addProductToCart: (product: Product, amount: number) => void }) {
    return (
        <div className="bg-white">
            <div className="pt-6 m-2">

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    {/* Images */}
                    <div
                        className="mb-5 aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={product.image.src}
                            alt={product.image.alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* product info */}
                    <div className="mt-0 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        <h3 className="sr-only">Description</h3>

                        <div className="mt-5 space-y-6">
                            <p className="text-base text-gray-900">{product.description}</p>
                        </div>
                        <h3 className="mt-7 text-sm font-medium text-gray-900">Highlights</h3>

                        <div className="mt-4">
                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                <li className="text-gray-400">
                                    <span
                                        className="text-gray-600">Packaging: {product.sustainability_score.packaging}</span>
                                </li>
                                <li className="text-gray-400">
                                    <span
                                        className="text-gray-600">Transportation type: {product.sustainability_score.transportation_type}</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* product shopping */}
                    <div className="mt-5 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price.amount_in_euros}€</p>

                        {/* Score */}
                        <div className="mt-4">
                            <h3 className="sr-only">Score</h3>
                            <div className="flex items-center">
                                <p className="mr-3 text-xl font-medium text-sustail">Sustainability Score:</p>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <GlobeEuropeAfricaIcon
                                            key={rating}
                                            className={classNames(
                                                score.average > rating ? 'text-sustail' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{score.average} out of 5 stars</p>
                            </div>
                            <Popup trigger={<button
                                className="mt-3 text-sm font-medium text-sustail hover:text-sustail-dark"> Score
                                Calculation Info </button>}
                                   position="right center">
                                {/* Pop Up Content */}
                                <div className="px-4 text-sm">
                                    <p className="font-medium">How our score is calculated:</p>
                                    <ul className="list-disc text-gray-600">
                                        <li>Organic Label (30%)</li>
                                        <li>Packaging (20%)</li>
                                        <li>Transportation Method (50%)</li>
                                    </ul>
                                </div>
                            </Popup>
                        </div>
                        <form className="mt-10 mb-10" onSubmit={event => {
                            event.preventDefault()
                            addProductToCart(product, Number(event.currentTarget.quantity.value))}
                        }>
                            <label className="sr-only">
                                Quantity
                            </label>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                autoComplete="off"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sustail focus:outline-none focus:ring-sustail sm:text-sm"
                                defaultValue="1"
                            />
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sustail py-3 px-8 text-base font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to cart
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
