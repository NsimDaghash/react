
import React from "react";
import QuizTitle from "./quizTitle";
import QuizInput from "./quizinput";
import Question from "./quizquestion";
import "./style.css";
const Quiz = () => {
  return (
    <div className="Quiz">
    <div class="QuizTitle">How Do You Like Front End? </div>
    <div className="Q1">
      <div class="Q1Title"> How Much You Love Front End? </div>
      <input class="Q1Input" type="range" />
    </div>
    <div className="Q2">
      <div class="Q2Title">What is your favorite front end feature? </div>
      <input class="Q2Input" type="text" />
    </div>
  </div>
  );
};

export default Quiz;

/*
const Box4 = () => {
    return (
      <div className={"box4"}>
      </div>
    );
  };
/*
export default Box1;
import React from "react";
import Question from "./Question";
import QuizTitle from "./QuizTitle";
import QuizInput from "./QuizInput";
import "./style.css";

const Quiz = () => {
  return (
    <>
      <div className="quiz">
        <QuizTitle title="How Do You Like Front End?" />
        <div className="Q1">
          <Question Quiz="How Much You Love Front End" />
          <QuizInput type="range" />
        </div>
        <div className="Q2">
          <Question Quiz="What is your favorite front end feature?" />
          <QuizInput type="text" />
        </div>
      </div>
    </>
  );
};
*/
