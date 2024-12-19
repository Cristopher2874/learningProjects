import React from "react";
import Evaluations from "./Evaluations";

const MainEvaluations = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white">
      <h2 className="mt-2 text-lg text-center">Evaluaciones recientes</h2>
      <hr className="mt-1 w-full" />
      <Evaluations />
    </div>
  );
};

export default MainEvaluations;