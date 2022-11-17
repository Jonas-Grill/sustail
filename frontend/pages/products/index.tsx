import {useState} from "react";
import Navbar from "../../components/Navbar";
import ProductsOverview from "../../components/ProductsOverview";
import ProductsOverviewEditable from "../../components/ProductsOverviewEditable";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Product} from "./[id]";

export default function Products({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [user, setUser] = useState({
        type: "User"
    })

    return (
        <div className="flex-col">
            <Navbar/>
            {user.type == "User" ? <ProductsOverview data={data}/> : <ProductsOverviewEditable/>}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{ data: [Product] }> = async (context) => {
    const url = 'http://sustail-api.dvepeygnctercggs.germanywestcentral.azurecontainer.io:3000/products/';
    const res = await fetch(url, {
        headers: {
            Accept: 'application/json',
        },
    });
    const data: [Product] = await res.json();

    return {
        props: {
            data
        },
    };
}
