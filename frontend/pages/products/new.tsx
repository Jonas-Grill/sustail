import ProductDetailEditable from "../../components/ProductDetailEditable";
import {User} from "../../types/User";
import {Product} from "../../types/Product";

export default function NewProduct({user}: { user: User }) {
    const mockProduct: Product = {
        seller_id: "",
        weight_in_g: 0,
        image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Example_image.svg",
            alt: "An example image"
        },
        price: {
            amount_in_euros: 2,
            metric: "UNIT"
        },
        sustainability_score: {
            packaging: "PAPER",
            transportation_type: "ELECTRIC CAR",
            organic: true,
            score: 3
        },
        nutrition_per_100g: {
            fat: {
                total: 100,
                saturates: 20
            },
            carbohydrate: {
                total: 100,
                sugar: 20
            },
            energy: 100,
            protein: 100,
            salt: 20
        },
        _id: "",
        name: "Example product",
        type: "FRUITS",
        description: "Example description",
    }

    if (user && user.type == "PRODUCER") {
        return <ProductDetailEditable user={user} create={true} productData={mockProduct}/>
    } else {
        return <div>Unauthorized</div>
    }
}