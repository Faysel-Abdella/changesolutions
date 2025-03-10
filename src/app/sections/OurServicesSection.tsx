"use client";

import Service from "@/components/Service";
import { useCallback, useEffect, useState } from "react";
import { clashMedium, gilroyBold, gilroyRegular, manrope } from "../fonts";
import { SlideRightIcon, SlideLeftIcon } from "@/components/Icons";
import { serviceList } from "@/data/constants";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const OurServices = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
          className={` ${clashMedium.className} main-title font-medium text-[52px] md:text-[96px] lg:text-[138px] `}
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
      <div className="relative flex items-center justify-center w-full max-w-[1221px] px-[32px]">
        {/* Left Arrow - Hidden on First Slide */}
        {canScrollPrev && (
          <button
            onClick={scrollPrev}
            className="absolute left-3 z-10 md:flex items-center justify-center transition cursor-pointer"
          >
            <SlideLeftIcon />
          </button>
        )}

        {/* Embla Carousel Container */}
        <div
          className="overflow-hidden min-w-[350px] w-full max-w-[1005px]"
          ref={emblaRef}
        >
          <div className="flex">
            {serviceList.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex-grow-0 flex-[0_0_100%]"
              >
                <Service {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Hidden on Last Slide */}
        {canScrollNext && (
          <button
            onClick={scrollNext}
            className="absolute right-3 z-10 md:flex items-center justify-center transition cursor-pointer"
          >
            <SlideRightIcon />
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center cursor-pointer justify-center gap-[6px] mb-4">
        {serviceList.map((_, index) => (
          <span
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-[7px] rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-sky-blue w-[21px]"
                : "bg-dots w-[7px]"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OurServices;
