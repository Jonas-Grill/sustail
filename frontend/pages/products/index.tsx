import ProductsOverview from "../../components/ProductsOverview";
import ProductsOverviewEditable from "../../components/ProductsOverviewEditable";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {User} from "../../types/User";
import {Product} from "../../types/Product";
import {useEffect} from "react";
import {BASE_URL} from "../_app";

export default function Products({products, user}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    useEffect(() => {
        if (user && user.type === "PRODUCER") {
            products = products.filter(product => product.seller_id === user._id)
        }
    }, [user]);

    console.log(user);

    return (
        <div className="flex-col">
            {(user && user.type == "PRODUCER") ? <ProductsOverviewEditable products={products}/> : <ProductsOverview products={products}/>}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{ products: Product[] }> = async (context) => {
    const url = `${BASE_URL}/products`;
    const res = await fetch(url, {
        headers: {
            Accept: 'application/json',
        },
    });

    const products: Product[] = await res.json();

    console.log(products);

    return {
        props: {
            products
        },
    };
}
