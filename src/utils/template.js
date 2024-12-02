import ImgOne from "../assets/templates/Firmco.png";
import ImgTwo from "../assets/templates/Easy-find.png";
import ImgThree from "../assets/templates/Kompact-template.jpeg";
import ImgFour from "../assets/templates/Showcase.png";
import ImgFive from "../assets/templates/Canvas-template.png";
import ImgSix from "../assets/templates/Quickview.png";

// firmco
import firmcoImg from "../assets/templates/firmco2.jpg";
import firmcoImg2 from "../assets/templates/firmco3.png";
// portfolio
import portfolio1 from "../assets/templates/portfolio1.png";
import portfolio2 from "../assets/templates/portfolio2.png";
import portfolio3 from "../assets/templates/portfolio3.png";

// easy find
import easyFind from "../assets/templates/easyFind1.png";
import easyFind2 from "../assets/templates/easyFind2.png";

import kompactmobile from "../assets/templates/kompactmobile.png";

export const products = [
  {
    name: "Firmco",
    price: 150,
    tech: ["React.js", "Firebase"],
    preview: "https://firmco-admin.vercel.app/",
    link: "https://firmco-admin.vercel.app/",
    img: [ImgOne, firmcoImg, firmcoImg2],
    description:
      "A portfolio management platform (admin dashbord and customer dashboard) built with React.js and Firebase",
  },

  {
    name: "Showcase",
    price: 50,
    tech: ["React.js"],
    preview: "https://lilydesigned.me/",
    link: "https://lilydesigned.me/",
    img: [ImgFour, portfolio3, portfolio1, portfolio2],
    description: "A multi-page portfolio template built with React.js.",
  },
  {
    name: "EasyFind",
    price: 150,
    tech: ["Next.js", "Firebase"],
    preview: "https://easy-find-black.vercel.app/",
    link: "https://easy-find-black.vercel.app/",
    img: [ImgTwo, easyFind, easyFind2],
    description: "A job finders platform template built with Next.js.",
  },
  {
    name: "Kompact",
    price: 30,
    tech: ["Next.js"],
    preview: "https://kompact-template.vercel.app/",
    link: "https://kompact-template.vercel.app/",
    img: [ImgThree, kompactmobile],
    description: "A single page portfolio template built with Next.js.",
  },
  {
    name: "Canvas",
    price: 30,
    tech: ["Next.js"],
    preview: "https://canvas-template-rmky.vercel.app/",
    link: "https://canvas-template-rmky.vercel.app/",
    img: [ImgFive],
    description: "A simple one-page portfolio template built with next.js.",
  },
  {
    name: "Quickview",
    price: 50,
    tech: ["Next.js"],
    preview: "",
    link: "",
    img: [ImgSix],
    description:
      "Coming soon: A single page portfolio template built with Next.js.",
  },
];
