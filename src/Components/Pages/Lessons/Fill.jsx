import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Fill = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const question = {
    text: 'Él es un _______',
    options: ['manzana', 'tú', 'eres', 'hombre'],
    answer: 'hombre'
  };

  const handleOptionClick = (option) => {
    setSelectedWord(option);
    setIsCorrect(null);
  };

  const handleCheck = () => {
    setIsCorrect(selectedWord === question.answer);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fill in the blank</h1>

      <div className="mb-8">
        <p className="text-xl">
          {question.text.split('_______').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <span className={`mx-2 px-4 py-1 border-b-2 ${selectedWord ? 'border-blue-500' : 'border-gray-300'}`}>
                  {selectedWord}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`px-4 py-2 rounded-full border ${
              selectedWord === option ? 'bg-blue-100 border-blue-500' : 'border-gray-300 hover:border-blue-500'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleCheck}
        disabled={!selectedWord}
        className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
          !selectedWord ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        <Check size={20} />
        Check
      </button>

      {isCorrect !== null && (
        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
          {isCorrect ? (
            <p className="text-green-700 flex items-center gap-2">
              <Check /> Correct!
            </p>
          ) : (
            <p className="text-red-700 flex items-center gap-2">
              <X /> Try again!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Fill;