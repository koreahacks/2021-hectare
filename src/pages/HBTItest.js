import React, { useState } from "react";
import { HBTItestQuestions } from "../questions/HBTItestQuestions";
import HBTItestComponent from "../components/HBTItestComponent";
import HBTItestResult from "../components/HBTItestResult";
import CommonQuestion from "../components/CommonQuestion";

const HBTItest = (props) => {
  document.querySelector("title").innerText = "HBTI Test";
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [submittedList, setSubmittedList] = useState([]);
  const [userInfos, setUserInfos] = useState({});

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
                  question={HBTItestQuestions[currentQuestionId - 1]}
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
