import React, { useState, useEffect, useRef } from "react";
import Questions from "../../../data/practice.json";
import {
  Heart,
  X,
  Cat,
  User,
  Dog,
  Bird,
  Droplet,
  Wine,
  Cookie,
  Sun,
  Calendar,
  Home,
  Gift,
  Package,
  GripHorizontal,
  HelpCircle,
  CheckCircle,
  XCircle,
  Volume2
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Lesson = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hearts, setHearts] = useState(3);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const navigate = useNavigate();

  // Add refs for the audio elements
  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);
  const textToSpeechRef = useRef(null);

  const questions = Questions.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  // Initialize sound refs
  useEffect(() => {
    correctSoundRef.current = new Audio(
      "../../../../public/assets/images/audio/success.mp3"
    ); // Update with your actual path
    wrongSoundRef.current = new Audio(
      "../../../../public/assets/images/audio/wrong.mp3"
    ); // Update with your actual path

    // Initialize text-to-speech audio element
    textToSpeechRef.current = new Audio();

    return () => {
      // Cleanup function
      if (correctSoundRef.current) {
        correctSoundRef.current.pause();
        correctSoundRef.current.src = "";
      }
      if (wrongSoundRef.current) {
        wrongSoundRef.current.pause();
        wrongSoundRef.current.src = "";
      }
      if (textToSpeechRef.current) {
        textToSpeechRef.current.pause();
        textToSpeechRef.current.src = "";
      }
    };
  }, []);

  // Function to speak the option text
  const speakOptionText = (text) => {
    // Use browser's text-to-speech API
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Text-to-speech not supported in this browser");
      toast.warning("Audio playback not supported in your browser", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleOptionSelect = (optionId, optionText) => {
    if (!isChecking) {
      setSelectedOption(optionId);
      setShowStatus(false);
      
      // Speak the option text when selected
      speakOptionText(optionText);
    }
  };

  const handleCheck = () => {
    if (selectedOption === null) return;

    setIsChecking(true);

    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);
    setShowStatus(true);

    // Play the appropriate sound
    if (correct) {
      correctSoundRef.current.currentTime = 0;
      correctSoundRef.current
        .play()
        .catch((err) => console.error("Error playing sound:", err));
    } else {
      wrongSoundRef.current.currentTime = 0;
      wrongSoundRef.current
        .play()
        .catch((err) => console.error("Error playing sound:", err));
      setHearts(hearts - 1);
    }
  };

  const handleContinue = () => {
    setIsChecking(false);
    setSelectedOption(null);
    setIsCorrect(false);
    setShowStatus(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Lesson completed
      toast.success("Practice completed, redirecting to Lessons!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }); // Reset the lesson for this demo
      navigate("/learning");
    }
  };

  // Get the appropriate Lucide icon component based on icon name
  const getIconComponent = (iconName) => {
    const iconMap = {
      Cat: Cat,
      Dog: Dog,
      Bird: Bird,
      Droplets: Droplet,
      Wine: Wine,
      Bread: Cookie,
      Sun: Sun,
      Heart: Heart,
      Calendar: Calendar,
      Home: Home,
      UserCircle: User,
      Gift: Gift,
      Package: Package,
      Grab: GripHorizontal,
    };

    const IconComponent = iconMap[iconName] || HelpCircle;
    return IconComponent;
  };

  // End the lesson if no hearts left
  useEffect(() => {
    if (hearts <= 0) {
      toast.error("Out of Lives, try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Reset the lesson with a slight delay to allow toast to be seen
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }, [hearts]);

  // Determine which option was correct
  const correctOption = currentQuestion?.options.find(
    (option) => option.id === currentQuestion.answer
  );

  return (
    <div className="flex flex-col items-center justify-between h-full min-h-screen bg-gray-50 text-gray-800 p-4">
      {/* Header with close button, progress bar and hearts */}
      <ToastContainer />

      <div className="w-1/2 container mx-auto flex flex-col items-center mb-8 mt-4">
        <div className="w-full flex justify-between items-center mb-2">
          <button onClick={() => navigate("/")} className="text-gray-500">
            <X size={24} />
          </button>
          <div className="flex items-center">
            <Heart size={20} className="mx-1" fill="#ff2d55" color="#ff2d55" />

            <span className="ml-2">{hearts}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question section */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-lg">
        {/* New word indicator */}

        {/* Question text */}
        <h2 className="text-2xl font-bold mb-12 text-center">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id, option.text)}
              className={`
                flex flex-col items-center justify-center p-6 rounded-xl border-2 bg-white shadow-sm
                ${
                  selectedOption === option.id
                    ? isChecking
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : option.id === currentQuestion.answer
                        ? "border-green-500 bg-green-100"
                        : "border-red-500 bg-red-50"
                      : "border-blue-500"
                    : option.id === currentQuestion.answer && showStatus
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200"
                }
              `}
              disabled={isChecking}
            >
              <div className="text-4xl mb-4 flex items-center justify-center">
                {React.createElement(getIconComponent(option.icon), {
                  size: 48,
                  color:
                    selectedOption === option.id
                      ? isChecking
                        ? isCorrect
                          ? "#10b981"
                          : "#ef4444"
                        : "#3b82f6"
                      : option.id === currentQuestion.answer && showStatus
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

        {/* Bottom buttons */}
        <div className="w-full flex justify-between mt-8 mb-4 px-4">
          {showStatus ? (
            <button
              className={`
                flex items-center justify-center px-8 py-3 rounded-xl
                ${
                  isCorrect
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }
              `}
            >
              {isCorrect ? (
                <>
                  <CheckCircle size={20} className="mr-2" />
                  CORRECT
                </>
              ) : (
                <>
                  <XCircle size={20} className="mr-2" />
                  INCORRECT
                </>
              )}
            </button>
          ) : (
            <button
              className="px-8 py-3 rounded-xl bg-gray-100 text-gray-500 border border-gray-200"
              onClick={() => {
                // Skip functionality if needed
                handleContinue();
              }}
            >
              SKIP
            </button>
          )}

          {showStatus ? (
            <button
              onClick={handleContinue}
              className="px-8 py-3 rounded-xl bg-green-500 text-white"
            >
              CONTINUE
            </button>
          ) : (
            <button
              onClick={handleCheck}
              className={`
                px-8 py-3 rounded-xl
                ${
                  selectedOption === null
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-green-500 text-white"
                }
              `}
              disabled={selectedOption === null}
            >
              CHECK
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;