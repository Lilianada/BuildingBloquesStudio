import { Card } from "./Card";
import logoExpertTranscript from "../assets/logos/experthelper.png";
import logoFitcreatives from "../assets/logos/Fitcreative-logo.png";
import logoColoring from "../assets/logos/coloringcultures.png";
import { Container } from "./Container";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "ColoringCultures",
    description:
      "An app that allows the user to become the artist of their favorite art pieces and genres.",
    link: { href: "https://coloringculturesweb.netlify.app", label: "coloringcultures.app" },
    logo: logoColoring,
  },
  {
    name: "Expert Transcript Helper",
    description: "Assisting students earn UoPeople credits through Coursera and Sophia Learning courses.",
    link: { href: "https://experttranscripthelpers.com", label: "experttranscripthelpers.com" },
    logo: logoExpertTranscript,
  },
  {
    name: "Fitcreative",
    description:
      "A community of fitness enthusiasts who share their workout routines and progress.",
    link: { href: "https://fitcreatives.vercel.app", label: "fitcreatives.xyz" },
    logo: logoFitcreatives,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="sm:py-32 bg-gray-900 w-full relative isolate py-24">
      <div className="relative isolate -z-10">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-lg font-semibold text-cyan-500">Projects</h2>
              <p className="mt-2 text-lg text-gray-300">
                A few selection of our most recent projects.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-16">
              {projects.map((project) => (
                <Card as="li" key={project.name}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <img src={project.logo} alt="" className="h-12 w-12 rounded-full" />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link to={project.link.href}>
                      {project.name}
                    </Card.Link>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <Link to={project.link.href} className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </Link>
                </Card>
              ))}
            </ul>
          </Container>
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
    </section>
  );
}
