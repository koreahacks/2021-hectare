import React from "react";
import { Link } from "react-router-dom";
import HBTItestResults from "../results/HBTItestResults";

const HBTItestResult = ({ submittedList }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style =
      "background: #f7f7f7; border-color: #b088f9;  color: black";
  }
  let result = "";
  let E = 0;
  let I = 0;
  let S = 0;
  let N = 0;
  let T = 0;
  let F = 0;
  let J = 0;
  let P = 0;

  for (let i = 0; i < submittedList.length; i++) {
    if (submittedList[i] === "E" || submittedList[i] === "I") {
      if (submittedList[i] === "E") {
        E += 1;
      } else {
        I += 1;
      }
    } else if (submittedList[i] === "S" || submittedList[i] === "N") {
      if (submittedList[i] === "S") {
        S += 1;
      } else {
        N += 1;
      }
    } else if (submittedList[i] === "T" || submittedList[i] === "F") {
      if (submittedList[i] === "T") {
        T += 1;
      } else {
        F += 1;
      }
    } else if (submittedList[i] === "J" || submittedList[i] === "P") {
      if (submittedList[i] === "J") {
        J += 1;
      } else {
        P += 1;
      }
    }
  }

  if (E > I) {
    result += "E";
  } else {
    result += "I";
  }
  if (S > N) {
    result += "S";
  } else {
    result += "N";
  }
  if (T > F) {
    result += "T";
  } else {
    result += "F";
  }
  if (J > P) {
    result += "J";
  } else {
    result += "P";
  }

  let type;
  let character;
  let imageSrc;
  let description;
  let recommendedExercise;
  let unrecommendedExercise;
  for (let j = 0; j < HBTItestResults.length; j++) {
    if (result === HBTItestResults[j].type) {
      type = HBTItestResults[j].type;
      character = HBTItestResults[j].character;
      imageSrc = HBTItestResults[j].image;
      description = HBTItestResults[j].description;
      recommendedExercise = HBTItestResults[j].recommendedExercise;
      unrecommendedExercise = HBTItestResults[j].unrecommendedExercise;
    }
  }
  return (
    <div id="result-container">
      <div id="hbti-question">나의 헬BTI는</div>
      <div id="hbti-type">{type}</div>
      <img src={imageSrc} alt="hbti-type" id="hbti-image" />
      <div id="hbti-character">{character}</div>
      <div id="hbti-description">&nbsp;{description}</div>
      <div className="hbti-exercise">어울리는 운동: {recommendedExercise}</div>
      <div className="hbti-exercise">
        안 어울리는 운동: {unrecommendedExercise}
      </div>
      <Link
        to={"/helchang-ability-test"}
        className="home-button"
        id="button2"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onTouchStart={mouseOver}
        onTouchEnd={mouseLeave}
      >
        헬창력 알아보기
      </Link>
    </div>
  );
};

export default HBTItestResult;
