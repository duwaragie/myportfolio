"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-16" id="projects">
      <h1 className="heading text-center mb-12">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      {/* Flex container with wrapping */}
      <div className="flex flex-wrap justify-center p-8 gap-x-16 gap-y-16 mt-6">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[28rem] sm:w-[32rem] sm:gap-y-16 w-[90vw] flex items-center justify-center mb-8"
          >
            <PinContainer title={link} href={link}>
              {/* Pin Upper Section */}
              <div className="relative sm:w-[32rem] sm:gap-y-16 w-[90vw] sm:h-auto h-[35vh] lg:h-[40vh] mb-8">
                {/* Background Image */}
                <div
                  className="absolute inset-0 lg:rounded-3xl overflow-hidden z-0"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Foreground Image */}
                <img
                  src={img}
                  alt={title}
                  className="absolute top-1/2 left-1/2 z-10 max-w-full max-h-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Pin Lower Section */}
              <div className="text-center">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "0.5vh 0" }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-5 mb-2">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
