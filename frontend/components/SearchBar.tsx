import {Product} from "../types/Product";

export default function SearchBar({filterProducts}: { filterProducts: (filterMethod: (product: Product) => boolean) => void }) {

    const filterProductsByName = (name: string) => {
        filterProducts((product) => product.name.toLowerCase().includes(name.toLowerCase()));
    }

    return (
        <div className="mt-5 flex items-center">
            <div className="flex space-x-1">
                <input
                    type="text"
                    onChange={(e) => filterProductsByName(e.target.value)}
                    className="block w-full px-4 py-2 text-sustail bg-white border border-gray-400 rounded-full focus:border-sustail focus:outline-none focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-sustail rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
