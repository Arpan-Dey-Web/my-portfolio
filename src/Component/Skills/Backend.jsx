import React from "react";
import backendSkills from "/public/backendSkill.json";
import BackendSingleSkill from "./BackendSingleSkill";

const Backend = () => {
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-4 ">
        {backendSkills.map((backendSkill) => (
          <BackendSingleSkill
            key={backendSkill.id}
            backendSkill={backendSkill}
          ></BackendSingleSkill>
        ))}
      </div>
    </div>
  );
};

export default Backend;
