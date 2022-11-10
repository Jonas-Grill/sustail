
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


export default function CartPage() {
    return (


        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping
                                            cart</h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Close panel</span>
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                     aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                <li className="flex py-6">

                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            src="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg"
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"/>
                                                    </div>


                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div
                                                                className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">Bananas</a>
                                                                </h3>
                                                                <p className="ml-4">4.00 €</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <p className="text-gray-500">Qty 6</p>

                                                            <div className="flex">
                                                                <button type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500">Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="flex py-6">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-09/apples-mc-220921-e7070f.jpg"
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"/>

                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div
                                                                className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">Apples</a>
                                                                </h3>
                                                                <p className="ml-4">$10.00</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <p className="text-gray-500">Qty 4</p>

                                                            <div className="flex">
                                                                <button type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500">Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base font-bold text-green-700">
                                        <p>Your Sustainability Score</p>
                                        <p>4 out of 5</p>
                                    </div>
                                    <div className="h-10 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src="https://i.ibb.co/n67972D/5leaftransparent.png"
                                            alt=""
                                            className="h-full w-full object-contain object-center"/>

                                    </div>

                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$14.00</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <a href="#"
                                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                 Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}