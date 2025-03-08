import { gilroyBold, gilroyMedium } from "@/app/fonts";

export const approachSteps = [
  {
    number: "01",
    title: "Consultation",
    description: () => (
      <p
        className={`${gilroyMedium.className} text-[16px] md:text-[18px] font-normal`}
      >
        We begin by understanding your unique challenges and objectives.
      </p>
    ),
    imageURL1: "",
  },
  {
    number: "02",
    title: "Strategy",
    description: () => (
      <p
        className={`${gilroyMedium.className} w-full lg:w-3/5 text-[16px] md:text-[18px] font-normal`}
      >
        Crafting tailored solutions that{" "}
        <span className={` ${gilroyBold.className} text-sky-blue`}>align</span>{" "}
        with your business goals.
      </p>
    ),
    imageURL1: "/images/businessplan.svg",
    imageURL2: "/images/businessSm.svg",
  },
  {
    number: "03",
    title: "Implementation",
    description: () => (
      <p
        className={`${gilroyMedium.className} w-full lg:w-3/5 text-[16px] md:text-[18px] font-normal`}
      >
        Deploying strategies with{" "}
        <span className={` ${gilroyBold.className} text-sky-blue`}>
          precision
        </span>{" "}
        and agility.
      </p>
    ),
    imageURL1: "/images/target2.svg",
    imageURL2: "/images/targetSm.svg",
  },
  {
    number: "04",
    title: "Continuous Support",
    description: () => (
      <p
        className={`${gilroyMedium.className}  text-[16px] md:text-[18px] font-normal`}
      >
        Providing ongoing assistance to ensure sustained success.
      </p>
    ),
    imageURL1: "",
  },
];
