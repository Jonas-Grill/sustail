import Link from "next/link";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Sort_button from "../components/Sort_button";
import SortButton from "../components/Sort_button";
import {Product} from "../pages/products/[id]";

const images = {
    apple: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-09/apples-mc-220921-e7070f.jpg',
    banana: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    orange: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg',
    milk: 'https://www.thespruceeats.com/thmb/9_VG_uDvGCoqRu1XFIqjpsY8yns=/1000x1000/smart/filters:no_upscale()/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg',
    chicken: 'https://media.self.com/photos/62cd9c3069671d734f919d0f/16:9/w_4010,h_2256,c_limit/should-you-wash-chicken.jpg'
}

export default function ProductsOverview({data}: {data: [Product]}) {

    const products = data.map(value => {
        return {
            id: value._id,
            name: value.name,
            href: '#',
            price: value.price.amount_in_euros,
            imageSrc: images[value.name],
            imageAlt: '',
        }
    })

    return (
        <div className="flex-col">
            <div className="flex justify-center items-center">
                <SearchBar/>
            </div>
            <div className="flex justify-center items-center">
                <Filter/>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div
                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <Link key={product.id} href={"/products/" + product.id}>
                                <a key={product.id} className="group">
                                    <div
                                        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
