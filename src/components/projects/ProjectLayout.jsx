import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, image }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="relative rounded-lg overflow-hidden group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-10 p-6 md:p-8 bg-black/50 text-white group-hover:bg-black/70 transition-colors duration-300">
        <h2 className="text-lg md:text-xl font-medium">{name}</h2>
        <p className="text-sm md:text-base mt-2 text-gray-300">
          {description}
        </p>
        <p className="text-sm md:text-base mt-4 text-gray-400">
          {new Date(date).toDateString()}
        </p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
