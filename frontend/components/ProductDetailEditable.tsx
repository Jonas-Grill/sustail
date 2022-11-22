import {CheckIcon, ChevronUpDownIcon, GlobeEuropeAfricaIcon} from '@heroicons/react/20/solid'
import React, {Fragment, useState} from "react";
import {EditText, EditTextarea, onSaveProps} from "react-edit-text";
import {Listbox, Transition} from '@headlessui/react'
import {Product} from "../types/Product";
import {BASE_URL} from "../pages/_app";
import {User} from "../types/User";
import {useRouter} from "next/router";
import Image from "next/image";
import ScoreWithInfo from "./ScoreWithInfo";

const score = {href: '#', average: 4, totalCount: 117}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetailEditable(
    {
        productData,
        user,
        create = false
    }: { productData: Product, user: User, create?: boolean }) {
    const [product, setProduct] = useState(productData);
    const [selectedTransportationType, setSelectedTransportationType] = useState(product.sustainability_score.transportation_type);
    const [selectedPackaging, setSelectedPackaging] = useState(product.sustainability_score.packaging);
    const [imageSrc, setImageSrc] = useState(product.image.src);

    const router = useRouter();

    const transportationMethods = [
        'electric car',
        'car',
        'car carbon neutral',
    ]

    const packaging = [
        'paper',
        'plastic',
        'aluminum',
        'reusable container',
        'glass',
    ]

    const setProductState = (productData: Product) => {
        setProduct(productData);
        setSelectedTransportationType(productData.sustainability_score.transportation_type);
        setSelectedPackaging(productData.sustainability_score.packaging);
        setImageSrc(productData.image.src);
    }

    const onSave = ({name, value}: {name: string, value: string | boolean | number}) => {
        const newProduct = product;

        for (let key in newProduct) {
            // @ts-ignore
            if ((typeof newProduct[key]) === 'object') {
                // @ts-ignore
                for (let key2 in newProduct[key]) {
                    if (key2 === name) {
                        // @ts-ignore
                        newProduct[key][key2] = value;
                        break;
                    }
                }
            } else if (key === name) {
                // @ts-ignore
                newProduct[key] = value;
                break;
            }
        }

        console.log(newProduct);
        setProductState(newProduct);
    }

    const submitProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (create) {
            const body = {
                name: product.name,
                image: {
                    src: product.image.src,
                    alt: product.image.alt,
                },
                price: {
                    amount_in_euros: product.price.amount_in_euros,
                    metric: product.price.metric,
                },
                type: product.type,
                sustainability_score: {
                    transportation_type: selectedTransportationType.toUpperCase(),
                    packaging: selectedPackaging.toUpperCase(),
                    organic: product.sustainability_score.organic,
                },
                nutrition_per_100g: product.nutrition_per_100g,
                description: product.description,
            }

            fetch(`${BASE_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(body)
            }).then(res => {
                if (res.status === 201) {
                    alert('Product created successfully!');
                    res.json().then(data => {
                        router.push('/products/' + data._id);
                    });
                } else {
                    res.json().then(data => {
                        alert(data.message);
                    });
                }
            });
        } else {
            const body = {
                name: product.name,
                image: {
                    src: product.image.src,
                    alt: product.image.alt,
                },
                price: {
                    amount_in_euros: product.price.amount_in_euros,
                },
                sustainability_score: {
                    transportation_type: selectedTransportationType.toUpperCase(),
                    packaging: selectedPackaging.toUpperCase(),
                    organic: product.sustainability_score.organic,
                },
                description: product.description,
            }

            fetch(`${BASE_URL}/products/${product._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(body)
            }).then(res => {
                if (res.status === 200) {
                    alert('Product saved successfully!');
                    router.push('/products');
                } else {
                    res.json().then(data => {
                        alert(data.message);
                    });
                }
            });
        }
    }

    return (
        <div className="bg-white">
            <div className="pt-6 m-2">

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    {/* Images */}
                    <div
                        className="mb-5 aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            width={500}
                            height={500}
                            src={imageSrc}
                            alt={product.image.alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* product info */}
                    <div className="mt-0 lg:border-r lg:border-gray-200 lg:pr-8">
                        <div>
                            <EditText
                                className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl hover:text-sustail"
                                name="name" type="text" defaultValue={product.name}
                                inputClassName={"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"}
                                inline
                                onSave={onSave}/>
                        </div>
                        <div className="mt-5 lg:border-r lg:border-gray-200 lg:pr-8">
                            <EditTextarea
                                className="w-fit space-y-6 text-base tracking-tight text-gray-900 hover:text-sustail"
                                name="description" rows={3} defaultValue={product.description}
                                inputClassName={"w-fit space-y-6 text-base tracking-tight text-gray-900"}
                                style={{
                                    width: "100%",
                                }}
                                onSave={onSave}/>

                        </div>
                        <div>
                            <EditText
                                className="w-fit space-y-6 text-base tracking-tight text-gray-900 hover:text-sustail"
                                name="src" type="text" defaultValue={product.image.src}
                                inputClassName={"w-fit space-y-6 text-base tracking-tight text-gray-900"}
                                inline
                                onSave={onSave}/>
                        </div>
                        <div className="flex mt-4 mb-4">
                            <label className="block text-sm font-medium text-gray-700 mr-2">
                                Organic?:
                            </label>
                            <input defaultChecked={product.sustainability_score.organic} name="organic" type="checkbox" onChange={event => {
                                onSave({name: 'organic', value: event.target.checked})
                            }}/>
                        </div>
                        <div className="z-5 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h3 className="text-sm font-medium text-gray-900">Transportation method</h3>
                            <Listbox name="transportation_type" value={selectedTransportationType}
                                     onChange={value => {
                                         onSave(
                                             {
                                                 name: "transportation_type",
                                                 value: value
                                             }
                                         )
                                     }}>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="z-5 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span
                                            className="z-5 block truncate">{product.sustainability_score.transportation_type}</span>
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
                                            {transportationMethods.map((method, methodIdx) => (
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
                                                                  <CheckIcon className="z-5 h-5 w-5"
                                                                             aria-hidden="true"/>
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
                            <Listbox value={selectedPackaging} onChange={value => {
                                onSave(
                                    {
                                        name: "packaging",
                                        value: value
                                    }
                                )
                            }}>
                                <div className="z-1 relative mt-1 z-1">
                                    <Listbox.Button
                                        className="z-1 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span
                                            className="z-1 block truncate">{product.sustainability_score.packaging}</span>
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
                                            {packaging.map((method, methodIdx) => (
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
                    </div>
                    {/* product shopping */}
                    <div className="mt-5 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <div className="flex">
                            <EditText className="text-3xl tracking-tight text-gray-900 hover:text-sustail"
                                      name="amount_in_euros" type="text"
                                      defaultValue={product.price.amount_in_euros.toString()}
                                      inputClassName={"text-3xl tracking-tight text-gray-900"}
                                      inline
                                      onSave={onSave}/>
                            <p className="mt-1 text-sm text-gray-500">€</p>
                        </div>
                        {/* Score */}
                        <ScoreWithInfo score={product.sustainability_score.score}/>
                    </div>
                    <div></div>
                    <form className="mt-20 mb-10">
                        <button
                            type="submit"
                            onClick={submitProduct}
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
