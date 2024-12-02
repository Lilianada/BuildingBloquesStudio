import React from "react";
import { Link } from "react-router-dom";
import { products } from "../utils/template";
import { Container } from "./Container";

export default function Templates() {
  return (
    <div className="bg-gray-900 w-full relative isolate py-24" id="templates">
      <Container>
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-lg font-semibold text-cyan-600">Templates</h2>
            <p className="mt-2 text-lg text-gray-300">
              Choose from our select templates below.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
            {products.map((item, index) => (
              <div
                key={index}
                className="group w-auto flex flex-col gap-4 bg-white/5 p-4 ring-1 ring-white/10 rounded-3xl lg:mx-0 lg:max-w-none lg:items-center xl:gap-x-8 transition-transform duration-500 hover:scale-105 hover:shadow-lg cursor-pointer hover:ring-cyan-800"
              >
                <img
                  className="h-48 w-full bg-bottom flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:max-w-sm opacity-85 transition-opacity duration-300 group-hover:opacity-100"
                  src={item.img[0]}
                  alt={item.name}
                />
                <div className="w-full flex-auto">
                  <h2 className="text-base md:text-lg font-semibold md:font-bold tracking-tight text-white">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm md:text-base leading-4 md:leading-6 text-gray-300 truncate">
                    {item.description}
                  </p>

                  <div className="mt-4 flex lg:flex-row items-center gap-2 lg:gap-4">
                    <Link
                      to={`/template/${index + 1}`}
                      className="flex gap-2 text-sm font-semibold leading-6 text-cyan-400 transition-colors duration-300 hover:text-cyan-200 cursor-pointer"
                    >
                      Preview <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-2xl sm:text-center grid place-items-center mt-6">
            <Link to="/templates">
              <button
                className="w-40 bg-cyan-600 text-white shadow-sm hover:bg-cyan-500
                mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600
             "
              >
                View more
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
