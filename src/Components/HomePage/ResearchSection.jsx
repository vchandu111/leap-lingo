import React from "react";

const ResearchSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side content - keeping the order reversed from the schools section */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="../../../public/assets/images/div.svg"
              alt="Leap Lingo mascot with chart"
              className="w-full max-w-xs"
            />
          </div>
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Effective and efficient courses
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Our courses effectively and efficiently teach reading, listening,
              and speaking skills. Check out our latest research!
            </p>

            <a
              href="#"
              className="inline-block px-6 py-3 text-blue-500 font-bold hover:underline"
            >
              LEARN MORE ABOUT OUR RESEARCH
            </a>
          </div>

          {/* Right side image */}
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
