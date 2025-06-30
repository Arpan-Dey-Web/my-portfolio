import React from "react";
import frontendSkills from "/public/frontendSkill.json";
import SingleSkill from "./SingleSkill";
const Frontend = () => {
  return (
    <div className="text-center">

      <div className="grid grid-cols-3 gap-4 p-4">
        {frontendSkills.map((frontendSkill) => (
          <SingleSkill key={frontendSkill.id} frontendSkill={frontendSkill} />
        ))}
      </div>
    </div>
  );
};

export default Frontend;
