import Image from "next/image";
import React from "react";
import SendEmail from "@/components/SendEmail";
import ContactDetails from "@/components/ContactDetails";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="flex flex-col items-center bg-dark-blue relative overflow-x-hidden w-full"
    >
      <div className="absolute right-0  opacity-3 mix-blend-exclusion w-full h-full ">
        <Image
          loading="eager"
          src="/images/liquid-bg-unscreen.gif"
          alt="bg"
          fill
          unoptimized
          className="object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-overlay  " />
      </div>
      <SendEmail />
      <ContactDetails />
    </div>
  );
};

export default ContactUs;
