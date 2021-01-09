import React from "react";

const HBTItestComponent = ({ question, onClickNext }) => {
  return (
    <div id="question-container">
      <div id="question-number">{`Q${question.id}`}</div>
      <div id="question">{`${question.question}`}</div>
      <div className="answer-button" onClick={() => onClickNext(true)}>
        <span>{`${question.answer1}`}</span>
      </div>
      <div className="answer-button" onClick={() => onClickNext(false)}>
        <span>{`${question.answer2}`}</span>
      </div>
    </div>
  );
};

export default HBTItestComponent;
