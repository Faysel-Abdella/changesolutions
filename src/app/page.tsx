import React from "react";

import TopNavBar from "@/components/TopNavBar";
import HeroSection from "./sections/HeroSection";
import OurServices from "./sections/OurServicesSection";
import OurApproach from "./sections/OurApproachSection";
import AboutUs from "./sections/AboutUsSection";
import ContactUs from "./sections/ContactUsSection";
const page = () => {
  return (
    <div className="relative w-full flex flex-col ">
      <div className="absolute top-2 w-full">
        <TopNavBar />
      </div>
      <HeroSection />

      <OurServices />
      <OurApproach />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default page;
