import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Contact us", to: "/contact-us" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BuildingBloques</span>
            <img
              className="h-12 w-auto"
              src={logo}
              alt="Building bloques creative studio"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
        {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={classNames(
                "text-sm font-semibold leading-6",
                location.pathname === item.to
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400",
              )}
            >
              {item.name} <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <h3 className="text-sm font-semibold leading-6 text-white">
            Building Bloques
          </h3>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {navigation.map((item) => (
            <Link
            key={item.to}
            to={item.to}
            className={classNames(
              "text-sm font-semibold leading-6",
              location.pathname === item.to
                ? "text-cyan-400"
                : "text-white hover:text-cyan-400",
            )}
          >
            {item.name} <span aria-hidden="true">&rarr;</span>
          </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
