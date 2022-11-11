import {useState} from "react";
import Navbar from "../../components/Navbar";
import ProductDetail from "../../components/ProductDetail";
import ProductDetailEditable from "../../components/ProductDetailEditable";
import {useRouter} from "next/router";

export default function Product() {
    const [user, setUser] = useState({
        type: "USER"
    })

    const router = useRouter()
    const {id}= router.query
    // const product = api.getProductById(id)

    if (id != undefined) {
        return (
            <div className="flex-col">
                <Navbar/>
                {user.type == "USER" ? <ProductDetail id={id.toString()}/> : <ProductDetailEditable/>}
            </div>
        )
    } else {
        return (
            <div className="flex-col">
                <Navbar/>
                <h1>There is no product with the id: {id}</h1>
            </div>
        )
    }
}
