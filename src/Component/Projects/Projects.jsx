import React from "react";
import projects from "/public/Projects.json";
import SingleProject from "./SingleProject";
console.log(projects);
const Projects = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-center text-4xl my-10 primary font-bold">My Projects</h1>

      {projects.map((project) => (
        <SingleProject key={project.id} project={project}></SingleProject>
      ))}
    </div>
  );
};

export default Projects;
