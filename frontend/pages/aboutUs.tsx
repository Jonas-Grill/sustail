import Navbar from "../components/Navbar";

const features = [
    {name: 'Transparency', description: 'Our algorithm and all information is transparently provided to customers'},
    {name: 'Sustainability', description: 'We love sustainability and want to change the world to the better'},
    {name: 'Support', description: 'We support local farmers by providing an easy platform'},
    {name: 'Fair Trade', description: 'We are against low prices that are not possible to provide by sustainable farmers'},
    {name: 'Flexibility', description: 'Everyone can join and learn'},
    {name: 'Community', description: 'We love our community and want to grow day by day'},
]

export default function AboutUs() {
    return (
        <div className="flex-col">
            <div className="bg-white">
                {/* Text */}
                <div className="bg-white">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Sustail
                                about?</h2>
                            <p className="mt-4 text-gray-500">
                                Sustail is a very cool new company.
                            </p>

                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                {features.map((feature) => (
                                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                            <img
                                src="/Sustail.png"
                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                className="rounded-lg bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
