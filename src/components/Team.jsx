import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const team = [
  {
    name: "Lilian Okeke",
    role: "Co-Founder / CEO",
    imageUrl: one,
  },

  {
    name: "Chidalu Anukam",
    role: "Lead Developer",
    imageUrl: four,
  },

  {
    name: "Bridget Amana",
    role: "Frontend Developer",
    imageUrl: four,
  },

  {
    name: "Elizabeth Afolabi",
    role: "Frontend Developer",
    imageUrl: four,
  },

  {
    name: "Grace John",
    role: "Backend Developer",
    imageUrl: four,
  },

  {
    name: "Samuel Johnson",
    role: "Backend Developer",
    imageUrl: three,
  },

  {
    name: "Onuh Sule",
    role: "Brand Strategist",
    imageUrl: two,
  },

  {
    name: "Chidinma Nwankwo",
    role: "UI/UX Designer",
    imageUrl: one,
  },

  {
    name: "Chinonso Okeke",
    role: "UI/UX Designer",
    imageUrl: one,
  },

  {
    name: "Steph Charles",
    role: "General Manager",
    imageUrl: one,
  
  }
];

  
  export default function Team() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2">
          {team.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-4">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-cyan-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
  