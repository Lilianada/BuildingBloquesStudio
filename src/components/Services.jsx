import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const services = [
  "Brand Identity Design",
  "UI and UX Design",
  "Web and mobile app development",
  "CRM systems",
  "Content Management System (CMS) setup and customization",
  "Cloud infrastructure setup and management",
];

export default function Services() {
  return (
    <div className="relative isolate -z-10 mt-32 sm:mt-40">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <div className="w-full flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Based on our product vision and goals, here's a breakdown of
              potential services offered
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
              {services.map((item) => (
                <li key={item} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <Link
                to="/contact-us"
                className="text-sm font-semibold leading-6 text-indigo-400"
              >
                For custom service <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </div>
  );
}
