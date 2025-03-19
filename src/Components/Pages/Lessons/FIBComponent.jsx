import React from "react";
import useSpeechSynthesis from "../../../Hooks/useSpeechSynthesis"; // Ensure this is properly imported
import { Volume, Volume2 } from "lucide-react"; // Ensure icons are imported

const FIBComponent = ({
  question,
  options,
  onOptionSelect,
  selectedOption,
}) => {
  const { speak, speakingId } = useSpeechSynthesis(); // This hook handles the speaking

  // Handle speaking the entire question
  const handleSpeakQuestion = () => {
    speak(question.replace("__", selectedOption || "...")); // Replace blank with selected option or placeholder
  };

  // Split the question text only once and use throughout the component
  const parts = question.split("__");

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4">Complete the sentence:</h2>
      <div className="text-lg mb-6 flex ">
        <button
          className={`ml-2 p-1 rounded-full text-blue-400  transition-colors ${
            speakingId === "question" ? "animate-pulse" : ""
          }`}
          onClick={handleSpeakQuestion}
        >
          {speakingId === "question" ? (
            <Volume2 size={20} className="animate-pulse text-red-600" />
          ) : (
            <Volume className="text-red-600" size={20} />
          )}
        </button>
        <span>{parts[0]}</span>
        <span className="underline text-blue-500 px-2">
          {selectedOption || "___"}
        </span>
        <span>{parts[1]}</span>
      </div>
      <div className="flex justify-center gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-lg border-2 font-semibold ${
              selectedOption === option.text ? "bg-blue-200" : "bg-white"
            }`}
            onClick={() => onOptionSelect(option.text)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FIBComponent;
