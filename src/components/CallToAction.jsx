import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative isolate grid place-items-center overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 className="max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
            Schedule a free consultation.
          </h2>
          <p className="mx-auto mmax-w-2xl mt-4 text-lg text-center leading-8 text-gray-300">
            Learn more about our packages, get custom services, or ask any
            questions. We're here to help.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact-us"
              className="text-center flex-none w-60 rounded-md bg-white px-4 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a call
            </Link>
          </div>
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
      </div>
    </div>
  );
}
