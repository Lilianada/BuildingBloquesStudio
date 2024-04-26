import { Link } from "react-router-dom";
import Backdrop from "../assets/framerBg.svg";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate overflow-hidden pt-14">
        {/* <img
          src={Backdrop}
          alt="Backdrop"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
         */}
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
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Research / Design / Technology / Innovation
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
              Building Bloques
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 px-4">
              {/* We are a comprehensive solution provider, offering a full spectrum of services from business creation to cutting-edge technology solutions. */}
              Bridging the gap between ideas and execution in branding, design,
              and technology by combining technical expertise with digital
              innovation to craft custom solutions that not only launch your
              brand but also fuel its growth.
              {/* Bridging the gap between imagination and reality by empowering individuals and businesses to bring their innovative concepts to life. */}
              {/* Your one-stop shop for everything you need to bring your brand to life and propel your business forward. We combine technical expertise with digital innovation to craft custom solutions that not only launch your brand but also fuel its growth. */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact-us"
                className="text-sm font-semibold leading-6 text-cyan-500"
              >
                Let's work together <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
