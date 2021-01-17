import React, { useState } from "react";
import { HBTItestQuestions } from "../questions/HBTItestQuestions";
import HBTItestComponent from "../components/HBTItestComponent";
import HBTItestResult from "../components/HBTItestResult";
import CommonQuestion from "../components/CommonQuestion";

const HBTItest = () => {
  document.querySelector("title").innerText = "HBTI Test";
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [submittedList, setSubmittedList] = useState([]);
  const [userInfos, setUserInfos] = useState({});

  const onClickPrev = () => {
    setSubmittedList(submittedList.slice(0, submittedList.length - 1));
    setCurrentQuestionId(currentQuestionId - 1);
  };

  const onClickNext = (answer) => {
    const newSubmittedList = submittedList.concat(answer);
    setSubmittedList(newSubmittedList);
    setCurrentQuestionId(currentQuestionId + 1);
  };

  const handleSubmit = (gender, age) => {
    setUserInfos({ gender: gender, age: age });
  };

  return (
    <>
      {Object.keys(userInfos).length === 0 ? (
        <CommonQuestion handleSubmit={handleSubmit} />
      ) : (
        <>
          <div id="HBTI-test-container">
            {HBTItestQuestions.length !== currentQuestionId - 1 && (
              <>
                <div id="fake-div"></div>
                <HBTItestComponent
                  questionId={currentQuestionId}
                  question={HBTItestQuestions[currentQuestionId - 1]}
                  onClickPrev={onClickPrev}
                  onClickNext={onClickNext}
                />
              </>
            )}
          </div>
          <div id="HBTI-result-container">
            {HBTItestQuestions.length === currentQuestionId - 1 && (
              <HBTItestResult submittedList={submittedList} userInfos={userInfos} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HBTItest;
