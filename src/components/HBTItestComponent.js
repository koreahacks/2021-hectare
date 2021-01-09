import React from "react";

const HBTItestComponent = ({ question, onClickNext }) => {
  return (
    <div id="question-container">
      <div id="question">{`Q${question.id}. ${question.question}`}</div>
      <div
        className="answer-button"
        onClick={() => onClickNext(true)}
      >{`${question.answer1}`}</div>
      <div
        className="answer-button"
        onClick={() => onClickNext(false)}
      >{`${question.answer2}`}</div>
    </div>
  );
};

export default HBTItestComponent;
