import React from 'react';
import {
  HandRaisedIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const values = [
  {
    name: "Cultivating Innovation.",
    description:
      "Fostering creative problem-solving and cutting-edge solutions.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Building Strong Foundations.",
    description:
      "Guiding entrepreneurs through business creation, strategy, and exit planning.",
    icon: HandRaisedIcon,
  },
  {
    name: "Leveraging Technology.",
    description:
      "Utilizing technology to optimize operations and enhance brand experiences.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Fostering Collaboration.",
    description:
      "Working hand-in-hand with clients to turn their visions into reality.",
    icon: UserGroupIcon,
  },
];

export default function StartupMission() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Our Start-up Mission
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Our mission is to collaborate with and grow organisations, brands
        and people by empowering them with the tools and strategies to
        launch, grow, and exit successful businesses. We achieve this by:
      </p>
    </div>
    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
      {values.map((value) => (
        <div key={value.name} className="relative pl-9">
          <dt className="inline font-semibold text-white">
            <value.icon
              className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
              aria-hidden="true"
            />
            {value.name}
          </dt>{" "}
          <dd className="inline">{value.description}</dd>
        </div>
      ))}
    </dl>
  </div>
  )
}
