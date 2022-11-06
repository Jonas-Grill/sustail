import {useState} from "react";
import Navbar from "../../components/Navbar";
import ProductDetail from "../../components/ProductDetail";
import ProductDetailEditable from "../../components/ProductDetailEditable";
import {useRouter} from "next/router";

export default function product() {
    const [user, setUser] = useState({
        type: "Producer"
    })

    const router = useRouter()
    const {id} = router.query
    const product = api.getProductById(id)

    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <ProductDetail product={product}/> : <ProductDetailEditable/>}
        </div>
    )
}
