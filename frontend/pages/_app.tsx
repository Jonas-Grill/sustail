import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {Product} from "../types/Product";
import {User} from "../types/User";
import {CartItem} from "../types/Cart";

// export const BASE_URL = "http://sustail-api.dvepeygnctercggs.germanywestcentral.azurecontainer.io:3000";
export const BASE_URL = "http://localhost:5000";

function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState<User>();
    const [cart, setCart] = useState<CartItem[]>([]);

    const setUserState = (user: User) => {
        setUser(user);
        localStorage.setItem("USER", JSON.stringify(user));
    }

    const addProductToCart = (product: Product, amount: number = 1) => {
        setCart((prevCart) => {
            if (amount > 0) {
                if (prevCart.find(item => item.product._id === product._id)) {
                    prevCart = prevCart.map(item => item.product._id === product._id ? {
                        product: item.product,
                        quantity: item.quantity + amount
                    } : item)
                } else {
                    prevCart.push({
                        product: product,
                        quantity: amount
                    })
                }
            }

            window.localStorage.setItem('CART', JSON.stringify(prevCart));
            return prevCart;
        });
    }

    const removeProductFromCart = (product: Product, amount: number = -1) => {
        setCart((prevCart) => {
            if (prevCart) {
                if (prevCart.find(item => item.product._id === product._id)) {
                    if (amount === -1) {
                        prevCart = prevCart.filter(item => item.product._id !== product._id);
                    } else if (amount > 0) {
                        prevCart = prevCart.map(item => item.product._id === product._id ? {
                            product: item.product,
                            quantity: item.quantity - amount
                        } : item)
                    }

                    prevCart = prevCart.filter(item => item.quantity > 0);
                }
            }
            window.localStorage.setItem('CART', JSON.stringify(prevCart));
            return prevCart;
        });
    }

    const clearCart = () => {
        setCart([]);
        window.localStorage.removeItem('CART');
    }

    useEffect(() => {
        if (cart.length === 0) {
            const cartStorage = window.localStorage.getItem('CART');
            if (cartStorage) {
                let storageParsed = JSON.parse(cartStorage)
                setCart(storageParsed)
            }
        }

        if (!user) {
            const userStorage = window.localStorage.getItem('USER');
            if (userStorage) {
                let storageParsed = JSON.parse(userStorage)
                setUser(storageParsed)
            }
        }
    }, [cart, user])

    return (
        <>
            <Navbar user={user} setUser={setUserState} cart={cart}/>
            <Component {...pageProps} user={user} setUser={setUserState} cart={cart} addProductToCart={addProductToCart}
                       removeProductFromCart={removeProductFromCart} clearCart={clearCart}/>
        </>
    )
}

export default MyApp
