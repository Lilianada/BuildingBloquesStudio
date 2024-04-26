import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BackToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <div className="fixed bottom-8 right-8 sm:right-14 lg:right-32 xl:right-8 z-20">
          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold p-3 rounded-full cursor-pointer shadow-lg hover:shadow transition-shadow duration-300 ease-in-out animate-bounce"
            onClick={goToTop}
            aria-label="Back to Top"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
}
