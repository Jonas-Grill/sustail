import Navbar from "../components/Navbar";

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

export default function cart() {
    return (
        <div className="flex-col">
            <Navbar/>
            <div className="bg-white px-10 py-10">
                <div><img src="Sustail.png" width="100" height="100"/>
                    <h3 className="text-lg font-medium leading-6 text-gray-900  grid grid-cols-3 gap-3">Shopping
                        Cart</h3></div>

                <div className="text-lg font-medium leading-6 text-gray-900 px-2 py-2 grid grid-cols-5 gap-5">
                    <div></div>
                    <div><h3 className=" text-lg font-medium leading-6 text-gray-900"> Product</h3></div>
                    <div><p className=" text-lg font-medium leading-6 text-gray-900"> Price</p></div>
                    <div><p className=" text-lg font-medium leading-6 text-gray-900"> Quantity</p></div>
                </div>

                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                </div>
                <dl>
                    {products.map((product) => (
                        <div className="bg-gray-50 px-2 py-2 grid grid-cols-5 gap-5">
                            <img className="overflow-hidden rounded-lg"
                                 src={product.imageSrc}
                                 width="200" height="200"/>
                            <div><p className="font-bold"> {product.name}</p></div>
                            <div><p className="font-bold"> {product.price}</p></div>
                            <div>
                                <input type="number" min="0"
                                       className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       id="exampleNumber0" placeholder="2"/>
                            </div>
                            <div>
                                <button
                                    className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"> Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="text-lg font-medium leading-6 text-gray-900 px-2 py-2 grid grid-cols-5 gap-5">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div><p className=" text-gray-900"> Shipping Price</p>
                            <p className=" text-gray-900"> Total Price</p></div>
                        <div><p className="font-bold text-gray-900">9.99$</p>
                            <p className="font-bold text-gray-900">37.99$</p>
                            <a href="/checkout"  type="button" 
                                    className="inline-block px-6 py-2.5 bg-sustail text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sustail-dark hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Checkout
                             </a>
                        </div>
                    </div>

                </dl>
            </div>
        </div>
    )
}




