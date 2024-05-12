import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, MegaphoneIcon } from "@heroicons/react/24/outline";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative isolate items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 rounded-lg shadow-lg ">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between w-full">
            <MegaphoneIcon
              className="h-5 w-5 text-cyan-600 mr-2"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 text-gray-900">
              <Link to="#">
                <strong className="font-semibold">Big news!</strong>
                <svg
                  viewBox="0 0 2 2"
                  className="mx-2 inline h-0.5 w-0.5 fill-current"
                  aria-hidden="true"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                We're happy to announce that our marketplace will be launching
                soon. Stay tuned for more details.
              </Link>
            </p>
            <div className="flex flex-1 justify-end">
              <button
                type="button"
                className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                onClick={handleDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon
                  className="h-5 w-5 text-gray-900"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
