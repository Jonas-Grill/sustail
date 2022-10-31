import cart from "../pages/cart";

export default function cartPage() {
    return (
        <div className="bg-white px-10 py-10">
            <div><img src="Sustail.png" width="100" height="100" />
                <h3 className="text-lg font-medium leading-6 text-gray-900  grid grid-cols-3 gap-3">Shopping Cart</h3> </div>

            <div className="text-lg font-medium leading-6 text-gray-900 px-2 py-2 grid grid-cols-5 gap-5">
                <div></div>
                <div> <h3 className=" text-lg font-medium leading-6 text-gray-900"> Prodcut</h3> </div>
                <div> <p className=" text-lg font-medium leading-6 text-gray-900"> Price</p> </div>
                <div> <p className=" text-lg font-medium leading-6 text-gray-900"> Quantity</p> </div>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            </div>
            <dl>
                <div className="bg-gray-50 px-2 py-2 grid grid-cols-5 gap-5">
                    <img className="overflow-hidden rounded-lg" src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-09/apples-mc-220921-e7070f.jpg" width="200" height="200" />
                    <div> <p className="font-bold"> Apple</p> </div>
                    <div> <p className="font-bold"> 2$</p> </div>
                    <div> <input type="number" className=" form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid
                               border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleNumber0" placeholder="1" /> </div>
                    <div> <button className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"> Remove</button> </div>
                </div>

                <div className="bg-gray-50 px-2 py-2 grid grid-cols-5 gap-5">
                    <img className="overflow-hidden rounded-lg" src="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg" width="200" height="200" />
                    <div> <p className="font-bold"> Banana</p> </div>
                    <div> <p className="font-bold"> 3$</p> </div>
                    <div> <input type="number" className=" form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid
                               border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleNumber0" placeholder="2" /> </div>
                    <div> <button className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"> Remove</button> </div>
                </div>

                <div className="bg-gray-50 px-2 py-2 grid grid-cols-5 gap-5">
                    <img className="overflow-hidden rounded-lg" src="https://www.thespruceeats.com/thmb/9_VG_uDvGCoqRu1XFIqjpsY8yns=/1000x1000/smart/filters:no_upscale()/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg" width="200" height="200" />
                    <div> <p className="font-bold"> Milk</p> </div>
                    <div> <p className="font-bold"> 4$</p> </div>
                    <div> <input type="number" className=" form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid
                               border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleNumber0" placeholder="5" /> </div>
                    <div> <button className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"> Remove</button> </div>
                </div>
                <div className="text-lg font-medium leading-6 text-gray-900 px-2 py-2 grid grid-cols-5 gap-5">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div><p className=" text-gray-900"> Shipping Price</p>
                        <p className=" text-gray-900"> Total Price</p> </div>
                    <div><p className="font-bold text-gray-900">9.99$</p>
                        <p className="font-bold text-gray-900">37.99$</p>
                        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Checkout</button> </div>
                </div>

            </dl>
        </div>
    )
}

