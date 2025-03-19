import React, { useState } from 'react';

const Choose = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const question = {
    prompt: "Write this in English",
    audio: {
      text: "Él eres un niño.",
      url: "/audio/sample.mp3"
    },
    options: ["is", "woman", "boy", "He", "it", "a", "eats", "milk"],
    correctAnswer: ["He", "is", "a", "boy"]
  };

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
    setIsCorrect(null);
  };

  const handleCheck = () => {
    const isAnswerCorrect = selectedWords.length === question.correctAnswer.length &&
      selectedWords.every((word, index) => word === question.correctAnswer[index]);
    setIsCorrect(isAnswerCorrect);
  };

  const handleClear = () => {
    setSelectedWords([]);
    setIsCorrect(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{question.prompt}</h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-center">
        <button className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6v12M6 12h12"></path>
          </svg>
        </button>
        <span>{question.audio.text}</span>
      </div>

      <div className="min-h-[100px] bg-gray-50 p-4 rounded-lg mb-6 flex flex-wrap gap-2">
        {selectedWords.map((word, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 rounded-full">
            {word}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {question.options.map((word) => (
          <button
            key={word}
            onClick={() => handleWordClick(word)}
            className={`px-4 py-2 rounded-full border 
              ${selectedWords.includes(word) ? 'bg-blue-100 border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCheck}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          disabled={selectedWords.length === 0}
        >
          Check
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          disabled={selectedWords.length === 0}
        >
          Clear
        </button>
      </div>

      {isCorrect !== null && (
        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {isCorrect ? (
            <p>Correct! You got it right.</p>
          ) : (
            <p>Try again! The correct answer is: {question.correctAnswer.join(', ')}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Choose