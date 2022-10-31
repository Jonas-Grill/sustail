import {useState} from "react";
import Navbar from "../components/Navbar";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import productsOverview from "../pages/productsOverview";
import CartPage from "../components/CartPage";


type product = {
        id: number
        name: string
        price: number
        imageSrc: string
    }
    
    export default function cartPage() {
        return (
            <div className="flex-col">
                <Navbar/>
                { <CartPage/> }
            </div>
        )
    }
    



