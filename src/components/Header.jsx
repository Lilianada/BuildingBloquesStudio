import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

const navigation = [
  { name: 'ABout Us', href: '/about-us' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 border-2 rounded-full border-indigo-500">
              <span className="sr-only">BuildingBloques</span>
              <h4 className='font-bold text-indigo-500 italic text-xl'>BB</h4>
            </Link>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </Link>
            ))}
          </div> */}
          <div className="flex flex-1 justify-end gap-4">
            <Link to="/about-us" className="text-sm font-semibold leading-6 text-white">
              About Us 
              {/* <span aria-hidden="true">&rarr;</span> */}
            </Link>
            <Link to="/contact-us" className="text-sm font-semibold leading-6 text-white">
              Contact Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

  )
}
