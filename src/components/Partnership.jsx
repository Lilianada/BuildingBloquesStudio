import React from 'react';
import { Link } from "react-router-dom";

export default function Partnership() {
  return (
    <div className="relative isolate -z-10 mt-32 sm:mt-40">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
        
        <div className="w-full flex-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Become a Partner
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are always looking for partners who share our vision and
            values. <br/>If you are passionate about innovation and growth,
            let's work together to build a better future.
          </p>
          
          <div className="mt-10 flex">
            <Link
              to="/contact-us"
              className="text-sm font-semibold leading-6 text-indigo-400"
            >
              Send us a message <span aria-hidden="true">&rarr;</span>
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
  )
}
