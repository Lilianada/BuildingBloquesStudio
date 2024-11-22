import React from "react";
import { Link } from "react-router-dom";
import ImgOne from "../assets/templates/05_Aulab_png.jpeg";
import ImgTwo from "../assets/templates/Brush-illustrations.jpeg";
import ImgThree from "../assets/templates/Kompact-template.jpeg";
import ImgFour from "../assets/templates/Showcase.png";
import ImgFive from "../assets/templates/Canvas-template.png";
import ImgSix from "../assets/templates/SuperHello.jpeg";
import { Container } from "./Container";

const products = [
  {
    name: "Klark",
    price: 150,
    tech: "Next.js, Firebase",
    preview: "",
    link: "",
    img: ImgOne,
    description: "Coming soon: A HR management template built with next.js."
  },
  
  {
    name: "EasyFind",
    price: 150,
    tech: "Next.js, Firebase",
    preview: "https://easy-find-black.vercel.app/",
    link: "https://easy-find-black.vercel.app/",
    img: ImgTwo,
    description: "A job finders platform template built with next.js."
  },
  {
    name: "Kompact",
    price: 30,
    tech: "Next.js",
    preview: "https://kompact-template.vercel.app/",
    link: "https://kompact-template.vercel.app/",
    img: ImgThree,
    description: "A single page portfolio template built with next.js."
  },
  {
    name: "Canvas",
    price: 30,
    tech: "Next.js",
    preview: "https://canvas-template-rmky.vercel.app/",
    link: "https://canvas-template-rmky.vercel.app/",
    img: ImgFive,
    description: "A simple one-page portfolio template built with next.js."
  },
  {
    name: "Showcase",
    price: 50,
    tech: "React.js",
    preview: "https://lilydesigned.me/",
    link: "https://lilydesigned.me/",
    img: ImgFour,
    description: "A multi-page portfolio template built with react.js."
  },
  {
    name: "Quickshow",
    price: 50,
    tech: "Next.js",
    preview: "",
    link: "",
    img: ImgSix,
    description: "Coming soon: A single page portfolio template built with next.js."
  },
];

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
                  className="group mx-auto flex max-w-2xl flex-col gap-4 bg-white/5 px-4 py-4 ring-1 ring-white/10 rounded-3xl sm:p-6 lg:mx-0 lg:max-w-none lg:items-center xl:gap-x-8 transition-transform duration-500 hover:scale-105 hover:shadow-lg cursor-pointer hover:ring-cyan-800"
                >
                  <img
                    className="h-48 w-full bg-bottom flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:max-w-sm opacity-85 transition-opacity duration-300 group-hover:opacity-100"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="w-full flex-auto">
                    <h2 className="text-base md:text-lg font-semibold md:font-bold tracking-tight text-white">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm md:text-base leading-4 md:leading-6 text-gray-300">
                      {item.description}
                    </p>

                    <div className="mt-4 flex lg:flex-row items-center gap-2 lg:gap-4">
                      <button className="bg-gray-300 py-2 px-4 rounded-md text-gray-900 font-semibold text-sm transition-colors duration-300 hover:bg-gray-400 hover:text-cyan-700 cursor-pointer">
                        Buy template
                      </button>
                      <Link
                        to={item.preview}
                        target="_blank"
                        className="flex gap-2 text-sm font-semibold leading-6 text-cyan-400 transition-colors duration-300 hover:text-cyan-200 cursor-pointer"
                      >
                        Live preview <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </Container>
    </div>
  );
}
