import Navbar from "../components/Navbar";

const features = [
    {name: 'Transparency', description: 'description'},
    {name: 'Sustainability', description: 'description'},
    {name: 'Support', description: 'description'},
    {name: 'Fair Trade', description: 'description'},
    {name: 'Flexibility', description: 'description'},
    {name: 'Community', description: 'description'},
]

export default function AfterCheckout() {
    return (
        <div className="flex-col">
            <Navbar/>
            <div className="bg-white">
                {/* Text */}
                <div className="bg-white">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thank you for your order!</h2>
                            <p className="mt-4 text-gray-500">
                                You gained X Sustail points
                            </p>

                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">You unlocked new achievements! Your new badges on the right are now available in your profile. Achievements:</dt>
                                        <dd className="mt-2 text-sm text-gray-500">First order</dd>
                                        <dd className="mt-2 text-sm text-gray-500">Reach 200 Sustail points</dd>
                                    </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                            <img
                                src="/3.png"
                                alt="Badge 3"
                                className="rounded-lg bg-gray-100"
                            />
                            <img
                                src="/4.png"
                                alt="Badge 4"
                                className="rounded-lg bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}