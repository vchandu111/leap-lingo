import React from "react";
import Questions from "../../../data/practice.json";
import LessonContent from "./LessonContent";

const Lesson = () => {
  const questions = Questions.questions;

  return <LessonContent questions={questions} />;
};

export default Lesson;
