"use client";

import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

import { projects } from "@/data/index";
import { PinContainer } from "@/components/ui/3d-pin";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

const ProjectCard = ({ project, className = "" }: { project: Project; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className={`w-[90vw] sm:w-[32rem] h-[32rem] mx-auto flex flex-col items-center justify-center mb-8 ${className}`}
  >
    <PinContainer title={project.link} href={project.link}>
      <div className="relative w-[90vw] sm:w-[32rem] h-[20rem] mb-4 overflow-hidden border border-white/20 rounded-3xl">
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden z-0 group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundColor: "#13162D" }}
        >
          <img
            src="/bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <img
          src={project.img}
          alt={project.title}
          className="absolute top-1/2 left-1/2 z-10 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="text-center w-full px-4 min-h-[12rem]">
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 group-hover:text-purple transition-colors duration-300">
          {project.title}
        </h1>
        <p className="lg:text-xl md:text-base text-sm font-light line-clamp-2 text-white/70 group-hover:text-white/90 transition-colors duration-300 my-3">
          {project.des}
        </p>
        <div className="flex items-center justify-between mt-5 mb-2">
          <div className="flex items-center gap-2">
            {project.iconLists.map((icon: string, index: number) => (
              <motion.div
                key={icon}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: -5 * index * 2, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:border-purple/40 transition-colors duration-300"
              >
                <img src={icon} alt="icon" className="p-2" />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center group">
            <p className="flex lg:text-xl md:text-base text-sm text-purple group-hover:translate-x-1 transition-transform duration-300">
              View Project
            </p>
            <FaLocationArrow className="ml-3 text-purple group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </PinContainer>
  </motion.div>
);

interface RecentProjectsProps {
  setIsAnyModalOpen?: (isOpen: boolean) => void;
}

const RecentProjects = ({ setIsAnyModalOpen }: RecentProjectsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const recentProjects = projects.slice(0, 3);

  useEffect(() => {
    setIsAnyModalOpen?.(isModalOpen);
  }, [isModalOpen, setIsAnyModalOpen]);

  return (
    <div className="py-16 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h1 className="heading text-center">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 p-4"
          >
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple/20 to-purple/10 px-6 py-3 rounded-full backdrop-blur-sm border border-purple/20 hover:border-purple/40 transition-all duration-300"
          >
            <span className="text-purple text-lg">View All Projects</span>
            <BsArrowRightCircleFill className="text-purple text-xl" />
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={() => setIsModalOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed top-4 bottom-4 left-2 right-2 md:top-10 md:bottom-10 md:left-10 md:right-10 bg-black-100/95 rounded-3xl z-50 overflow-y-auto"
              >
                <div className="sticky top-0 flex justify-between items-center p-6 bg-black-100/95 backdrop-blur-sm border-b border-white/10">
                  <h2 className="text-2xl font-bold text-white">All Projects</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-white/60 hover:text-white text-3xl"
                  >
                    <IoCloseCircleOutline />
                  </motion.button>
                </div>
                <div className="p-4">
                  <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
                    {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecentProjects;


