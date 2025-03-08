"use client";
import React from "react";
import { clashMedium, gilroyBold, gilroyMedium, manrope } from "../fonts";
import Image from "next/image";
import { Button } from "@heroui/button";
import { ArrowIcon } from "@/components/Icons";
import RotatingSpinner from "@/components/RotatingSpinner";
import { motion } from "framer-motion";
import ValuesAndPrinciples from "@/components/ValuesAndPrinciplesSection";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="relative flex flex-col items-center justify-center md:gap-6"
    >
      {/* About Us Heading Section */}
      <div className="absolute flex justify-end right-0 top-0 max-md:mt-16 -z-50">
        <Image
          loading="eager"
          src={`/images/dots.svg`}
          alt="dots"
          width={140}
          height={140}
          className="w-[100px] h-[140px] md:w-[140px] md:h-[200px] "
        />
      </div>
      <motion.div
        className="flex flex-col items-center justify-center overflow-x-hidden z-40"
        initial={{ opacity: 0, y: 100 }} // Start from below and invisible
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth timing
      >
        <p
          className={` ${clashMedium.className} font-medium z-40 text-[52px] md:text-[96px] lg:text-[138px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          About Us
        </p>
        <div className=" flex flex-col px-5 gap-3 md:-mt-8 sm:-mt-5 -mt-2 items-center justify-center  ">
          <p
            className={`${gilroyBold.className} font-normal text-sky-blue text-[12px] sm:text-[14px] md:text-[16px]`}
          >
            WHO WE ARE
          </p>
          <p
            className={`${manrope.className} font-bold text-primary text-center text-[28px] md:text-[36px] lg:text-[48px] max-w-[600px]`}
          >
            Your Partners in Progress
          </p>
        </div>
      </motion.div>

      {/* Dots on Left */}
      <div className="absolute flex left-0 top-1/4 self-start">
        <Image
          loading="eager"
          src={`/images/dots.svg`}
          alt="dots"
          width={140}
          height={140}
          className="w-[100px] h-[140px] md:w-[140px] md:h-[200px] "
        />
      </div>

      {/* Rotating Spinner and Content Section */}
      <div className="flex flex-col md:flex-row overflow-x-hidden  items-center md:justify-between justify-center gap-8 md:mb-8 px-4 max-w-[1000px]">
        {/* Rotating Spinner from Left */}
        <motion.div
          className="md:w-1/2 w-full flex items-center shrink  justify-center"
          initial={{ opacity: 0, x: -100 }} // Start from left with opacity 0
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <RotatingSpinner />
        </motion.div>

        {/* Content Section from Right */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col items-center justify-start  gap-8"
          initial={{ opacity: 0, x: 100 }} // Start from right with opacity 0
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h1
            className={`${gilroyBold.className} mt-auto md:self-start self-center font-normal lg:text-[32px] md:text-[24px] text-[22px] text-primary flex gap-2 text-center md:text-left items-center justify-start`}
          >
            About
            <span className="text-sky-blue">Change-hub</span>
          </h1>
          <h2
            className={`${gilroyMedium.className} text-[16px] text-center md:text-left text-charcoal`}
          >
            Change Hub is a collective of seasoned professionals with a passion
            for driving business excellence in Ethiopia. Our team brings
            together expertise from various industries, ensuring a holistic
            approach to your challenges.
          </h2>
          <div className="flex mt-auto md:self-start self-center">
            <Button
              endContent={<ArrowIcon />}
              className={`font-semibold bg-primary text-white py-[10px] px-6 rounded-full flex justify-start cursor-pointer `}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Dots on Right */}
      <div className="lg:top-1/2 bottom-0 block absolute inset-y-0 right-0 md:top-1/2 top-full  ">
        <Image
          loading="eager"
          src={`/images/dots3.svg`}
          alt="dots"
          width={230}
          height={108}
          className="w-[100px] h-[140px] md:w-[140px] md:h-[200px]"
        />
      </div>
      <ValuesAndPrinciples />
    </div>
  );
};

export default AboutUs;
