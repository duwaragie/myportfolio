import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { Skills } from "@/data/index";
import { Code, Database, Cloud, Wrench, Activity, Code2 } from "lucide-react";

const Abilities = () => {
  return (
    <div className="py-16" id="abilities">
      <h1 className="heading">
        My Abilities & <span className="text-purple"> Strengths</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={Skills} direction="right" speed="slow" />
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10">
          <AbilityCard
            icon={<Code size={40} className="text-blue-500" />}
            title="Programming & Frameworks"
            skills="JavaScript, TypeScript, React, Node.js, Next.js, .NET, Python, Java, C/C++"
          />
          <AbilityCard
            icon={<Database size={40} className="text-green-500" />}
            title="Database Technologies"
            skills="PostgreSQL, MySQL, Firebase, MongoDB"
          />
          <AbilityCard
            icon={<Cloud size={40} className="text-yellow-500" />}
            title="Cloud Services"
            skills="AWS (Amplify, EC2, RDS, S3)"
          />
          <AbilityCard
            icon={<Wrench size={40} className="text-red-500" />}
            title="Development Tools"
            skills="Git, GitHub, VS Code, Jupyter Notebooks"
          />
          <AbilityCard
            icon={<Activity size={40} className="text-pink-500" />}
            title="Additional Skills"
            skills="RESTful APIs, MERN Stack, Frontend & Backend Development, Responsive Web Design"
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
  <div className="flex flex-col items-center justify-between bg-none p-6 w-48 text-center h-full">
    <div className="flex-grow">{icon}</div> {/* This will push the icon to the top */}
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-200 mt-2">{skills}</p>
  </div>
);


export default Abilities;
