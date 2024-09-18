import React from "react";
import { Link } from "react-router-dom";
import ImgOne from "../assets/templates/05_Aulab_png.jpeg";
import ImgTwo from "../assets/templates/Brush-illustrations.jpeg";
import ImgThree from "../assets/templates/Coinview.jpeg";
import ImgFour from "../assets/templates/Dialer_ Recents.jpeg";
import ImgFive from "../assets/templates/Mufidul✦.jpeg";
import ImgSix from "../assets/templates/SuperHello.jpeg";

const products = [
  {
    name: "Kudi",
    price: 150,
    tech: "Next.js, Firebase",
    preview: "",
    link: "",
    img: ImgOne,
    description: "A finance management template built with next.js."
  },
  
  {
    name: "EasyFind",
    price: 30,
    tech: "Next.js, Firebase",
    preview: "",
    link: "",
    img: ImgTwo,
    description: "A job finders platform template built with next.js."
  },
  {
    name: "Kompact",
    price: 30,
    tech: "React.js",
    preview: "",
    link: "",
    img: ImgThree,
    description: "A finance management template built with next.js."
  },
  {
    name: "Canvas",
    price: 30,
    tech: "React.js",
    preview: "",
    link: "",
    img: ImgFour,
    description: "A simple one-page portfolio template built with react.js."
  },
  {
    name: "Quickshow",
    price: 30,
    tech: "React.js",
    preview: "",
    link: "",
    img: ImgFive,
    description: "A simple one-page portfolio template built with react.js."
  },
  {
    name: "Klark",
    price: 500,
    tech: "Next.js, Node.js",
    preview: "",
    link: "",
    img: ImgSix,
    description: "A business management template built with next.js."
  },
];

export default function Templates() {
  return (
    <div className="bg-gray-900 w-full relative isolate py-24" id="templates">
        <div className="relative isolate -z-10">
          <div className="mx-auto max-w-7xl sm:px-8 lg:px-20">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-lg font-semibold text-cyan-600">Templates</h2>
              <p className="mt-2 text-lg text-gray-300">
                We have ready to use javascript templates for you to buy.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="mx-auto flex max-w-2xl flex-col gap-4 bg-white/5 px-4 py-4 ring-1 ring-white/10 sm:rounded-3xl sm:p-6 lg:mx-0 lg:max-w-none lg:items-center  xl:gap-x-8"
                >
                  <img
                    className="h-40 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:max-w-sm opacity-85"
                    src={item.img}
                    alt=""
                  />
                  <div className="w-full flex-auto">
                    <h2 className="text-lg font-bold tracking-tight text-white">
                      {item.name}
                    </h2>
                    <p className="text-base leading-6 text-gray-300">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-6">
                      <button className="bg-gray-300 py-1 px-4 rounded-md text-gray-900 font-semibold text-sm">
                        Buy template
                      </button>
                      <Link
                        to={item.preview}
                        className="text-sm font-semibold leading-6 text-cyan-400"
                      >
                        Live preview <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        </div>
    </div>
  );
}
