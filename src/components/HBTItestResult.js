import React from "react";

const HBTItestResult = ({ submittedList }) => {
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

  return (
    <div>
      <div>Result Page</div>
      <div>{result}</div>
    </div>
  );
};

export default HBTItestResult;
