import {useState} from "react";
import Navbar from "../../components/Navbar";
import ProductsOverview from "../../components/ProductsOverview";
import ProductsOverviewEditable from "../../components/ProductsOverviewEditable";

export default function Products() {
    const [user, setUser] = useState({
        type: "User"
    })

    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <ProductsOverview/> : <ProductsOverviewEditable/>}
        </div>
    )
}
