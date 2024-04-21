import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "About Us", href: "/about-us" },
  // { name: "Contact Us", href: "/contact-us" },
  // { name: "Careers", href: "/careers" },
];

const mobileNavigation = [
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  // { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">BuildingBloques</span>
            <img className="h-12 w-auto" src={logo} alt="Building bloques creative studio" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact-us"
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
      <Sidebar
        sidebarOpen={mobileMenuOpen}
        setSidebarOpen={setMobileMenuOpen}
        navigation={mobileNavigation}
        />
    </>
  );
}
