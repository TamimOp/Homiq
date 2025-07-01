"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pinVariants = {
  hidden: { scale: 0.7, opacity: 0, y: -30 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 18,
      delay: 0.5,
    },
  },
};

const Location = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="w-full bg-[url('/assets/mapBg.png')] bg-no-repeat bg-cover bg-center py-24"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-35">
        {/* Left Side - Map with Pin */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95, rotate: -6 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                }
              : {}
          }
          className="relative w-full max-w-xl rounded-[20px] border-2 border-blue-500 shadow-xl overflow-hidden"
        >
          <Image
            src="/assets/map.png"
            alt="Map"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Pin Marker */}
          <motion.div
            variants={pinVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
          >
            <div className="w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-md mx-auto">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">
                🏠
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full shadow-md inline-block">
              Dream Home 😊
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="text-center md:text-left max-w-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6"
          >
            Discover Properties <br />
            with the Best Value
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="text-lg text-gray-600 mb-8"
          >
            Explore neighborhoods across the UK with high rental value, low
            crime, and lifestyle perks.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-6 px-6 py-3 rounded-full bg-[#5271FF] text-white font-semibold text-xl shadow-md hover:bg-[#3c5ee0] transition border-[3px] border-[#9daffd]"
          >
            Find Nearest Properties
            <span className="ml-2 text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
