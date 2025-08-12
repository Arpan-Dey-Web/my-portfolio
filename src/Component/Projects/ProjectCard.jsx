import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
    const {
      id,
    projecttittle,
    technology,
    liveLink,
    githubClient,
    githubServer,
    features,
    license,
    images,
    ProjectLogo,
  } = project;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 max-w-md mx-auto shadow-2xl border border-gray-800">
      {/* Header with logo and name */}

      {/* Project Screenshot */}

      <div className="mb-4 rounded-lg overflow-hidden">
        <img
          src={images[0]}
          alt={projecttittle}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <img className=" rounded-full" src={ProjectLogo} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{projecttittle}</h3>
          <p className="text-gray-400 text-sm">Full-Stack MERN Application</p>
        </div>
      </div>

      {/* Technology stack cards */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-3 text-center ">Tech Stack</p>
        <hr className="border  border-white mb-3" />
        <div className="flex flex-wrap justify-center gap-2">
          {technology.map((tech, index) => (
            <div
              key={index}
              className={` text-white text-xs font-medium px-3 py-1 rounded-full bg-black`}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="">
        <Link to={`Project/${id}`}>
          <button className="btn rounded-full  text-white bg-gray-600 glow glow-hover  w-full  ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
