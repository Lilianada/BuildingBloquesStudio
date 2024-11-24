import { Link } from "react-router-dom";
import ImgOne from "../assets/templates/05_Aulab_png.jpeg";
import ImgTwo from "../assets/templates/Easy-find.png";
import ImgThree from "../assets/templates/Kompact-template.jpeg";
import ImgFour from "../assets/templates/Showcase.png";
import ImgFive from "../assets/templates/Canvas-template.png";
import ImgSix from "../assets/templates/Quickview.png";

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
    name: "Quickview",
    price: 50,
    tech: "Next.js",
    preview: "",
    link: "",
    img: ImgSix,
    description: "Coming soon: A single page portfolio template built with next.js."
  },
];

  
  export default function ProductList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">All Available Templates</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                  <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      View Product
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                  <h3>
                    <Link to={`/marketplace/product/overview/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  