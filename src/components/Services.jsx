import React from 'react'
  
const features = [
    {
      name: 'Brand Identity Design',
      description: 'Create a strong and memorable brand identity with our comprehensive design services',
      icon: 1,
    },
    {
      name: 'UI/UX Design',
      description: 'Design intuitive and engaging user interfaces that drive conversions and enhance user satisfaction. ',
      icon: 2,
    },
    {
      name: 'Web and Mobile App Development',
      description: 'Our developers specialize in creating scalable, high-performance solutions tailored to your specific needs.',
      icon: 3,
    },
    {
      name: 'CRM Systems',
      description: 'Streamline your customer relationship management with our tailored CRM solutions.',
      icon: 4,
    },
    {
      name: 'CMS Setup and Customization',
      description: 'Manage your website content with ease using our CMS setup and customization services.',
      icon: 5,
    },
  ];
  
  export default function Services() {
    return (
      <div className="relative bg-white py-24 sm:py-32 lg:py-36" id='services'>
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-cyan-600">Services Offered</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          One-stop shop for all your business solutions
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Based on our product vision and goals, here's a breakdown of services offered
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:flex md:flex-wrap md:justify-center lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 md:w-[336px] md:h-[232px]">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-cyan-500 p-3 shadow-lg text-white text-2xl font-medium px-6">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  