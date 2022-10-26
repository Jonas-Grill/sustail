import Navbar from "../components/Navbar";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: 'Apple',
        href: '#',
        price: '$2',
        imageSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-09/apples-mc-220921-e7070f.jpg',
        imageAlt: 'An apple.',
    },
    {
        id: 2,
        name: 'Banana',
        href: '#',
        price: '$3',
        imageSrc: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
        imageAlt: 'A banana.',
    },
    {
        id: 3,
        name: 'Orange',
        href: '#',
        price: '$2',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg',
        imageAlt: 'An orange.',
    },
    {
        id: 4,
        name: 'Milk',
        href: '#',
        price: '$4',
        imageSrc: 'https://www.thespruceeats.com/thmb/9_VG_uDvGCoqRu1XFIqjpsY8yns=/1000x1000/smart/filters:no_upscale()/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg',
        imageAlt: '500 ml milk.',
    }
]

export default function Home() {
    return (
        <div className="w-full">
            <Navbar/>
            <div className="relative overflow-hidden bg-sustail-light">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Share your sustainability score on instagram
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                Sustail gives you the opportunity to share badges based on your achievements of being a
                                sustainable person
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div
                                        className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div
                                                    className="h-64 w-44 overflow-hidden bg-sustail rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/achievement-award-medal-icon.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden bg-sustail rounded-lg">
                                                    <img
                                                        src="/Instagram-Logo.wine.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden bg-sustail rounded-lg">
                                                    <img
                                                        src="/Instagram-Logo.wine.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden bg-sustail rounded-lg">
                                                    <img
                                                        src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/achievement-award-medal-icon.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden bg-sustail rounded-lg">
                                                    <img
                                                        src="/Instagram-Logo.wine.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden bg-sustail rounded-lg">
                                                    <img
                                                        src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/achievement-award-medal-icon.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden bg-sustail rounded-lg">
                                                    <img
                                                        src="/Instagram-Logo.wine.svg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#">
                                    <a className="inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                        Create your account
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <Link href={product.href}>
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
