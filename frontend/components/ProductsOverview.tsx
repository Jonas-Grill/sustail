import Link from "next/link";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import {Product} from "../types/Product";
import Score from "./Score";
import {useState} from "react";

export default function ProductsOverview({productData}: { productData: Product[] }) {
    const [products, setProducts] = useState(productData);

    const filterProducts = (filterMethod: (product: Product) => boolean) => {
        setProducts(productData.filter(filterMethod));
    }

    return (
        <div className="flex-col">
            <div className="flex justify-center items-center">
                <SearchBar/>
            </div>
            <div className="flex justify-center items-center">
                <Filter products={products} setProducts={setProducts}  filterProducts={filterProducts}/>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <Link key={product._id} href={"/products/" + product._id} className="group">
                                <a key={product._id} className="group">
                                    <div
                                        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={product.image.src}
                                            alt={product.image.alt}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price.amount_in_euros}€</p>
                                    <Score score={product.sustainability_score.score}/>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
