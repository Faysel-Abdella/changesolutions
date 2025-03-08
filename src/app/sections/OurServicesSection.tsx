"use client";
import Service from "@/components/Service";
import React, { useState } from "react";
import { clashMedium, gilroyBold, gilroyRegular, manrope } from "../fonts";
import { SlideRightIcon, SlideLeftIcon } from "@/components/Icons";
import { serviceList } from "@/data/constants";
import { motion, useMotionValue } from "framer-motion";

const DRAG_BUFFER = 15;

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDraggging] = useState(false);
  const totalServices = serviceList.length;

  const dragX = useMotionValue(0);

  const goNext = () => {
    if (currentIndex < totalServices - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onDragStart = () => {
    setDraggging(!dragging);
  };

  const onDragEnd = () => {
    setDraggging(!dragging);
    const x = dragX.get();
    console.log(x);

    if (x <= -DRAG_BUFFER && currentIndex < totalServices - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (x >= -DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      id="services"
      className="relative flex flex-col items-center overflow-x-hidden justify-center w-full gap-6 pt-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center justify-center px-4">
        <p
          className={` ${clashMedium.className} font-medium text-[52px] md:text-[96px] lg:text-[138px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          Our Services
        </p>

        <div className=" flex flex-col md:-mt-8 sm:-mt-4 -mt-2 gap-3 px-4 items-center justify-center  ">
          <p
            className={`${gilroyBold.className} font-normal text-sky-blue text-[12px] sm:text-[14px] md:text-[16px]`}
          >
            SERVICES
          </p>
          <p
            className={`${manrope.className}  font-bold text-primary text-[32px] md:text-[48px] lg:text-[56px]`}
          >
            What We Do
          </p>
          <p
            className={`${gilroyRegular.className} max-w-[585px] text-primary text-[14px] md:text-[16px] lg:text-[18px]  font-normal text-center`}
          >
            We offer a comprehensive suite of services designed to address the
            unique challenges of businesses.
          </p>
        </div>
      </div>

      {/* Services Section with Pagination */}
      <div className="relative flex items-center justify-center w-full max-w-[1221px] px-[32px] ">
        {/* Left Arrow - Hidden on First Slide */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-3 z-10  md:flex items-center justify-center transition cursor-pointer"
          >
            <SlideLeftIcon />
          </button>
        )}

        {/* Sliding Services Container */}
        <div className="overflow-hidden min-w-[350px] w-full max-w-[1005px]">
          <motion.div
            className="flex transition-transform duration-100 ease-in-out"
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            animate={{
              translateX: `-${currentIndex * 100}%`,
            }}
          >
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 cursor-grab "
                animate={
                  {
                    // scale: currentIndex === index ? 0.95 : 0.9,
                  }
                }
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                }}
              >
                <Service {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow - Hidden on Last Slide */}
        {currentIndex < totalServices - 1 && (
          <button
            onClick={goNext}
            className="absolute right-3 z-10 md:flex items-center justify-center transition cursor-pointer"
          >
            <SlideRightIcon />
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-[6px] mb-4 ">
        {serviceList.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[7px] h-[7px] rounded-full ${
              index === currentIndex
                ? "bg-sky-blue w-[21px] h-[7px]"
                : "bg-dots"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OurServices;
