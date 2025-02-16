"use client";
import { useState, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { toast } from "react-hot-toast";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { Button } from "./ui/MovingBorders";
import { motion, useMotionTemplate, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

const Hero = () => {
  const email = "duwaragie22@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <Button
            duration={5000}
            borderRadius="100%"
            className="w-64 h-64 flex items-center justify-center p-4 shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            onClick={copyToClipboard}
            >
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={240}
              height={240}
              className="rounded-full object-cover w-full h-full"
            />
            </Button>

          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mt-6">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Duwaragie, a{' '}
            <span className="text-blue-400 font-semibold">
              <Typewriter
                words={["Full Stack Developer", "Data Analyst", "Software Engineer", "UI/UX Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          <a href="#about">
            <MagicButton title="Show my work " icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
