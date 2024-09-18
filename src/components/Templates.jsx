import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/framerBg.svg";

const products = [
  {
    name: "Kudi",
    price: 150,
    tech: "Next.js, Firebase",
    preview: "",
    link: "",
    img: Img,
    description: "A finance management template built with next.js that can be used for all your business finances management."
  },
  {
    name: "Klark",
    price: 500,
    tech: "Next.js, Node.js",
    preview: "",
    link: "",
    img: Img,
    description: "A finance management template built with next.js that can be used for all your business finances management."
  },
  {
    name: "Kompact",
    price: 30,
    tech: "React.js",
    preview: "",
    link: "",
    img: Img,
    description: "A finance management template built with next.js that can be used for all your business finances management."
  },
  {
    name: "EasyFind",
    price: 30,
    tech: "Next.js, Firebase",
    preview: "",
    link: "",
    img: Img,
    description: "A finance management template built with next.js that can be used for all your business finances management."
  },
  {
    name: "Canvas",
    price: 30,
    tech: "React.js",
    preview: "",
    link: "",
    img: Img,
    description: "A finance management template built with next.js that can be used for all your business finances management."
  },
];

export default function Templates() {
  return (
    <div className="bg-gray-900 w-full relative isolate py-24">
      <div className="relative isolate -z-10">
        <div className="mx-auto max-w-7xl sm:px-8 lg:px-20">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-lg font-semibold text-cyan-600">Templates</h2>
            <p className="mt-2 text-lg text-gray-300">
              We have already made templates for you to choose from.
            </p>
          </div>
          {products.map((item, index) => (
            <div
              key={index}
              className="mx-auto mt-16 flex max-w-2xl flex-col gap-12 bg-white/5 px-6 py-12 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-12 xl:gap-x-16 xl:px-16"
            >
              <img
                className="h-60 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:max-w-sm opacity-85"
                src={item.img}
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.name}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {item.description}
                </p>

                <div className="mt-10 flex items-center gap-8">
                  <button className="bg-gray-300 py-1 px-4 rounded-md">
                    Buy template
                  </button>
                  <Link
                    to={item.preview}
                    className="text-sm font-semibold leading-6 text-cyan-400"
                  >
                    Live Preview <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
}
