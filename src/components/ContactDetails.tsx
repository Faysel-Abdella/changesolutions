"use client";
import { motion } from "framer-motion";
import {
  clashSemibold,
  gilroyBold,
  gilroyMedium,
  gilroyRegular,
  gilroyRegularItalic,
} from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1100px] text-grey mx-auto gap-6">
      <motion.div
        className="flex flex-col items-center justify-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <p
          className={`${clashSemibold.className} opacity-50 text-[56px] md:text-[112px] lg:text-[175px] w-full text-center bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF00] bg-clip-text text-transparent`}
        >
          Change Hub
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-8 md:justify-between gap-6 w-full p-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className=" flex md:hidden flex-col items-center justify-start gap-8 w-full col-span-8 px-6 py-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <Image
              loading="eager"
              src={`/images/logo.svg`}
              alt="change hub logo"
              width={40}
              height={50}
            />
          </div>
          <p className="text-center">
            <span className="text-sky-blue">Change-hub</span> is a company based
            in <span className="text-sky-blue">Addis Ababa</span>, Ethiopia.
            That offers various services such as Change Management, Data
            Analytics, Data Analytics, ERP Solutions, and much more.
          </p>
        </motion.div>

        {/* Left Section */}

        <motion.div
          className="flex col-span-8 sm:col-span-4 md:col-span-2 flex-col items-center sm:items-start justify-start gap-8 p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p
            className={`${gilroyBold.className} text-[28px] sm:text-left text-center`}
          >
            Change Hub
          </p>
          <ul
            className={`${gilroyMedium.className} flex flex-col  gap-[10px] justify-start font-normal text-[16px] sm:text-left text-center`}
          >
            <li className="cursor-pointer">
              <Link href="#services">Services</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#our-approach">Our Approach</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#about-us">About Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#contact-us">Contact Us</Link>
            </li>
          </ul>
        </motion.div>

        {/* Middle Section (Larger Space) */}
        <motion.div
          className="flex max-md:hidden flex-col items-center justify-start gap-8 w-full col-span-4 px-6 py-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div>
            <Image
              loading="eager"
              src={`/images/logo.svg`}
              alt="change hub logo"
              width={40}
              height={50}
            />
          </div>
          <p className=" text-center">
            <span className="text-sky-blue">Change-hub</span> is a company based
            in <span className="text-sky-blue">Addis Ababa</span>, Ethiopia.
            That offers various services such as Change Management, Data
            Analytics, Data Analytics, ERP Solutions, and much more.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex col-span-8 sm:col-span-4 md:col-span-2 flex-col items-center justify-center sm:items-start gap-8 p-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <p
            className={`${gilroyBold.className} text-[28px] sm:text-left text-center`}
          >
            Contact Info
          </p>
          <div className="flex flex-col sm:text-left text-center">
            <div className="flex flex-col items-center justify-start gap-3 w-full">
              {/* Location */}
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                  <Image
                    loading="eager"
                    src={`/images/location.svg`}
                    alt="location"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p
                    className={` ${gilroyMedium.className} text-[16px] font-normal text-left w-full`}
                  >
                    Addis Abeba, Ethiopia
                  </p>
                  <p
                    className={` ${gilroyRegularItalic.className} text-left w-full`}
                  >
                    Address
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                  <Image
                    loading="eager"
                    src={`/images/call.svg`}
                    alt="call"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p
                    className={` ${gilroyMedium.className} text-[16px] font-normal text-left w-full`}
                  >
                    +251 923 637 271
                  </p>
                  <p
                    className={`${gilroyRegularItalic.className} text-left w-full`}
                  >
                    Mobile
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                  <Image
                    loading="eager"
                    src={`/images/message.svg`}
                    alt="call"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p
                    className={` ${gilroyMedium.className} text-[16px] font-normal text-left w-full`}
                  >
                    contact@Example.com
                  </p>
                  <p
                    className={` ${gilroyRegularItalic.className} text-left w-full`}
                  >
                    Email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-[500px] py-10">
        <ul
          className={` ${gilroyRegular.className} text-[16px] flex flex-wrap justify-center sm:justify-between items-center gap-x-8 gap-y-4`}
        >
          <li className="flex gap-4 sm:gap-8 flex-col sm:flex-row text-center">
            <span>Telegram</span>
            <span>LinkedIn</span>
          </li>
          <li className="hidden sm:block text-center flex-1">Instagram</li>
          <li className="flex gap-4 sm:gap-8 flex-col sm:flex-row text-center">
            <span>Facebook</span>
            <span>Twitter</span>
          </li>
          <li className="block sm:hidden text-center w-full">Instagram</li>
        </ul>
      </div>

      <div className="w-full px-6 py-5">
        <div className="h-[1px] bg-custom-gradient mb-6"></div>
        <p
          className={` ${gilroyMedium.className} text-[14px] text-center text-grey opacity-90`}
        >
          &copy; AutoHelp USA, all rights reserved 2025
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
