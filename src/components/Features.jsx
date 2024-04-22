import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Foundational Tech Stack for Startups",
    description:
      "We focus on providing the essential tech building blocks that new startups need to get off the ground. ",
    href: "/contact-us",
    icon: CheckBadgeIcon,
  },
  {
    name: "Growth Tools for Established Businesses",
    description:
      "We offer solutions that existing businesses can leverage to streamline operations and improve customer interactions. ",
    href: "/contact-us",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Education & Training",
    description:
      "We offer workshops, training sessions, mentorship, and internships to nurture the next generation of innovators.",
    href: "/contact-us",
    icon: AcademicCapIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Product Vision
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              In today's dynamic business landscape, navigating the journey from concept to success can feel overwhelming. But what if you had a trusted partner by your side, offering a comprehensive suite of services designed to empower your entrepreneurial spirit? 
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
