import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useParams } from "react-router";
import { FaGithub } from "react-icons/fa";
const SingleProject = () => {
  const { id } = useParams();

  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProject(found);
      })
      .catch((err) => setProject({}));
  }, [id]);

  const {
    projecttittle,
    technology,
    liveLink,
    githubClient,
    githubServer,
    features,
    license,
    images,
    ProjectLogo,
    ProjectDescription,
  } = project;
  console.log(technology);
  return (
    <div className="my-20">
      <h1 className="text-white text-center text-4xl font-bold">
        {projecttittle}
      </h1>
      <p className="text-white w-2xl mx-auto  text-center mt-5">
        {ProjectDescription}
      </p>
      <div className="text-center  grid grid-cols-3 gap-4 w-2xl mx-auto mt-5  ">
        {technology?.map((tech, index) => (
          <button className="btn btn-primary" key={index}>
            {tech}
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <button className=" text-white flex gap-1 items-center justify-center border rounded-full px-6 py-2 ">
          <FiExternalLink />
          Live Demo
        </button>

        <button className=" text-white flex gap-1 items-center justify-center border rounded-full px-6 py-2 ">
          <FaGithub />
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default SingleProject;

//  <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border card transition duration-300 flex flex-col lg:flex-row h-full mb-10">
{
  /* Project image slider - fixed height container */
}
{
  /* <div className="lg:w-2/5 w-full  flex-shrink-0 overflow-hidden p-4">
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
</div>; */
}

{
  /* Project content - flexible height */
}
{
  /* <div className="lg:w-3/5 w-full p-6 flex flex-col h-full overflow-auto">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold primary text-center">
      <span className="text-white">Project :</span> {projecttittle}
    </h2> */
}

{
  /* Tech badges */
}
// <div className="grid grid-cols-4 gap-2">
//   {technology.map((tech, index) => (
//     <span
//       key={index}
//       className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text text-sm rounded-full"
//     >
//       {tech}
//     </span>
//   ))}
// </div>

{
  /* Features list */
}
//   <div>
//     <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">
//       🚀 Features:
//     </h3>
//     <ul className="list-disc list-inside text dark:text-gray-300 text-sm space-y-1">
//       {features.map((feature, idx) => (
//         <li key={idx}>{feature}</li>
//       ))}
//     </ul>
//   </div>
// </div>

{
  /* Links and License - pushed to bottom */
}
// <div className="mt-auto pt-4">
//   <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
//     {liveLink && (
//       <a
//         href={liveLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="button-primary glow  transition-colors  rounded-full  text-white bg-gray-600 glow glow-hover rounded-6xl  px-4 py-2"
//       >
//         <span>🌐</span>Live
//       </a>
//     )}
//     {githubClient && (
//       <a
//         href={githubClient}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="button rounded-full btn-secondary px-4 py-2 bg-[#DE2A8A] glow glow-hover transition-colors text-white"
//       >
//         <span>💻</span> Client Code
//       </a>
//     )}
{
  /* {githubServer && (
              <a
                href={githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-md transition-colors flex items-center gap-1"
              >
                <span>🔌</span> Server Code
              </a>
            )} */
}
//     </div>
//   </div>
// </div>;
// {
/* </div>; */
// }
