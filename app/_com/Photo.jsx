"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="150"
          cy="150"
          r="155"
          stroke="blue"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22"],
            rotate: [100, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative w-[298px] h-[298px] xl:h-[498px] xl:w-[498px]">
          <Image
            src="/photo.jpg"
            alt="Maher Mansour"
            className="object-cover rounded-full"
            priority
            quality={100}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
