export default function Filter() {
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
                    <select
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="all">All</option>
                        <option value="0-10">0 to 10</option>
                        <option value="10-20">10 to 20</option>
                        <option value="20+">20 +</option>
                    </select>
                </div>
                <div>
                    <p className="text-gray-800 text-sm ">
                        Sustainability
                    </p>
                    <select
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="all">All</option>
                        <option value="5">5</option>
                        <option value="4+">4+</option>
                        <option value="3+">3+</option>
                        <option value="2+">2+</option>
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
                    <select
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Price descending</option>
                        <option value="">Price ascending</option>
                        <option value="">Sustainability score descending</option>
                        <option value="">Sustainability score ascending</option>
                    </select>
                </div>
            </div>
        </div>
)
}