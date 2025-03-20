import React from "react";
import { useParams } from "react-router-dom";
import LessonContent from "../../Lessons/LessonContent";
import unitQuizData from "../../../../data/unitQuiz.json";

const UnitPractice = () => {
  const { unitId } = useParams();

  // Find the unit data by matching the id
  const unitData = Object.values(unitQuizData).find(
    (unit) => unit.id === parseInt(unitId)
  );

  const unitQuestions = unitData?.questions;

  // Add some debugging logs
  console.log("Unit ID:", unitId);
  console.log("Unit Data:", unitData);
  console.log("Unit Questions:", unitQuestions);

  if (!unitQuestions) {
    return <div>No questions found for this unit</div>;
  }

  return <LessonContent questions={unitQuestions} />;
};

export default UnitPractice;
