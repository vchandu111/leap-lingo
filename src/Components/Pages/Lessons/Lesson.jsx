import React, { useState, useEffect, useRef } from "react";
import Question from './Question'; // Import the MCQ component
import FIBComponent from './FIBComponent'; // Import the FIB component
import Questions from "../../../data/practice.json";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useSpeechSynthesis from "../../../Hooks/useSpeechSynthesis";
import { X, Heart, XCircle, CheckCircle } from "lucide-react";

const Lesson = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [hearts, setHearts] = useState(3);
    const [isChecking, setIsChecking] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const navigate = useNavigate();

    const { speak } = useSpeechSynthesis();
    const questions = Questions.questions;
    const currentQuestion = questions[currentQuestionIndex];
    const progress = (currentQuestionIndex / questions.length) * 100;

    const correctSoundRef = useRef(new Audio("../../../assets/images/audio/success.mp3"));
    const wrongSoundRef = useRef(new Audio("../../../assets/images/audio/wrong.mp3"));

    useEffect(() => {
        correctSoundRef.current = new Audio("../../../assets/images/audio/success.mp3");
        wrongSoundRef.current = new Audio("../../../assets/images/audio/wrong.mp3");
        return () => {
            correctSoundRef.current?.pause();
            wrongSoundRef.current?.pause();
        };
    }, []);

    const handleOptionSelect = (optionId, optionText) => {
        if (!isChecking) {
            setSelectedOption(optionId);
            setShowStatus(false);
            speak(optionText, optionId);
        }
    };

    const handleCheck = () => {
        if (selectedOption === null) return;
        setIsChecking(true);
        const correct = selectedOption === currentQuestion.answer;
        setIsCorrect(correct);
        setShowStatus(true);
        if (correct) {
            correctSoundRef.current.currentTime = 0;
            correctSoundRef.current.play().catch((err) => console.error("Error playing sound:", err));
        } else {
            wrongSoundRef.current.currentTime = 0;
            wrongSoundRef.current.play().catch((err) => console.error("Error playing sound:", err));
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
            toast.success("Practice completed, redirecting to Lessons!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            navigate("/learn");
        }
    };

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
            setTimeout(() => navigate("/learn"), 1500);
        }
    }, [hearts]);

    const renderQuestion = () => {
        switch (currentQuestion.type) {
            case 'MCQ':
                return (
                    <Question
                        question={currentQuestion}
                        options={currentQuestion.options}
                        onOptionSelect={handleOptionSelect}
                        selectedOption={selectedOption}
                        isChecking={isChecking}
                        isCorrect={isCorrect}
                        showStatus={showStatus}
                        onCheck={handleCheck}
                    />
                );
            case 'FIB':
                return (
                    <FIBComponent
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        onOptionSelect={handleOptionSelect}
                        selectedOption={selectedOption}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-between h-full min-h-screen bg-gray-50 text-gray-800 p-4">
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
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {renderQuestion()}

            <div className="w-1/2 flex justify-between mt-8 mb-4 px-4">
                {showStatus ? (
                    <button
                        className={`flex items-center justify-center px-8 py-3 rounded-xl ${isCorrect ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}
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
                        onClick={handleContinue}
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
                        className={`px-8 py-3 rounded-xl ${selectedOption === null ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-green-500 text-white"}`}
                        disabled={selectedOption === null}
                    >
                        CHECK
                    </button>
                )}
            </div>
        </div>
    );
};

export default Lesson;
