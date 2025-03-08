import { clashSemibold, gilroyBold, gilroyMedium } from "@/app/fonts";
import React, { FC } from "react";
import { ApproachProps } from "./type";
import Image from "next/image";

const Approach: FC<ApproachProps> = ({
  number,
  description,
  title,
  imageURL1,
  imageURL2,
}) => {
  return (
    <div
      className={`relative rounded-[20px] w-full min-h-[250px] max-sm:w-[343px]  h-full  gap-2  md:rounded-[32px] flex bg-gray-box  flex-col md:flex-row  
       `}
      // style={
      //   imageURL
      //     ? {
      //         backgroundImage: `url('/images/target2.svg')`,
      //         backgroundSize: "cover",
      //         backgroundPosition: "center",
      //       }
      //     : {}
      // }
    >
      {/* Left Text Content */}
      <div
        className={`flex flex-col w-full object-contain items-start p-4 md:p-6 
          ${imageURL1 !== "justify-between h-full" && ""} `}
      >
        <p
          className={`${clashSemibold.className} font-semibold text-[48px] md:text-[54px] lg:text-[72px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          {number}
        </p>
        <div className="flex flex-col w-full gap-2">
          <h1
            className={`${gilroyBold.className} text-[20px] md:text-[24px] font-normal`}
          >
            {title}
          </h1>
          <h2
            className={`${gilroyMedium.className} flex text-left w-full justify-baseline text-[16px] md:text-[18px] font-normal`}
          >
            {description}
          </h2>
        </div>
      </div>

      {/* Right Image (if exists) */}
      {imageURL1 && (
        <div className="hidden lg:block absolute bottom-0 right-0 top-0  w-full h-full bg-overlay mix-blend-darken  justify-end">
          <Image
            loading="eager"
            src={imageURL1}
            alt="approach symbol"
            width={500}
            height={400}
            className="w-full h-full object-contain object-right rounded-b-[20px] md:rounded-r-[42px] md:rounded-b-none "
          />
        </div>
      )}
      {imageURL2 && (
        <div className="block lg:hidden  absolute bottom-0 right-0 left-0  w-full h-full bg-overlay mix-blend-darken  justify-baseline">
          <Image
            loading="eager"
            src={imageURL2}
            alt="approach symbol"
            width={300}
            height={500}
            className=" w-full h-full object-contain object-bottom rounded-b-[20px] md:rounded-r-[42px] md:rounded-b-none "
          />
        </div>
      )}
    </div>
  );
};

export default Approach;
