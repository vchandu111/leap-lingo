import React, { useState } from 'react';
import { 
  Coffee, 
  Clock, 
  Target, 
  Rocket 
} from 'lucide-react';

// Schedule Component
const ScheduleWelcome = ({ onContinue, onBack, selectedOption, onSelectOption }) => {
  // Use component state if no external state management is provided
  const [localSelectedOption, setLocalSelectedOption] = useState(null);
  
  // Use either the external or local selection state
  const selection = selectedOption || localSelectedOption;
  
  // Handle option selection with callback if provided
  const handleSelect = (option) => {
    if (onSelectOption) {
      onSelectOption(option);
    } else {
      setLocalSelectedOption(option);
    }
  };
  
  // Practice schedule options with icons
  const schedules = [
    { name: 'Casual (5 min/day)', Icon: Coffee, color: 'text-blue-500' },
    { name: 'Regular (10 min/day)', Icon: Clock, color: 'text-green-600' },
    { name: 'Serious (15 min/day)', Icon: Target, color: 'text-purple-500' },
    { name: 'Intense (20+ min/day)', Icon: Rocket, color: 'text-red-500' }
  ];
  
  return (
    <div className="flex flex-col items-center justify-between h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 text-center text-xl font-semibold">
          How often do you want to practice?
        </div>
        
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {schedules.map((schedule) => (
            <button 
              key={schedule.name}
              onClick={() => handleSelect(schedule.name)}
              className={`
                flex items-center py-3 px-4 rounded-lg text-left transition-colors
                ${selection === schedule.name 
                  ? 'bg-green-200 border border-gray-300' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'}
              `}
            >
              <div className="mr-3">
                <schedule.Icon className={`w-6 h-6 ${schedule.color}`} />
              </div>
              <span>{schedule.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Back and Continue buttons */}
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

export default ScheduleWelcome;