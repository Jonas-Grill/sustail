import {CheckIcon, ChevronUpDownIcon, GlobeEuropeAfricaIcon} from '@heroicons/react/20/solid'
import Navbar from "./Navbar";
import {Fragment, useRef, useState} from "react";
import {EditText, EditTextarea, onSaveProps} from "react-edit-text";
// import 'react-edit-text/dist/index.css';
import {Listbox, Transition} from '@headlessui/react'

const product = {
    name: '1kg Apples',
    price: '$2',
    href: '#',
    images: [
        {
            src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-09/apples-mc-220921-e7070f.jpg',
            alt: 'An apple.',
        },
    ],
    description:
        'Those are the most beautiful apples you will ever see.',
    transportationMethods: [
        'electric car',
        'train',
        'car',
        'DHL',
    ],
    packaging: [
        'paper',
        'plastic',
        'aluminum',
        'reusable container',
    ],
    highlights: [
        'local product',
        'no pesticides used',
        'no chemicals used',
        'fair trade',
    ],
}
const score = {href: '#', average: 4, totalCount: 117}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function onSave({name, value}: onSaveProps) {
    // @ts-ignore
    product[name] = value;
}

function onSaveHighlight({name, value}: onSaveProps) {
    // @ts-ignore
    product.highlights[name] = value;
}

export default function ProductDetailEditable() {

    const [selectedTransportationMethod, setSelectedTransportationMethod] = useState(product.transportationMethods[0]);
    const [selectedPackaging, setSelectedPackaging] = useState(product.packaging[0]);

    return (
        <div className="bg-white">
            <Navbar/>
            <div className="pt-6 m-2">

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    {/* Images */}
                    <div
                        className="mb-5 aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* product info */}
                    <div className="mt-0 lg:border-r lg:border-gray-200 lg:pr-8">
                        <div>
                            <EditText className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl hover:text-sustail"
                                      name="name" type="text" defaultValue={product.name}
                                      inputClassName={"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"}
                                      inline
                                      onSave={onSave}/>
                        </div>
                        <div className="mt-5 lg:border-r lg:border-gray-200 lg:pr-8">
                                <EditTextarea className="w-fit space-y-6 text-base tracking-tight text-gray-900 hover:text-sustail"
                                              name="name" rows={3} defaultValue={product.description}
                                              inputClassName={"w-fit space-y-6 text-base tracking-tight text-gray-900"}
                                              style={{
                                                  width: "100%",
                                              }}
                                              onSave={onSave}/>
                        </div>
                        <div className="z-5 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h3 className="text-sm font-medium text-gray-900">Transportation method</h3>
                            <Listbox value={selectedTransportationMethod} onChange={setSelectedTransportationMethod}>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="z-5 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="z-5 block truncate">{selectedTransportationMethod}</span>
                                        <span
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronUpDownIcon
                                              className="h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                          />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className="z-5 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                        >
                                            {product.transportationMethods.map((method, methodIdx) => (
                                                <Listbox.Option
                                                    key={methodIdx}
                                                    className={({active}) =>
                                                        `z-5 relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active ? 'bg-sustail-light text-sustail' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={method}
                                                >
                                                    {({selected}) => (
                                                        <>
                                                  <span
                                                      className={`z-5 block truncate ${
                                                          selected ? 'font-medium' : 'font-normal'
                                                      }`}
                                                  >
                                                    {method}
                                                  </span>
                                                            {selected ? (
                                                                <span
                                                                    className="z-5 absolute inset-y-0 left-0 flex items-center pl-3 text-sustail">
                                                                  <CheckIcon className="z-5 h-5 w-5" aria-hidden="true"/>
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>

                        <div className="z-1 mt-36 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h3 className="z-1 mt-7 text-sm font-medium text-gray-900">Packaging</h3>
                            <Listbox value={selectedPackaging} onChange={setSelectedPackaging}>
                                <div className="z-1 relative mt-1 z-1">
                                    <Listbox.Button
                                        className="z-1 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="z-1 block truncate">{selectedPackaging}</span>
                                        <span
                                            className="z-1 pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronUpDownIcon
                                              className="z-1 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                          />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className="z-1 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {product.packaging.map((method, methodIdx) => (
                                                <Listbox.Option
                                                    key={methodIdx}
                                                    className={({active}) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active ? 'bg-sustail-light text-sustail' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={method}
                                                >
                                                    {({selected}) => (
                                                        <>
                                                  <span
                                                      className={`block truncate ${
                                                          selected ? 'font-medium' : 'font-normal'
                                                      }`}
                                                  >
                                                    {method}
                                                  </span>
                                                            {selected ? (
                                                                <span
                                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-sustail">
                                                                  <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>

                        <h3 className="mt-7 text-sm font-medium text-gray-900">Highlights</h3>

                        <div className="mt-4">
                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                {product.highlights.map((highlight, index) => (
                                    <EditText className="text-gray-600 hover:text-sustail"
                                              name={index.toString()} type="text" style={{width: '200px'}}
                                              defaultValue={highlight} inline
                                              inputClassName={"text-gray-600"}
                                              onSave={onSaveHighlight}/>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* product shopping */}
                    <div className="mt-5 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <div>
                            <EditText className="text-3xl tracking-tight text-gray-900 hover:text-sustail"
                                      name="name" type="text" defaultValue={product.price}
                                      inputClassName={"text-3xl tracking-tight text-gray-900"}
                                      inline
                                      onSave={onSave}/>
                        </div>
                        {/* Score */}
                        <div className="mt-4">
                            <h3 className="sr-only">Score</h3>
                            <div className="flex items-center">
                                <p className="mr-3 text-xl font-medium text-sustail">Sustainability Score:</p>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <GlobeEuropeAfricaIcon
                                            key={rating}
                                            className={classNames(
                                                score.average > rating ? 'text-sustail' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{score.average} out of 5 stars</p>
                            </div>
                            <a href='#' className="mt-3 text-sm font-medium text-sustail hover:text-sustail-dark">
                                Score calculation info
                            </a>
                        </div>
                        <form className="mt-10 mb-10">
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sustail py-3 px-8 text-base font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to cart
                            </button>
                        </form>
                    </div>
                    <div></div>
                    <form className="mt-20 mb-10">
                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sustail py-3 px-8 text-base font-medium text-white hover:bg-sustail-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Save product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
