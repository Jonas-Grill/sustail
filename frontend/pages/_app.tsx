import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Navbar from "../components/Navbar";
import {useState} from "react";
import {Product} from "../types/Product";
import {User} from "../types/User";

export const BASE_URL = "http://sustail-api.dvepeygnctercggs.germanywestcentral.azurecontainer.io:3000";

function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState<User>();
    const [cart, setCart] = useState<Product[]>();

    const addProductToCart = (product: Product) => {
        setCart((prevCart) => {
            if (!prevCart) {
                return [product];
            } else {
                return [...prevCart, product];
            }
        });
    }

    const removeProductFromCart = (product: Product) => {
        setCart((prevCart) => {
            if (!prevCart) {
                return undefined;
            } else {
                return prevCart.filter((p) => p._id !== product._id);
            }
        });
    }

    return (
        <>
            <Navbar user={user}/>
            <Component {...pageProps} user={user} setUser={setUser} cart={cart} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart}/>
        </>
    )
}

export default MyApp
