import {useState} from "react";
import Navbar from "../../components/Navbar";
import ProductDetail from "../../components/ProductDetail";
import ProductDetailEditable from "../../components/ProductDetailEditable";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType} from 'next'
import {GetServerSideProps} from 'next'
import {ParsedUrlQuery} from "querystring";

interface IParams extends ParsedUrlQuery {
    id: string
}

export async function getStaticPaths() {
    const request = await fetch(`http://sustail-api.dvepeygnctercggs.germanywestcentral.azurecontainer.io:3000/products/`)
    const data = await request.json()

    const paths = data.map((product: Product) => ({
        params: {id: String(product._id)}
    }))

    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps<{ data: Product }> = async (context) => {
    const {id} = context.params as IParams

    const request = await fetch(`http://sustail-api.dvepeygnctercggs.germanywestcentral.azurecontainer.io:3000/products/${id}`)
    const data = await request.json()

    return {
        props: {data}
    }
}

export default function Product({data}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [user, setUser] = useState({
        type: "Producer"
    })

    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <ProductDetail product={data}/> : <ProductDetailEditable productData={data}/>}
        </div>
    )
}
