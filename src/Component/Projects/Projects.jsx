import React from "react";
import projects from "/public/Projects.json";
import SingleProject from "./SingleProject";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-center text-4xl my-10 primary font-bold">
        My Projects
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
