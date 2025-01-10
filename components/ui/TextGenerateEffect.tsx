"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import {cn} from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  return (
    <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${
            idx > 3 ? "text-purple" : "dark:text-white text-black"
          } opacity-0`}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};
