import React from "react";

const HelchangTestComponent = ({ question, onClickNext }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style = "background: #f7f7f7";
  }
  function onClickAnswer1(e) {
    e.target.style = "background: #f7f7f7";
    if (question.answer1.score === "plus") {
      onClickNext("plus");
    } else {
      onClickNext("stay");
    }
  }
  function onClickAnswer2(e) {
    e.target.style = "background: #f7f7f7";
    if (question.answer2.score === "plus") {
      onClickNext("plus");
    } else {
      onClickNext("stay");
    }
  }
  return (
    <div id="question-container">
      {question.type === "radio" ? (
        <>
          <div id="question-number">{`Q${question.id}`}</div>
          <div id="question">둘 중 하나를 선택</div>
          <div
            className="answer-button"
            onClick={onClickAnswer1}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            <span>{`${question.answer1.select}`}</span>
          </div>
          <div
            className="answer-button"
            onClick={onClickAnswer2}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            <span>{`${question.answer2.select}`}</span>
          </div>
        </>
      ) : (
        <>
          <div id="question-number">{`Q${question.id}`}</div>
          <div id="question">{`${question.question}`}</div>
          <div className="OX-container">
            <div
              className="OX-button"
              onClick={onClickAnswer1}
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
            >
              <span>O</span>
            </div>
            <div
              className="OX-button"
              onClick={onClickAnswer2}
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
            >
              <span>X</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HelchangTestComponent;