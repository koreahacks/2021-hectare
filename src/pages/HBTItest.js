import React, { useState } from "react";
import { HBTItestQuestions } from "../questions/HBTItestQuestions";
import HBTItestComponent from "../components/HBTItestComponent";
import HBTItestResult from "../components/HBTItestResult";

const HelchangTest = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [submittedList, setSubmittedList] = useState([]);

  const onClickNext = (answer) => {
    const newSubmittedList = submittedList.concat(answer);
    setSubmittedList(newSubmittedList);
    setCurrentQuestionId(currentQuestionId + 1);
  };
  return (
    <div id="HBTI-test-container">
      {HBTItestQuestions.length !== currentQuestionId - 1 ? (
        <>
          <HBTItestComponent
            question={HBTItestQuestions[currentQuestionId - 1]}
            onClickNext={onClickNext}
          />
        </>
      ) : (
        <HBTItestResult submittedList={submittedList} />
      )}
    </div>
  );
};

export default HelchangTest;
