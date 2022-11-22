import {GlobeEuropeAfricaIcon} from '@heroicons/react/20/solid'
import Navbar from "./Navbar";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Product} from "../types/Product";
import React from "react";
import Score from "./Score";
import ScoreWithInfo from "./ScoreWithInfo";

const score = {href: '#', average: 4, totalCount: 117}

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
                        <ScoreWithInfo score={product.sustainability_score.score}/>
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
