import React from 'react';

const SchoolsSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-white border-t border-b border-gray-200 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side image */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <img 
              src="../../../public/assets/images/schools.svg" 
              alt="Student progress dashboard on laptop"
              className="w-full max-w-sm"
            />
          </div>
          
          {/* Right side content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Leap Lingo for Schools
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Free teacher tools to help students learn languages through the Leap Lingo app, both
              in and out of the classroom.
            </p>
            
            <a 
              href="#" 
              className="inline-block px-6 py-3 text-blue-500 font-bold hover:underline"
            >
              BRING LEAP LINGO TO YOUR CLASSROOM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsSection;