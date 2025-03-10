import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import languageData from '../../data/lang.json';

const LanguageCarousel = () => {
  const carouselRef = useRef(null);
  const languages = languageData;

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // No loading state needed since we're importing the data directly

  return (
    <div className="w-full py-8 px-4 bg-gray-50 ">
      <div className="max-w-6xl mx-auto container m-auto">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          Choose from {languages.length} languages
        </h2>

        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide py-2 px-8 gap-2 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {languages.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-28 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-3 cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-10 mb-3">
                  {/* Convert flag emoji to a styled div that looks like a flag image */}
                  <div 
                    className="text-3xl flex items-center justify-center w-full h-full overflow-hidden shadow-sm"
                    style={{ 
                      borderRadius: '4px',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                    }}
                  >
                    {item.country_flag}
                  </div>
                </div>
                <div className="text-sm font-medium text-center text-gray-700 line-clamp-1">
                  {item.language}
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageCarousel;