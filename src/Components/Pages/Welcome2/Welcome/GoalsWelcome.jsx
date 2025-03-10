import React, { useState } from 'react';
import { 
  Plane, 
  GraduationCap, 
  Briefcase, 
  Brain, 
  Globe, 
  Users 
} from 'lucide-react';

// Goals Component
const GoalsWelcome = ({ onContinue, onBack, selectedOption, onSelectOption }) => {
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
  
  // Learning goal options with icons
  const goals = [
    { name: 'Travel preparation', Icon: Plane, color: 'text-blue-500' },
    { name: 'School requirement', Icon: GraduationCap, color: 'text-green-600' },
    { name: 'Professional development', Icon: Briefcase, color: 'text-purple-500' },
    { name: 'Brain training', Icon: Brain, color: 'text-red-500' },
    { name: 'Cultural interest', Icon: Globe, color: 'text-yellow-600' },
    { name: 'Family connection', Icon: Users, color: 'text-pink-500' }
  ];
  
  return (
    <div className="flex flex-col items-center justify-between h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 text-center text-xl font-semibold">
          What are your language learning goals?
        </div>
        
        <div className="grid grid-cols-2 gap-8 w-full ">
          {goals.map((goal) => (
            <button 
              key={goal.name}
              onClick={() => handleSelect(goal.name)}
              className={`
                flex items-center py-3 px-4 rounded-lg text-left transition-colors
                ${selection === goal.name 
                  ? 'bg-green-200 border border-gray-300' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'}
              `}
            >
              <div className="mr-3">
                <goal.Icon className={`w-6 h-6 ${goal.color}`} />
              </div>
              <span>{goal.name}</span>
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

export default GoalsWelcome;