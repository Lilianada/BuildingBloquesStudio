import { Container } from "../components/Container";
import {
  CloudIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  SwatchIcon,
  TvIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Brand Identity Design",
    description:
      "Create a strong and memorable brand identity with our comprehensive design services",
    icon: PaintBrushIcon,
  },
  {
    name: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces that drive conversions and enhance user satisfaction. ",
    icon: SwatchIcon,
  },
  {
    name: "Web and Mobile App Development",
    description:
      "Our developers specialize in creating scalable, high-performance solutions tailored to your specific needs.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "CRM Systems",
    description:
      "Streamline your customer relationship management with our tailored CRM solutions.",
    icon: TvIcon,
  },
  {
    name: "CMS Setup and Customization",
    description:
      "Manage your website content with ease using our CMS setup and customization services.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Cloud Infrastructure Setup and Management",
    description:
      "Manage your website content with ease using our CMS setup and customization services.",
    icon: CloudIcon,
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold text-cyan-600">Services</h2>
          <p className="mt-2 text-lg text-gray-600">
            We are your One-stop shop for all your business solutions
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-16 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8 text-cyan-600" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
