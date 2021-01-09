import React from "react";

const HBTItestComponent = ({
  question,
  onClickFirstAnswer,
  onClickSecondAnswer,
}) => {
  return (
    <div id="question-container">
      <div id="question">{`Q${question.id}. ${question.question}`}</div>
      <label onClick={onClickFirstAnswer}>
        <input type="radio" className="answer-box" id="answer1" name="answer" />
        {`${question.answer1}`}
      </label>
      <label onClick={onClickSecondAnswer}>
        <input type="radio" className="answer-box" id="answer2" name="answer" />
        {`${question.answer2}`}
      </label>
    </div>
  );
};

export default HBTItestComponent;
