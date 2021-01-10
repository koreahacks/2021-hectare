import React from "react";
import { Link } from "react-router-dom";
import HelchangTestResults from "../results/HelchangTestResults";

const HelchangTestResult = ({ totalScore }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style =
      "background: #f7f7f7; border-color: #b088f9;  color: black";
  }

  let imageSrc;
  let character;
  let description;
  for (let i = 0; i < HelchangTestResults.length; i++) {
    for (let j = 0; j < HelchangTestResults[i].score.length; j++) {
      if (HelchangTestResults[i].score[j] === totalScore) {
        imageSrc = HelchangTestResults[i].image;
        character = HelchangTestResults[i].character;
        description = HelchangTestResults[i].description;
      }
    }
  }
  return (
    <div id="result-container">
      <div id="helchang-question">나의 헬창력은</div>
      <div id="helchang-score">{totalScore}kg</div>
      <img src={imageSrc} alt="helchang-type" id="helchang-image" />
      <div id="helchang-character">{character}</div>
      <div id="helchang-description">&nbsp;{description}</div>
      <Link
        to={"/hbti-test"}
        className="home-button"
        id="button1"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onTouchStart={mouseOver}
        onTouchEnd={mouseLeave}
      >
        헬BTI 알아보기
      </Link>
    </div>
  );
};

export default HelchangTestResult;
