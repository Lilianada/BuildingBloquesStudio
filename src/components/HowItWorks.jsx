import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Choose Your Package',
      description: 'Explore our packages to find the best fit for your project goals or schedule a free consultation with our experts.',
      icon:1,
    },
    {
      name: 'Tailored Solutions',
      description: 'Depending on your chosen package, we\'ll craft solutions that bring your visions, goals and projects to life.',
      icon: 2,
    },
    {
      name: 'Seamless Launch',
      description: 'We\'\ll revise the solution until you are 100% satisfied, and ensure a smooth launch for your project.',
      icon: 3,
    },
  ]
  
  export default function HowItWorks() {
    return (
      <div className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-indigo-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          One-stop shop for all your business solutions
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          We've streamlined our process into three simple steps to help you bring your ideas to life:
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg text-white text-2xl font-medium px-6">
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
  