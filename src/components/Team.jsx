import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const team = [
  {
    name: "Lilian Okeke",
    role: "Project Manager",
    imageUrl: one,
  },

  {
    name: "Chidalu Anukam",
    role: "Fullstack Developer",
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
    name: "Onuh Sule",
    role: "Brand Strategist",
    imageUrl: two,
  },

  {
    name: "Solomon Charles",
    role: "UI/UX Designer",
    imageUrl: three,
  },
];

  export default function Team() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32" id="team">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-8 lg:px-16 xl:grid-cols-3">
         <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-lg font-semibold text-cyan-600">Meet the team</h2>
              <p className="mt-2 text-lg text-gray-600">
              Our team comprises of skilled professionals with diverse backgrounds and expertise.
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
  