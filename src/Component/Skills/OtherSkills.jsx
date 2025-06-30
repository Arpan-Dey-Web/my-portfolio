import React from "react";
import otherTools from "/public/otherTools.json";
import Tool from "./tool";
const OtherSkills = () => {
  return (
    <div className="text-center">
     
      <div className="grid grid-cols-3 gap-4 p-4 ">
        {otherTools.map((tool) => (
          <Tool key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
