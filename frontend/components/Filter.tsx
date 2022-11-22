import {Dispatch, SetStateAction} from "react";
import {Product} from "../types/Product";

export default function Filter(
    {
        products,
        setProducts,
        filterProducts,
    }: { products: Product[], setProducts: Dispatch<SetStateAction<Product[]>>, filterProducts: (filterMethod: (product: Product) => boolean) => void }) {
    const productsCopy = [...products];

    const sortMethods = {
        priceAsc: (a: Product, b: Product) => a.price.amount_in_euros - b.price.amount_in_euros,
        priceDesc: (a: Product, b: Product) => b.price.amount_in_euros - a.price.amount_in_euros,
        scoreAsc: (a: Product, b: Product) => a.sustainability_score.score - b.sustainability_score.score,
        scoreDesc: (a: Product, b: Product) => b.sustainability_score.score - a.sustainability_score.score,
    }

    const sortProducts = (sortMethod: (a: Product, b: Product) => number) => {
        setProducts([...products].sort(sortMethod));
    }

    const filterMethods = {
        priceZeroToTen: (product: Product) => product.price.amount_in_euros >= 0 && product.price.amount_in_euros <= 10,
        priceTenToTwenty: (product: Product) => product.price.amount_in_euros >= 10 && product.price.amount_in_euros <= 20,
        priceTwentyPlus: (product: Product) => product.price.amount_in_euros > 20,
        scoreOnePlus: (product: Product) => product.sustainability_score.score >= 1,
        scoreTwoPlus: (product: Product) => product.sustainability_score.score >= 2,
        scoreThreePlus: (product: Product) => product.sustainability_score.score >= 3,
        scoreFourPlus: (product: Product) => product.sustainability_score.score >= 4,
        scoreFive: (product: Product) => product.sustainability_score.score === 5,
        all: (product: Product) => true,
    }

    return (
        <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
                <div>
                    <p className="text-gray-800 text-sm ">
                        Category
                    </p>
                    <select
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="all">All</option>
                        <option value="fruit">Fruits</option>
                        <option value="vegetable">Vegetables</option>
                        <option value="meat">Meat</option>
                        <option value="fish">Fish</option>
                        <option value="drink">Drinks</option>
                    </select>
                </div>
                <div>
                    <p className="text-gray-800 text-sm ">
                        Price
                    </p>
                    {/*// @ts-ignore*/}
                    <select onChange={(e) => filterProducts(filterMethods[e.currentTarget.value])}
                            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value={filterMethods.all.name}>All</option>
                        <option value={filterMethods.priceZeroToTen.name}>0 to 10</option>
                        <option value={filterMethods.priceTenToTwenty.name}>10 to 20</option>
                        <option value={filterMethods.priceTwentyPlus.name}>20 +</option>
                    </select>
                </div>
                <div>
                    <p className="text-gray-800 text-sm ">
                        Sustainability
                    </p>
                    {/*// @ts-ignore*/}
                    <select onChange={(e) => filterProducts(filterMethods[e.currentTarget.value])}
                            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value={filterMethods.all.name}>All</option>
                        <option value={filterMethods.scoreFive.name}>5</option>
                        <option value={filterMethods.scoreFourPlus.name}>4+</option>
                        <option value={filterMethods.scoreThreePlus.name}>3+</option>
                        <option value={filterMethods.scoreTwoPlus.name}>2+</option>
                    </select>
                </div>
                <div>
                    <button
                        className="mt-5 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        Reset filters
                    </button>
                </div>
                <div>
                    <p className="text-gray-800 text-sm ">
                        Sort
                    </p>
                    {/*// @ts-ignore*/}
                    <select onChange={(e) => sortProducts(sortMethods[e.currentTarget.value])}
                            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="priceDesc">Price descending</option>
                        <option value="priceAsc">Price ascending</option>
                        <option value="scoreDesc">Sustainability score descending</option>
                        <option value="scoreAsc">Sustainability score ascending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}