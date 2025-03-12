import React from 'react';
import lingoImage from '../../assets/images/lingo.svg';
const LearningIntroSection = () => {
  return (
    <div className="w-full py-12 px-4 bg-white mt-20  border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Mascot image */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              src={lingoImage}
              alt="Leap Lingo Mascot" 
              className="w-32 md:w-40"
            />
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              The world's #1 way to learn a language
            </h2>
            
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Learning with Leap Lingo is fun, and <a href="#" className="text-blue-600 underline">research shows that it works</a>! 
                With quick, bite-sized lessons, you'll earn points and unlock new levels 
                while gaining real-world communication skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider line */}
      <div className="max-w-5xl mx-auto mt-12 border-t border-gray-200"></div>
    </div>
  );
};

export default LearningIntroSection;