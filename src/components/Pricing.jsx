import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tiers = [
  {
    name: "Starter Kit",
    id: "tier-starter",
    href: "mailto:info@buildingbloques.com",
    price: "$600",
    description: "For Individuals",
    features: [
      "Consultation on project vision and goals",
      "Essential branding elements (logo)",
      "Basic website design and development",
    ],
    mostPopular: false,
  },
  {
    name: "Growth Engine",
    id: "tier-growthEngine",
    href: "mailto:info@buildingbloques.com",
    price: "$2000",
    description: "For Established Businesses",
    features: [
      "Custom software development for specific business needs",
      "Customer relationship management (CRM) system implementation",
      "Ongoing maintenance and support",
    ],
    mostPopular: true,
  },
  {
    name: "Launchpad",
    id: "tier-lean",
    href: "mailto:info@buildingbloques.com",
    price: "$1500",
    description: "For Start-ups",
    features: [
      "Branding package (logo, color palette, fonts)",
      "Professional website design and development",
      "Marketing and social media integration (setup)",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section className="rounded-4xl bg-gray-50 py-20 sm:py-24" id="packages">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold text-cyan-600">Packages</h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you are starting a new project or aiming for rapid growth,
            we have a plan that fits your goals.
          </p>
        </div>
        <div className="isolate mx-auto mt-12 sm:mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-cyan-600/5 ring-2 ring-cyan-600"
                  : "ring-1 ring-gray-300",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-black"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-cyan-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-cyan-600">
                    Popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-900 flex flex-col">
                {tier.description} / Starting at {tier.price}
                {/* <span
                  className='bg-gray-300 text-xs text-gray-600 rounded-md border border-transparenttext-center font-medium px-2 py-1 w-max'
                >
                 Starting at {tier.price}
                </span> */}
              </p>
              <a
                href={`mailto:info@buildingbloques.com?subject=Package Enquiry&body=${encodeURIComponent(
                  `I am interested in this package. Name: ${tier.name}; Price: ${tier.price}`
                )}`}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-cyan-600 text-white shadow-sm hover:bg-cyan-500"
                    : "text-cyan-600 ring-1 ring-inset ring-cyan-200 hover:ring-cyan-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                )}
              >
                Choose Package
              </a>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-900 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-cyan-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
