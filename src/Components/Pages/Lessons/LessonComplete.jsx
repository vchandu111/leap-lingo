import React from "react";
import { useNavigate } from "react-router-dom";

const StatBox = ({ label, value, color }) => (
  <div className={`rounded-2xl p-4 ${color} text-center`}>
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-lg">{label}</div>
  </div>
);

const LessonComplete = ({ stats }) => {
  const navigate = useNavigate();

  const getPerformanceText = (percentage) => {
    if (percentage === 100) return "Amazing";
    if (percentage >= 80) return "Great Job";
    if (percentage >= 60) return "Good";
    return "Keep Practicing";
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-[#ffd700] mb-16">
        Lesson Complete!
      </h1>

      <div className="flex gap-8 mb-16">
        <StatBox
          label="Total XP"
          value={stats.correctAnswers * 2}
          color="bg-[#ffd700] bg-opacity-20 text-[#ffd700]"
        />

        <StatBox
          label="Committed"
          value={stats.timeSpent}
          color="bg-blue-500 bg-opacity-20 text-blue-500"
        />

        <StatBox
          label={getPerformanceText(stats.percentage)}
          value={`${stats.percentage}%`}
          color="bg-green-500 bg-opacity-20 text-green-500"
        />
      </div>

      <button
        onClick={() => navigate("/learn")}
        className="px-8 py-3 bg-blue-500 text-white rounded-xl text-xl hover:bg-blue-600 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default LessonComplete;
