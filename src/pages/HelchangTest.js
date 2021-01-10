import React, { useState } from "react";
import HelchangTestQuestions from "../questions/HelchangtestQuestions";
import HelchangTestComponent from "../components/HelchangTestComponent";
import HelchangTestResult from "../components/HelchangTestResult";

const HelchangTest = () => {
  document.querySelector("title").innerText = "Helchang Test";
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [totalScore, setTotalScore] = useState(0);

  const onClickNext = (answer) => {
    if (answer === "plus") {
      setTotalScore(totalScore + 25);
    }
    setCurrentQuestionId(currentQuestionId + 1);
  };
  return (
    <>
      <div id="helchang-test-container">
        {HelchangTestQuestions.length !== currentQuestionId - 1 && (
          <>
            <div id="fake-div"></div>
            <HelchangTestComponent
              question={HelchangTestQuestions[currentQuestionId - 1]}
              onClickNext={onClickNext}
            />
          </>
        )}
      </div>
      <div id="helchang-result-container">
        {HelchangTestQuestions.length === currentQuestionId - 1 && (
          <HelchangTestResult totalScore={totalScore} />
        )}
      </div>
    </>
  );
};

export default HelchangTest;
