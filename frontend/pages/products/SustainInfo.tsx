import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function PopUpSusInfo() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <button
                        type="button"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-4 lg:right-6"
                        onClick={() => setOpen(false)}
                    >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Sustainability Score</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Calculated for the carbon emissions during Packaging and Transportation process.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 sm:col-span-2 ">Carbon Emissions of this Product</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">20 kg CO2</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 sm:col-span-2">General Emissions of Similar Products</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">50 kg CO2</dd>
                        </div>
                        <hr/>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900 sm:col-span-2">60 % lower</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0">-30 kg CO2</dd>
                        </div>
                        {/* <div className="px-4 py-2 sm:px-6"> */}
                            <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-block rounded-md border border-transparent bg-sustail py-1 px-8 text-center font-medium text-white hover:bg-sustail-dark"
                                    onClick={() => setOpen(false)}
                                >
                                    View Low Emission Options
                                </button>
                                
                            </div>
                        {/* </div> */}
                        </dl>
                    </div>
                </div>
                {/* <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <button
                        type="button"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                        onClick={() => setOpen(false)}
                    >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Low Sustainability Score
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            Carbon Emissions of this Product
                            </p>
                            <p className="text-sm text-gray-500">
                            General Emissions of Similar Products
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-block rounded-md border border-transparent bg-sustail py-3 px-8 text-center font-medium text-white hover:bg-sustail-dark"
                    onClick={() => setOpen(false)}
                  >
                    View Similar Products
                  </button>
                  
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}