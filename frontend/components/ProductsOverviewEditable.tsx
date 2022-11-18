import Link from "next/link";
import {Product} from "../types/Product";

export default function ProductsOverviewEditable({products}: {products: Product[]}) {
    return (
        <div className="flex-col">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div className="mb-10">
                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sustail py-3 px-8 text-base font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add new product
                        </button>
                    </div>


                    <div
                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products?.map((product) => (
                            <div key={product._id}>
                                <div
                                    className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={product.image.src}
                                        alt={product.image.alt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price.amount_in_euros}</p>

                                <Link href={"/products/" + product._id}>
                                    <a className="inline-block rounded-md border border-transparent bg-sustail flex w-full items-center justify-center py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                        Edit product
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
