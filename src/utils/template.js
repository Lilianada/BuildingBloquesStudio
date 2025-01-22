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
      "Firmco is a portfolio management platform designed to simplify portfolio management for both administrators and users. It enables efficient management of activities, tasks, and communication, ensuring a stress-free experience for stakeholders. Firmco has two applications, the admin dashboard and client dashboard.",
    features: [
      {
        title: "For Administrators",
        subContents: [
          {
            heading: "Efficient User Management",
            content: "Effortlessly add, edit, and manage user profiles.",
          },
          {
            heading: "Comprehensive Asset Management",
            content:
              "Easily add, update, and track a diverse range of assets, including bonds, IPOs, and fixed-term deposits.",
          },
          {
            heading: "Real-Time Insights",
            content:
              "Gain valuable insights into portfolio performance with real-time analytics and reporting.",
          },
          {
            heading: "Seamless Communication",
            content:
              "Respond to client inquiries promptly and effectively with the built-in live chat feature.",
          },
        ],
      },
      {
        title: "For Clients",
        subContents: [
          {
            heading: "Personalized Portfolios",
            content:
              "Create and manage customized portfolios tailored to individual needs.",
          },
          {
            heading: "Real-time Tracking",
            content:
              "Monitor portfolio performance and track asset values in real-time.",
          },
          {
            heading: "Intuitive Interface",
            content:
              "Enjoy a user-friendly interface designed for seamless navigation and data visualization.",
          },
          {
            heading: "Secure Transactions",
            content:
              "Conduct secure transactions and manage payments within the platform.",
          },
        ],
      },
    ],
  },

  {
    name: "Showcase",
    price: 50,
    tech: ["React.js"],
    preview: "https://lilydesigned.me/",
    link: "https://lilydesigned.me/",
    img: [ImgFour, portfolio3, portfolio1, portfolio2],
    description:
      "Showcase is a multi-page portfolio template designed to provide a clean and dimple layout to showcase your skills.",
    features: [
      {
        title: "",
        subContents: [
          {
            heading: "Responsive Design",
            content: "Fully optimized for both desktop and mobile views.",
          },
          {
            heading: "Customizable Layout",
            content: "Easily adapt the sections to fit your unique profile.",
          },
          {
            heading: "Skill and Project Showcases",
            content:
              "Dedicated sections for highlighting your technical expertise and achievements.",
          },
          {
            heading: "Contact Section",
            content:
              "Showcase your contact details and professional links, ensuring easy access for employers or collaborators.",
          },
        ],
      },
    ],
  },
  {
    name: "EasyFind",
    price: 150,
    tech: ["Next.js", "Firebase"],
    preview: "https://easy-find-black.vercel.app/",
    link: "https://easy-find-black.vercel.app/",
    img: [ImgTwo, easyFind, easyFind2],
    description:
      "EasyFind is a website for job seekers and companies looking to hire new talent. With EasyFind, jobseekers can access tailored job opportunities, apply directly, and track their applications. For companies, EasyFind offers tools to post job listings, review applications, and ease the hiring process.",
    features: [
      {
        title: "",
        subContents: [
          {
            heading: "Job Listings & Search",
            content:
              "Easily post jobs or search for job openings by skill, title, or company.",
          },
          {
            heading: "Application Tracking",
            content:
              "Seamlessly apply for jobs and track application statuses or manage applicants.",
          },
          {
            heading: "Customizable Profiles",
            content:
              "Build and showcase professional profiles or view detailed company profiles.",
          },
        ],
      },
    ],
  },
  {
    name: "Kompact",
    price: 30,
    tech: ["Next.js"],
    preview: "https://kompact-template.vercel.app/",
    link: "https://kompact-template.vercel.app/",
    img: [ImgThree, kompactmobile],
    description:
      "This minimalistic one-page website serves as a digital business card, perfect for those looking to showcase a brief summary, contact information, and social media or professional links. It’s an ideal solution for freelancers, entrepreneurs, or anyone who wants a simple, easy-to-share personal website.",
    features: [
      {
        title: "",
        subContents: [
          {
            heading: "Simple, One-Page Layout",
            content:
              "A clean and minimalist design to showcase a brief summary and key links.",
          },
          {
            heading: "Customizable Bio Section",
            content:
              "Easily add your personal summary or professional introduction",
          },
          {
            heading: "Links Section",
            content:
              "Provide direct access to your social media profiles, portfolio, or any important external links",
          },
          {
            heading: "Dark & Light Mode",
            content:
              "Switch between light and dark mode for a personalized experience.",
          },
          {
            heading: "Mobile-Responsive Design",
            content:
              "Looks great on both desktop and mobile devices, ensuring your profile is always accessible.",
          },
          {
            heading: "Fast Setup",
            content:
              "Easy to configure and set up, ideal for anyone looking for a simple online presence without the complexity of a full portfolio.",
          },
        ],
      },
    ],
  },
  {
    name: "Canvas",
    price: 30,
    tech: ["Next.js"],
    preview: "https://canvas-template-rmky.vercel.app/",
    link: "https://canvas-template-rmky.vercel.app/",
    img: [ImgFive],
    description:
      "Canvas is an interactive portfolio template that is the perfect blend of functionality and simplicity. It doubles as a website and a portfolio and is easily customizable.",
    features: [
      {
        title: "",
        subContents: [
          {
            heading: "Dual Functionality",
            content:
              "Combines the utility of a website and a resume in one page.",
          },
          {
            heading: "Dark and Light Modes",
            content: "Switch between modes to suit your style.",
          },
          {
            heading: "Blog Section",
            content: "",
          },
          {
            heading: "Projects Showcase",
            content: "",
          },
          {
            heading: "Contact Form",
            content: "",
          },
        ],
      },
    ],
  },
  {
    name: "Quickview",
    price: 50,
    tech: ["Next.js"],
    preview: "https://quickview-template.vercel.app/",
    link: "https://quickview-template.vercel.app/",
    img: [ImgSix],
    description:
      "Quickview is a one page portfolio template that gives your visitors an easy and quick view of your bio, skills, experiences and projects. The desktop view gives your visitor a very good look into your bio, image and profile. It is easily customizable and easy to understand.",
    features: [
      {
        title: "",
        subContents: [
          {
            heading: "Dual Functionality",
            content:
              "Combines the utility of a website and a resume in one page.",
          },
          {
            heading: "Themes",
            content: "Switch between 5 different themes to suit your style.",
          },
          {
            heading: "Projects Showcase",
            content: "",
          },
          {
            heading: "Now section",
            content: "",
          },
          {
            heading: "Contact Form",
            content: "",
          },
        ],
      },
    ],
  },
];
