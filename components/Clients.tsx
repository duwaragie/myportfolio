import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { Skills } from "@/data/index";
import { Code, Database, Cloud, Wrench, Activity } from "lucide-react";

const Abilities = () => {
  return (
    <div className="py-16" id="abilities">
      <h1 className="heading">
        My Abilities & <span className="text-purple">Strengths</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={Skills} direction="right" speed="slow" />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-lg:mt-10">
          <AbilityCard
            icon={<Code size={40} className="text-blue-500" />}
            title="Programming & Frameworks"
            skills="JavaScript, TypeScript, React, Node.js"
          />
          <AbilityCard
            icon={<Database size={40} className="text-green-500" />}
            title="Database Technologies"
            skills="PostgreSQL, MySQL"
          />
          <AbilityCard
            icon={<Cloud size={40} className="text-yellow-500" />}
            title="Cloud Services"
            skills="AWS, EC2, S3"
          />
          <AbilityCard
            icon={<Wrench size={40} className="text-red-500" />}
            title="Development Tools"
            skills="Git, GitHub, VS Code"
          />
          <AbilityCard
            icon={<Activity size={40} className="text-pink-500" />}
            title="Additional Skills"
            skills="RESTful APIs, MERN Stack"
          />
        </div>
      </div>
    </div>
  );
};

interface AbilityCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({ icon, title, skills }) => (
  <div className="flex flex-col items-center bg-none p-4 w-50 h-50 text-center min-h-[80px] justify-between rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex items-center justify-center mr-4 p-4 ">{icon}</div> {/* Icon aligned left */}
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-gray-200">{skills}</p>
    </div>
  </div>
);

export default Abilities;
