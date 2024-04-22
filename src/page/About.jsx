import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StartupMission from "../components/StartupMission";
import Services from "../components/Services";
import Team from "../components/Team";

const stats = [
  { label: "Business was founded", value: "2022" },
  { label: "People on the team", value: "10+" },
  { label: "Number of Clients", value: "20+" },
  { label: "Number of Projects", value: "50+" },
];

export default function About() {
  return (
    <div className="bg-gray-900">
      {/* Header */}
      <Header />

      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {" "}
              Why Building Bloques?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Building Bloques was born from a bold vision to empower
              entrepreneurs and businesses to achieve success through
              innovation.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  We started by bridging the gap between ideas and execution in
                  design and technology. Now, we've grown into a comprehensive
                  solution provider, offering a full spectrum of services from
                  business creation to cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <p>
                  We're a passionate team of creatives, strategists, and
                  technologists united by a common goal: turning ideas into
                  reality and propelling businesses forward. We foster a culture
                  of curiosity and collaboration, where diverse perspectives
                  come together to challenge the status quo.
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        <StartupMission />

        <Services />
        
        <Team />

       

      </main>

      <Footer />
    </div>
  );
}
