import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

const navigation = {
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function StoreNavigation() {
  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <Link to="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">NGN</span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-gray-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get 10% off your first order.
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>


              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/sign-in" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link to="/sign-up" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <Link to="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <span className="ml-3 block text-sm font-medium">NGN</span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link to="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button onClick={() => setOpenCart(true)} className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
          
        {/* Cart */}
        <ShoppingCart open={openCart} setOpen={setOpenCart} />                                  
    </div>
  )
}
