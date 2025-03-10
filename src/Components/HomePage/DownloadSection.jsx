import React from 'react';
import { Apple, Play } from 'lucide-react';

const DownloadSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Learn anytime, anywhere.
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Make your breaks and commutes more productive with our iPhone and Android apps.
              Download them and see why Apple and Google gave us their highest accolades.
            </p>
          </div>
          
          {/* Right side with buttons */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store button */}
              <a 
                href="#" 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Apple className="w-6 h-6 text-gray-800" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              
              {/* Google Play button */}
              <a 
                href="#" 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Play className="w-6 h-6 text-green-500" fill="currentColor" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;