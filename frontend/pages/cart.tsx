import Link from "next/link";
import {GlobeEuropeAfricaIcon} from "@heroicons/react/20/solid";
import React from "react";
import {CartItem} from "../types/Cart";
import Image from "next/image";
import {Product} from "../types/Product";
import Score from "../components/Score";

const score = [{href: '#', average: 4, totalCount: 117},
    {href: '#', average: 3, totalCount: 117,},
    {href: '#', average: 2, totalCount: 117,},
    {href: '#', average: 5, totalCount: 117,}
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Cart(
    {
        cart,
        addProductToCart,
        removeProductFromCart
    }: {
        cart: CartItem[],
        addProductToCart: (product: Product, amount: number) => void,
        removeProductFromCart: (product: Product, amount: number) => void
    }) {
    const shippingCost = 5.00;

    const overallScore = () => {
        if (cart.length == 0) {
            return 5;
        } else {
            const amount = cart.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);

            return (cart.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.product.sustainability_score.score * currentValue.quantity
            }, 0) / amount)
        }
    }

    return (
        <div className="flex-col">
            <div className="bg-white px-10 py-10">
                <div><Image src="/Sustail.png" width="100" height="100"/>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-3 gap-3">Shopping
                        Cart</h3>
                </div>

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
                    {cart.map((item) => (
                        <div key={item.product._id} className="bg-gray-50 px-2 py-2 grid grid-cols-6 gap-5">
                            <img className="overflow-hidden rounded-lg"
                                 src={item.product.image.src}
                                 width="200" height="200"/>
                            <div><p className="font-bold"> {item.product.name}</p></div>
                            <div><p className="font-bold"> {item.product.price.amount_in_euros}</p></div>
                            <div>
                                <input type="number" min="0"
                                       className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       id="quantity" defaultValue={item.quantity}
                                       onChange={(e) => {
                                           const quantity = parseInt(e.target.value) - item.quantity;

                                           if (quantity > 0) {
                                               addProductToCart(item.product, quantity);
                                           } else {
                                               removeProductFromCart(item.product, Math.abs(quantity));
                                           }
                                       }}
                                />
                            </div>
                            <div>
                                <button
                                    className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={() => removeProductFromCart(item.product, item.quantity)}
                                >
                                    Remove
                                </button>
                            </div>
                            <div>
                                <p className="mr-1 flex">
                                    <Score score={item.product.sustainability_score.score}/>
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
                                <Score score={overallScore()}/>
                            </p>
                            <p className="font-bold text-gray-900">{shippingCost}€</p>
                            <p className="font-bold text-gray-900 mb-2">{
                                cart.reduce((previousValue, currentValue) => {
                                    return previousValue + currentValue.product.price.amount_in_euros * currentValue.quantity
                                }, shippingCost)}€
                            </p>
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