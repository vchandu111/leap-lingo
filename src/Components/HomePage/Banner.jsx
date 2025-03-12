import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.webp'; // Import the image

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full flex container m-auto h-screen flex-col md:flex-row items-center justify-center py-16 px-4 gap-8 bg-white">
      {/* Left side with image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-w-md">
          <img 
            src={bannerImage}
            alt="Leap Lingo characters" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Right side with text and buttons */}
      <div className="w-full md:w-1/2 max-w-md flex flex-col items-center md:items-start gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center md:text-left">
          The free, fun, and effective way to learn a language!
        </h2>
        
        <div className="w-full flex flex-col gap-4">
          <button onClick={()=>navigate('/get-started')} className="w-full py-4 px-6 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors">
            GET STARTED
          </button>
          
          <button onClick={()=>navigate('/login')} className="w-full py-4 px-6 bg-white text-blue-500 font-bold border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            I ALREADY HAVE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;