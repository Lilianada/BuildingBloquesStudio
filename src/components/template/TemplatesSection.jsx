import React from "react";
import { Container } from "../Container";
import { Link } from "react-router-dom";
import { products } from "../../utils/template";

const TemplatesSection = () => {
  return (
    <section className="rounded-4xl bg-gray-50 py-10 sm:py-16" id="packages">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold text-cyan-600">Templates</h2>
        </div>
        <Container>
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16 ">
            {products.map((item, index) => (
              <div
                key={index}
                className="group w-auto flex flex-col gap-4 bg-gray-900  p-4 ring-1  rounded-3xl lg:mx-0 lg:max-w-none lg:items-center xl:gap-x-8 transition-transform duration-500 hover:scale-105 hover:shadow-lg cursor-pointer ring-cyan-800 "
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
        </Container>
      </div>
    </section>
  );
};

export default TemplatesSection;
