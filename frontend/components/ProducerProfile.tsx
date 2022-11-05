import Link from "next/link";

const products = [
    {
        id: 1,
        name: 'Apple',
        href: '/productDetail',
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


export default function ProducerProfile() {
    return (
        <div className="bg-white">
            <div
                className="overflow-hidden bg-slate-100 shadow sm:rounded-lg mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 grid-rows-2 auto-cols-max gap-4">

                    <div className="row-span-2 d-flex flex-column align-items-center text-center shadow-lg shadow-2xl">
                        <img src="/Paul.png" alt="Producer Photo" className="rounded-b-full"></img>
                        <div className="mt-3">
                            <h4>Paul Producer</h4>
                            <div className="grid grid-cols-2 m-4">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    Paul Producer
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    paul.producer@gmail.com
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Phone</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    (49) 123-456
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Address</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    Musterstraße 1, Muserstadt, Germany
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Bank Account</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    LLXX XXXX XXXX XXXX 6666
                                </div>
                            </div>
                        </div>
                        <Link href="#">
                            <a className="mt-3 inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                Edit
                            </a>
                        </Link>
                    </div>


                    <div className="shadow-lg shadow-2xl">
                        <div>
                            <h5 className="text-gray-900 text-xl font-medium mb-1 ml-3">Current Orders</h5>
                        </div>

                        <div className="divide-y divide-sustail">
                            <div className="grid grid-cols-7 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">Nr.</h6>
                                </div>
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">Progress</h6>
                                </div>
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">Order-ID</h6>
                                </div>
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">User-ID</h6>
                                </div>
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">User name</h6>
                                </div>
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">Products sold</h6>
                                </div>
                                <div className="sm-4 text-left font-semibold">
                                    <h6 className="mb-0">Total price (EUR)</h6>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">1</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Pending</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">1000</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">0301</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Mark</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Apples, Carrot, Grapes</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">10,50</h6>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">2</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Shipping</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">1020</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">0401</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Jacob</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Apples, Banana, broccoli</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">15,50</h6>
                                </div>
                            </div>
                            <div className="flex justify-center mb-3 mr-3">
                                <Link href="#">
                                    <a className="mt-3 inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                        View all orders
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 shadow-lg shadow-2xl">
                        <div>
                            <h5 className="text-gray-900 text-xl font-medium mb-4 ml-3">Statistics</h5>
                        </div>
                        <div className="grid grid-cols-1 auto-cols-max gap-4 ml-3 divide-y divide-sustail">
                            <div className="grid grid-cols-2 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Total Sales this month</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">9743</h6>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Total items sold this month</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">1349</h6>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Average purchase value</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">9,45</h6>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 auto-cols-max gap-4 ml-3">
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">Ratings</h6>
                                </div>
                                <div className="sm-4 text-left">
                                    <h6 className="mb-0">4.7/5 (257 reviews)</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 mt-4 shadow-lg shadow-2xl">
                        <div>
                            <h5 className="text-gray-900 text-xl font-medium mb-3 ml-3">My products</h5>
                        </div>
                        <div className="flex justify-center mb-3 mr-3">
                            <Link href="/productsOverviewEditable">
                                <a className="mt-3 inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark">
                                    View all products
                                </a>
                            </Link>
                        </div>
                        <div
                            className="grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ml-3 mr-3 mb-3">
                            {products.map((product) => (
                                <div>
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

                                    <Link href="/productDetailEditable">
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
        </div>
    )
}
