import React, { useState } from "react";
import { HBTItestQuestions } from "../questions/HBTItestQuestions";
import HBTItestComponent from "../components/HBTItestComponent";
import HBTItestResult from "../components/HBTItestResult";

const HBTItest = () => {
  document.querySelector("title").innerText = "HBTI Test";
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [submittedList, setSubmittedList] = useState([]);

  const onClickNext = (answer) => {
    const newSubmittedList = submittedList.concat(answer);
    setSubmittedList(newSubmittedList);
    setCurrentQuestionId(currentQuestionId + 1);
  };
  return (
    <>
      <div id="HBTI-test-container">
        {HBTItestQuestions.length !== currentQuestionId - 1 && (
          <>
            <div id="fake-div"></div>
            <HBTItestComponent
              question={HBTItestQuestions[currentQuestionId - 1]}
              onClickNext={onClickNext}
            />
          </>
        )}
      </div>
      <div id="HBTI-result-container">
        {HBTItestQuestions.length === currentQuestionId - 1 && (
          <HBTItestResult submittedList={submittedList} />
        )}
      </div>
    </>
  );
};

export default HBTItest;
