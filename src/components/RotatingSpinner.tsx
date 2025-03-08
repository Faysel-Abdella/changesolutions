"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RotatingSpinner = () => {
  return (
    <div className="relative overflow-y-clip flex items-center justify-center max-sm:scale-80 w-[80vw] h-[80vw] max-w-[365px] max-h-[365px] md:max-w-[400px] md:max-h-[400px] scale-[0.8] md:scale-100">
      {/* Rotating Outer Dotted Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-[85%] h-[85%] custom-dotted-circle rounded-full"
      ></motion.div>

      {/* Outer Circle Rotating Images Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {/* Image 1 (Top) */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image
            loading="eager"
            src="/images/spinner1.webp"
            alt="1"
            width={47}
            height={47}
          />
        </motion.div>

        {/* Image 3 (Bottom left) */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image
            loading="eager"
            src="/images/spinner3.webp"
            alt="3"
            width={50}
            height={50}
          />
        </motion.div>

        {/* Image 4 (Bottom Right) */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image
            loading="eager"
            src="/images/spinner4.webp"
            alt="4"
            width={50}
            height={50}
          />
        </motion.div>
      </motion.div>

      {/* Inner Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-[65%] h-[65%] custom-dotted-circle-small rounded-full"
      ></motion.div>

      {/* Inner Rotating Images */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {/* Image 1 (Inner Top) */}
        <motion.div
          className="absolute top-1/3 right-1/6 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image
            loading="eager"
            src="/images/spinner1.webp"
            alt="1"
            width={38}
            height={38}
          />
        </motion.div>
      </motion.div>

      {/* Center Image */}
      <div className="absolute w-[50%] h-[50%] flex items-center justify-center rounded-full">
        <Image
          loading="eager"
          src="/images/Mask-group.webp"
          alt="center"
          width={220}
          height={220}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default RotatingSpinner;
