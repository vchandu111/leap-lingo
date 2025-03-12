import React, { useState, useEffect } from 'react';
import hiImage from '../../../assets/images/hi.webp';
// Initial Welcome Component (Intro)
const IntroWelcome = ({ onContinue, onBack }) => {
  const [isSpeechBubbleVisible, setIsSpeechBubbleVisible] = useState(false);
  const [isMascotVisible, setIsMascotVisible] = useState(false);

  useEffect(() => {
    // Stagger the appearance of speech bubble and mascot
    const speechBubbleTimer = setTimeout(() => {
      setIsSpeechBubbleVisible(true);
    }, 100);

    const mascotTimer = setTimeout(() => {
      setIsMascotVisible(true);
    }, 500);

    return () => {
      clearTimeout(speechBubbleTimer);
      clearTimeout(mascotTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-screen text-white p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Speech bubble */}
        <div className="relative mb-4">
          <div 
            className={`
              bg-gray-800 rounded-2xl px-6 py-3 text-center
              transition-all duration-500 ease-out
              ${isSpeechBubbleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'}
            `}
          >
            Hi there! I'm Duo!
          </div>
          <div 
            className={`
              absolute w-4 h-4 bg-gray-800 rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
              transition-all duration-500 ease-out
              ${isSpeechBubbleVisible 
                ? 'opacity-100 translate-y-1/2' 
                : 'opacity-0 translate-y-full'}
            `}
          ></div>
        </div>
        
        {/* Mascot - with transition */}
        <div 
          className={`
            flex items-center justify-center relative
            transition-all duration-700 ease-out
            ${isMascotVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'}
          `}
        >
          <img src={hiImage} alt="Duo mascot"/>
        </div>
      </div>
      
      {/* Continue button - always enabled for intro */}
      <div className="w-2/3 container m-auto flex justify-between pb-6">
        {/* No back button on first screen */}
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-end">
          <button 
            onClick={onContinue}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroWelcome;