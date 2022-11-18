import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {Product} from "../types/Product";
import {User} from "../types/User";
import {Cart} from "../types/Cart";

// export const BASE_URL = "http://sustail-api.dvepeygnctercggs.germanywestcentral.azurecontainer.io:3000";
export const BASE_URL = "http://localhost:5000";

function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState<User>();
    const [cart, setCart] = useState<Cart>();

    const setUserState = (user: User) => {
        setUser(user);
        localStorage.setItem("USER", JSON.stringify(user));
    }

    const addProductToCart = (product: Product, amount: number = 1) => {
        setCart((prevCart) => {
            if (!prevCart) {
                prevCart = {
                    items: [{
                        product: product,
                        quantity: 1
                    }]
                }
            } else if (amount > 0) {
                if (prevCart.items.find(item => item.product._id === product._id)) {
                    prevCart.items = prevCart.items.map(item => item.product._id === product._id ? {
                        product: item.product,
                        quantity: item.quantity + amount
                    } : item)
                } else {
                    prevCart.items.push({
                        product: product,
                        quantity: amount
                    })
                }
            }
            return prevCart;
        });
        window.localStorage.setItem('CART', JSON.stringify(cart));
    }

    const removeProductFromCart = (product: Product, amount: number = -1) => {
        setCart((prevCart) => {
            if (prevCart) {
                if (prevCart.items.find(item => item.product._id === product._id)) {
                    if (amount === -1) {
                        prevCart.items = prevCart.items.filter(item => item.product._id !== product._id);
                    } else if (amount > 0) {
                        prevCart.items = prevCart.items.map(item => item.product._id === product._id ? {
                            product: item.product,
                            quantity: item.quantity - amount
                        } : item)
                    }

                    prevCart.items = prevCart.items.filter(item => item.quantity > 0);
                }
            }

            return prevCart;
        });

        window.localStorage.setItem('CART', JSON.stringify(cart));
    }

    useEffect(() => {
        const cartStorage = window.localStorage.getItem('CART');
        if (cartStorage != null) {
            let storageParsed = JSON.parse(cartStorage)
            setCart(storageParsed)
        }

        const userStorage = window.localStorage.getItem('USER');
        if (userStorage != null) {
            let storageParsed = JSON.parse(userStorage)
            setUser(storageParsed)
        }
    }, [])

    return (
        <>
            <Navbar user={user} setUser={setUserState}/>
            <Component {...pageProps} user={user} setUser={setUserState} cart={cart} addProductToCart={addProductToCart}
                       removeProductFromCart={removeProductFromCart}/>
        </>
    )
}

export default MyApp
