
"use client";

import { useState } from "react";
// Components
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
// Data
import { navItems } from "@/data/index";


export default function Home() {
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {!isAnyModalOpen && <FloatingNav navItems={navItems}/>}
        <Hero />
        <Grid />
        <Approach />
        <RecentProjects setIsAnyModalOpen={setIsAnyModalOpen} />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
