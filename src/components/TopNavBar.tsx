"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { gilroyBold, gilroyMedium, gilroySemiBold } from "@/app/fonts";
import { ArrowIcon, HamburgerIcon } from "./Icons";
import { manrope } from "@/app/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TopNavBar = () => {
  const navMenu = [
    { label: "Services", sectionId: "#services" },
    { label: "Our Approach", sectionId: "#our-approach" },
    { label: "About Us", sectionId: "#about-us" },
    { label: "Contact Us", sectionId: "#contact-us" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-icon")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-icon")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.div
      initial={{ y: -100 }} // Starts above the viewport
      animate={{ y: 0 }} // Animates to the final position
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      className="w-full z-20 py-3 md:py-[20px] px-6 lg:px-32 flex items-center justify-between border-borders border-[0.3px] rounded-full bg-white md:border-0 md:bg-transparent"
    >
      <div className={`${gilroyBold.className} max-md:scale-70 scale-90`}>
        <div>
          <Image
            loading="eager"
            src={`/images/logo.svg`}
            alt="change hub logo"
            width={40}
            height={50}
          />
        </div>
      </div>
      {/* <div className={`${gilroyBold.className} text-[20px] block md:hidden`}>
        C-H
      </div> */}

      {/* Desktop Navigation */}
      <div className={`${gilroyMedium.className} text-[16px] hidden md:block`}>
        <ul className="flex items-center justify-center gap-6">
          {navMenu.slice(0, 3).map((menu, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${
                gilroySemiBold.className
              } text-[16px] cursor-pointer transition-all ${
                activeIndex === index
                  ? ` text-primary font-semibold ${gilroyBold.className}`
                  : `text-grey font-normal ${gilroyMedium.className}`
              }`}
            >
              <Link href={menu.sectionId}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${manrope.className} text-[14px] hidden md:block`}>
        <Button
          endContent={<ArrowIcon />}
          className="bg-primary font-semibold text-white py-[10px] px-6 rounded-full flex cursor-pointer"
        >
          <Link href="#contact-us">Contact Us</Link>
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="block md:hidden relative">
        <div
          className="hamburger-icon cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HamburgerIcon />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col items-start"
          >
            {navMenu.map((menu, index) => (
              <Link
                key={index}
                href={menu.sectionId}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[16px] text-primary py-2 w-full"
              >
                {menu.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TopNavBar;
