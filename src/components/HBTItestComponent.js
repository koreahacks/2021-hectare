import React from "react";

const HBTItestComponent = ({ question, onClickNext }) => {
  return (
    <div id="question-container">
      <div id="question-number">{`Q${question.id}`}</div>
      <div id="question">{`${question.question}`}</div>
      <div
        className="answer-button"
        onClick={() => onClickNext(question.answer1.type)}
      >
        <span>{`${question.answer1.answer}`}</span>
      </div>
      <div
        className="answer-button"
        onClick={() => onClickNext(question.answer2.type)}
      >
        <span>{`${question.answer2.answer}`}</span>
      </div>
    </div>
  );
};

export default HBTItestComponent;
