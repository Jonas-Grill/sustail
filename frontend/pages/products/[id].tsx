import ProductDetail from "../../components/ProductDetail";
import ProductDetailEditable from "../../components/ProductDetailEditable";
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {ParsedUrlQuery} from "querystring";
import {Product} from "../../types/Product";
import {BASE_URL} from "../_app";

interface IParams extends ParsedUrlQuery {
    id: string
}

export async function getStaticPaths() {
    const request = await fetch(`${BASE_URL}/products`)
    const data = await request.json()

    const paths = data.map((product: Product) => ({
        params: {id: String(product._id)}
    }))

    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps<{ data: Product }> = async (context) => {
    const {id} = context.params as IParams

    const request = await fetch(`${BASE_URL}/products/${id}`)
    const data = await request.json()

    return {
        props: {data}
    }
}

export default function ProductId({data, user, addProductToCart}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="flex-col">
            {user && user.type == "PRODUCER" ? <ProductDetailEditable productData={data}/> : <ProductDetail product={data} addProductToCart={addProductToCart}/>}
        </div>
    )
}
