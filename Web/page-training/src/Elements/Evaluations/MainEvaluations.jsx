import React from "react";
import Evaluations from "./Evaluations";
import "./MainEvaluations.css";

const MainEvaluations = () => {
  return (
    <div className="main-evaluations">
      <h2>Evaluaciones recientes</h2>
      <hr className="separator" />
      <Evaluations />
    </div>
  );
};

export default MainEvaluations;