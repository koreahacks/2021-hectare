import React from "react";
import { Link } from "react-router-dom";
import HBTItestResults from "../results/HBTItestResults";
import axios from "axios";
import html2canvas from "html2canvas";

const HBTItestResult = ({ submittedList, userInfos }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style = "background: #f7f7f7; border-color: #b088f9;  color: black";
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

  function onCapture() {
    const newLogo = document.createElement("div");
    newLogo.id = "logo";
    newLogo.innerHTML = `<img src="/image/logo.png" alt="logo" />`;
    const vp = document.getElementById("viewportMeta").getAttribute("content");
    const newResultBox = new Promise(function (resolve, reject) {
      document.getElementById("result-box").insertAdjacentElement("afterbegin", newLogo);
      document.getElementById("viewportMeta").setAttribute("content", "width=800");
    });
    newResultBox
      .then(
        html2canvas(document.getElementById("result-box")).then((canvas) => {
          saveAs(canvas.toDataURL("image/png", 1), "hbti-result.png");
        })
      )
      .then(document.getElementById("result-box").removeChild(newLogo))
      .then(document.getElementById("viewportMeta").setAttribute("content", vp));
  }

  function saveAs(uri, filename) {
    let link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
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

  let questions = {};
  for (let i = 0; i < submittedList.length; i++) {
    questions[`q${i + 1}`] = submittedList[i];
  }

  axios.post("http://127.0.0.1:8000/hbti/create/", {
    user: "익명",
    result: type,
    ...userInfos,
    ...questions,
  });

  return (
    <div id="result-container">
      <div id="result-box">
        <div id="hbti-question">나의 헬BTI는</div>
        <div id="hbti-type">{type}</div>
        <img src={imageSrc} alt="hbti-type" id="hbti-image" />
        <div id="hbti-character">{character}</div>
        <div id="hbti-description">&nbsp;{description}</div>
        <div className="hbti-exercise">어울리는 운동: {recommendedExercise}</div>
        <div className="hbti-exercise">안 어울리는 운동: {unrecommendedExercise}</div>
      </div>
      <div id="alert-info">카카오톡 링크에서 접속 시 캡쳐기능이 동작하지 않습니다.</div>
      <div
        className="home-button"
        onClick={onCapture}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        결과 캡쳐하기
      </div>
      <Link
        to={"/helchang-ability-test"}
        className="home-button"
        id="button2"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        헬창력 알아보기
      </Link>
    </div>
  );
};

export default HBTItestResult;
