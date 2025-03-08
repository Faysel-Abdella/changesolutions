"use client";
import React from "react";
import Image from "next/image";
import { gilroyBold, gilroyRegular } from "@/app/fonts";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const SendEmail = () => {
  return (
    <div className="w-full flex gap-10 md:flex-row flex-col max-w-[1109px] items-center justify-between bg-dark-blue px-4 py-6 sm:p-8 md:p-16">
      {/* Left section (Contact Us) */}
      <motion.div
        className="flex flex-col items-center w-full md:w-1/2 gap-10 justify-center md:justify-start"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          <p
            className={`${gilroyBold.className} text-center md:text-left font-normal text-[16px] text-light-blue`}
          >
            CONTACT US
          </p>
          <p
            className={`${gilroyBold.className} gap-2 text-center md:text-left font-normal text-[48px] text-white`}
          >
            Ready to <span className="text-white-dim">Transform</span> Your{" "}
            <span className="text-sky-blue">Business</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-start gap-4">
          <div className="flex items-center justify-start shrink-0">
            <Image
              loading="eager"
              src={`/images/contact.webp`}
              alt="contact"
              width={115}
              height={104}
            />
          </div>

          <p
            className={`${gilroyRegular.className} text-[#C4C4C4] font-normal text-[16px] text-center md:text-left gap-2`}
          >
            Let&#39;s collaborate to accomplish your{" "}
            <span className="text-sky-blue">business</span> objectives, explore
            innovative <span className="text-sky-blue">technologies</span> , or
            bring your predefined requirements to life.
          </p>
        </div>
      </motion.div>

      {/* Right section (Form) */}
      <ContactForm />
    </div>
  );
};

export default SendEmail;
