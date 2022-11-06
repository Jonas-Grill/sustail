import {useState} from "react";
import Navbar from "../../components/Navbar";
import ProductsOverview from "../../components/ProductsOverview";
import ProductsOverviewEditable from "../../components/ProductsOverviewEditable";

export default function productsOverview() {
    const [user, setUser] = useState({
        type: "Producer"
    })

    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <ProductsOverview/> : <ProductsOverviewEditable/>}
        </div>
    )
}
