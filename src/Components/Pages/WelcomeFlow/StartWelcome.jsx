import React, { useState, useEffect } from "react";
import { Book, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useHistory

// Path Selection Component
const PathWelcome = ({
  onContinue,
  onBack,
  selectedOption,
  onSelectOption,
}) => {
  // State to store the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Use component state if no external state management is provided
  const [localSelectedOption, setLocalSelectedOption] = useState(null);

  // Use either the external or local selection state
  const selection = selectedOption || localSelectedOption;
  const navigate = useNavigate(); // Initialize useHistory

  // Fetch selected language from local storage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(JSON.parse(storedLanguage));
    }
  }, []);

  // Handle option selection with callback if provided
  const handleSelect = (option) => {
    if (onSelectOption) {
      onSelectOption(option);
    } else {
      setLocalSelectedOption(option);
    }
  };
    
  const handleContinue = () => {
    if (selection === "intermediate") {
        navigate("/lesson");
    } else {
        navigate("/learning");
    }
  };

  // Path options
  const getPaths = (language) => [
    {
      id: "beginner",
      title: `Learning ${language} for the first time?`,
      subtitle: "Start from scratch!",
      Icon: Book,
      color: "text-green-500",
      img: "../../../../public/assets/images/path-1.svg",
    },
    {
      id: "intermediate",
      title: `Already know some ${language}?`,
      subtitle: "Check your level here!",
      Icon: GraduationCap,
      color: "text-green-500",
      img: "../../../../public/assets/images/path-2.svg",
    },
  ];

  // Get paths based on selected language
  const paths = selectedLanguage ? getPaths(selectedLanguage.language) : [];

  return (
    <div className="flex flex-col items-center justify-between h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 text-center text-2xl font-semibold">
          {selectedLanguage
            ? `Choose your path for ${selectedLanguage.language}`
            : "Choose your path"}
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {paths.map((path) => (
            <button
              key={path.id}
              onClick={() => handleSelect(path.id)}
              className={`
                flex flex-col items-center p-6 rounded-lg text-center transition-colors
                ${
                  selection === path.id
                    ? "bg-green-200 border border-gray-300"
                    : "bg-white hover:bg-gray-50 border border-gray-200"
                }
              `}
            >
              <div className="mb-4">
                {/* <path.Icon className={`w-16 h-16 ${path.color}`} /> */}
                <img src={path.img} className="h-40" alt="" />
              </div>
              <div className="font-semibold mb-2">{path.title}</div>
              <div className="text-gray-500 text-sm">{path.subtitle}</div>
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
            onClick={handleContinue}
            disabled={!selection}
            className={`font-bold py-3 px-8 rounded-full transition-colors ${
              selection
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PathWelcome;
