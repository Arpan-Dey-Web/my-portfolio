import React from "react";
import { FaAtlassian } from "react-icons/fa";
const Mylogo = () => {
  return (
    <div className="flex items-center">
      <div className="text-yellow-500">
        <FaAtlassian size={25} />
      </div>
      <div className="text-yellow-500 text-xl">
        <h1>rpandey.web</h1>
      </div>
    </div>
  );
};

export default Mylogo;
