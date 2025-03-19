import React from 'react';
import { getIconComponent } from './IconUtlity'; // Assume you extract the getIconComponent function too.

const Question = ({ question, onOptionSelect, onCheck, selectedOption, isChecking, isCorrect, showStatus }) => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-12 text-center">
                {question.question}
            </h2>
            <div className="grid grid-cols-3 gap-4 w-full">
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onOptionSelect(option.id, option.text)}
                        className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 bg-white shadow-sm
                            ${selectedOption === option.id
                                ? isChecking
                                    ? isCorrect
                                        ? "border-green-500 bg-green-50"
                                        : option.id === question.answer
                                        ? "border-green-500 bg-green-200"
                                        : "border-red-500 bg-red-50"
                                    : "border-blue-500"
                                : option.id === question.answer && showStatus
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200"
                            }`}
                        disabled={isChecking}
                    >
                        <div className="text-4xl mb-4 flex items-center justify-center">
                            {React.createElement(getIconComponent(option.icon), {
                                size: 48,
                                color: selectedOption === option.id
                                    ? isChecking
                                        ? isCorrect
                                            ? "#10b981"
                                            : "#ef4444"
                                        : "#3b82f6"
                                    : option.id === question.answer && showStatus
                                    ? "#10b981"
                                    : "#6b7280",
                            })}
                        </div>
                        <span className="text-sm">{option.text}</span>
                        <div className="w-6 h-6 rounded-full bg-gray-100 mt-2 flex items-center justify-center text-xs text-gray-700 border border-gray-200">
                            {option.id}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
