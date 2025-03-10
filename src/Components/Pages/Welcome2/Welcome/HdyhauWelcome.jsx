import React, { useState } from 'react';
import { 
  Music, 
  Newspaper, 
  Tv, 
  Youtube, 
  Users, 
  Search, 
  Instagram, 
  MoreHorizontal 
} from 'lucide-react';

// How Did You Hear About Us Component
const HdyhauWelcome = ({ onContinue, onBack, selectedOption, onSelectOption }) => {
  // Use component state if no external state management is provided
  const [localSelectedOption, setLocalSelectedOption] = useState(null);
  
  // Use either the external or local selection state
  const selection = selectedOption || localSelectedOption;
  
  // Handle option selection with callback if provided
  const handleSelect = (optionId) => {
    if (onSelectOption) {
      onSelectOption(optionId);
    } else {
      setLocalSelectedOption(optionId);
    }
  };
  
  // Options with icons and colors
  const options = [
    { id: 'tiktok', name: 'TikTok', Icon: Music, color: 'text-black' },
    { id: 'news', name: 'News/article/blog', Icon: Newspaper, color: 'text-blue-600' },
    { id: 'tv', name: 'TV', Icon: Tv, color: 'text-red-600' },
    { id: 'youtube', name: 'YouTube', Icon: Youtube, color: 'text-red-500' },
    { id: 'friends', name: 'Friends/family', Icon: Users, color: 'text-green-600' },
    { id: 'google', name: 'Google Search', Icon: Search, color: 'text-blue-500' },
    { id: 'social', name: 'Facebook/Instagram', Icon: Instagram, color: 'text-pink-600' },
    { id: 'other', name: 'Other', Icon: MoreHorizontal, color: 'text-purple-600' }
  ];
  
  return (
    <div className="flex flex-col items-center justify-between h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <div className="mb-8 text-center text-xl font-semibold">
          How did you hear about us?
        </div>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          {options.map((option) => (
            <button 
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`
                flex items-center p-4 rounded-lg transition-colors
                ${selection === option.id 
                  ? 'bg-green-200 border border-gray-300' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'}
              `}
            >
              <div className="mr-3">
                <option.Icon className={`w-6 h-6 ${option.color}`} />
              </div>
              
              <span className="text-left">{option.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-2/3 container m-auto flex justify-between pb-6">
        <div className="w-1/3">
          <button 
            onClick={onBack}
            className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors border border-gray-200"
          >
            BACK
          </button>
        </div>
        <div className="w-1/3 flex justify-end">
          <button 
            onClick={onContinue}
            disabled={!selection}
            className={`font-bold py-3 px-8 rounded-full transition-colors ${
              selection 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HdyhauWelcome;