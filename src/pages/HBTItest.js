import React, { useState, useCallback } from "react";
import { HBTItestQuestions } from "../questions/HBTItestQuestions";
import HBTItestComponent from "../components/HBTItestComponent";
import HBTItestResult from "../components/HBTItestResult";

const HelchangTest = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [answer, setAnswer] = useState(true);
  const [submittedList, setSubmittedList] = useState([]);

  const onClickFirstAnswer = useCallback(() => {
    setAnswer(true);
  }, []);

  const onClickSecondAnswer = useCallback(() => {
    setAnswer(false);
  }, []);

  const onClickNext = () => {
    const newSubmittedList = submittedList.concat(answer);
    setSubmittedList(newSubmittedList);
    setCurrentQuestionId(currentQuestionId + 1);
  };

  return (
    <div id="Helchang-test-container">
      {HBTItestQuestions.length !== currentQuestionId - 1 ? (
        <>
          <HBTItestComponent
            question={HBTItestQuestions[currentQuestionId - 1]}
            onClickFirstAnswer={onClickFirstAnswer}
            onClickSecondAnswer={onClickSecondAnswer}
          />
          <button onClick={onClickNext}>다음</button>
        </>
      ) : (
        <HBTItestResult submittedList={submittedList} />
      )}
    </div>
  );
};

export default HelchangTest;
