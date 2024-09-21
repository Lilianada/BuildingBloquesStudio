import { Container } from "../components/Container";
import {
  CloudIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  SwatchIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";


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
    <section id="services" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold text-cyan-600">Services</h2>
          <p className="mt-2 text-lg text-gray-600">
            We are your one-stop shop for all your business solutions
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-16 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Service key={feature.name} features={feature} />
            ))}
        </ul>
      </Container>
    </section>
  );
}

function ServiceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-cyan-300/10 dark:group-hover:ring-cyan-500">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-cyan-300/10 dark:group-hover:stroke-cyan-500" />
    </div>
  );
}

function ServicePattern({ mouseX, mouseY }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-80"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#bdd1d3] dark:to-[#9bf5fb]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}

function Service({ features }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      key={features.name}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl  transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 cursor-pointer"
    >
      <ServicePattern {...features.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="rounded-2xl border border-gray-200 p-8">
        <ServiceIcon icon={features.icon} />
        <h3 className="mt-6 font-semibold text-gray-900">{features.name}</h3>
        <p className="mt-2 text-gray-700">{features.description}</p>
      </div>
    </div>
  );
}
