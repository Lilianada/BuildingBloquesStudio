import React, { useRef } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Header from "../components/Header";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE;
  const SERVICE_ID = "service_xunh09d";
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message!");
        }
      );
  };

  return (
    <div className="max-h-screen bg-gray-900">
      <Header />

      <main>
        {/* Contact form */}
        <div className="relative isolate bg-gray-900">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pt-14 lg:static lg:px-8">
              <div className="mx-auto max-w-xl pb-20 pt-24 sm:pt-32 lg:mx-0 lg:max-w-lg lg:py-48">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                  <svg
                    className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                        width={200}
                        height={200}
                        x="100%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                      </pattern>
                    </defs>
                    <svg
                      x="100%"
                      y={-1}
                      className="overflow-visible fill-gray-800/20"
                    >
                      <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth={0}
                      fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                    />
                  </svg>
                  <svg
                    className="absolute -left-56 top-[calc(100%-13rem)] w-[72.1875rem] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                    viewBox="0 0 1155 678"
                    aria-hidden="true"
                  >
                    <path
                      fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                      fillOpacity=".2"
                      d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
                    />
                    <defs>
                      <linearGradient
                        id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                        x1="1155.49"
                        x2="-78.208"
                        y1="677.823"
                        y2="203.355"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4F46E5" />
                        <stop offset={1} stopColor="#80CAFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Make enquiries
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  To learn more about our products and services, or to schedule
                  a consultation, please contact us using the form below.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <BuildingOffice2Icon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      7th floor, Casa Bellissimo Mall
                      <br />
                      Jahi, Abuja 90001
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-white"
                        href="tel:+1 (555) 234-5678"
                      >
                        +234 (810) 018-1416
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-white"
                        href="mailto:info@buildingbloques.com"
                      >
                        info@buildingbloques.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <form
              className="px-6 lg:px-8 lg:pt-14"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="mx-auto max-w-xl pb-24 pt-20 sm:pb-32 lg:mr-0 lg:max-w-lg lg:py-48">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="fname"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lname"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="emailA"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
