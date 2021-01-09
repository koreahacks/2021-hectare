import React from "react";

const HBTItestComponent = ({ question, onClickNext }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style = "background: #f7f7f7";
  }
  return (
    <div id="question-container">
      <div id="question-number">{`Q${question.id}`}</div>
      <div id="question">{`${question.question}`}</div>
      <div
        className="answer-button"
        onClick={() => onClickNext(question.answer1.type)}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <span>{`${question.answer1.answer}`}</span>
      </div>
      <div
        className="answer-button"
        onClick={() => onClickNext(question.answer2.type)}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <span>{`${question.answer2.answer}`}</span>
      </div>
    </div>
  );
};

export default HBTItestComponent;
