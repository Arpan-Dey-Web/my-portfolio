import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SingleProject = ({ project }) => {
  const {
    projecttittle,
    images,
    technology,
    features,
    liveLink,
    githubClient,
    // githubServer,
  } = project;

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border card transition duration-300 flex flex-col lg:flex-row h-full mb-10">
      {/* Project image slider - fixed height container */}
      <div className="lg:w-2/5 w-full  flex-shrink-0 overflow-hidden p-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="h-full w-full  "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${projecttittle} - Screenshot ${index + 1}`}
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project content - flexible height */}
      <div className="lg:w-3/5 w-full p-6 flex flex-col h-full overflow-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold primary text-center">
            <span className="text-white">Project :</span> {projecttittle}
          </h2>

          {/* Tech badges */}
          <div className="grid grid-cols-4 gap-2">
            {technology.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features list */}
          <div>
            <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">
              🚀 Features:
            </h3>
            <ul className="list-disc list-inside text dark:text-gray-300 text-sm space-y-1">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links and License - pushed to bottom */}
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 glow text-white rounded-md transition-colors flex items-center gap-1"
              >
                <span>🌐</span> Live Demo
              </a>
            )}
            {githubClient && (
              <a
                href={githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-md transition-colors flex   btn-accent items-center gap-1"
              >
                <span>💻</span> Client Code
              </a>
            )}
            {/* {githubServer && (
              <a
                href={githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-md transition-colors flex items-center gap-1"
              >
                <span>🔌</span> Server Code
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
