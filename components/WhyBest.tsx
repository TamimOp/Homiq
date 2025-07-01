"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Property Insurance",
    desc: "Secure listings with trusted partners for peace of mind.",
    icon: "/assets/heroicons-solid/home.svg",
  },
  {
    title: "Best Price",
    desc: "We show listings with the most competitive rates.",
    icon: "/assets/heroicons-solid/dollar.svg",
  },
  {
    title: "Lowest Commission",
    desc: "Save more on purchases with our platform-first commission model.",
    icon: "/assets/heroicons-solid/receipt.svg",
  },
  {
    title: "Overall Control",
    desc: "Manage your listings, schedule viewings, and track favorites.",
    icon: "/assets/heroicons-solid/setting.svg",
  },
];

export default function WhyBest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-24" ref={ref}>
      {/* Main container with responsive layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1439px] lg:px-20 justify-center items-center gap-8 sm:gap-12 lg:gap-[60px] mx-auto">
        {/* LEFT CARD with responsive dimensions */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full lg:w-auto lg:h-[754px] p-6 sm:p-8 lg:p-[50px] flex-col items-start gap-4 sm:gap-6 lg:gap-[26px] lg:flex-1 bg-white rounded-[12px] border border-[#F1F1F3] shadow-[6px_6px_25px_1px_rgba(0,0,0,0.26)]"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-tight font-bold text-black">
            Why We are the <br /> best in the market
          </h2>
          <p className="text-[#4B4B4B] text-base sm:text-lg lg:text-xl leading-relaxed">
            Discover apartments and homes that match your lifestyle — with
            powerful filters, interactive
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-[#5271FF] text-white font-semibold text-xl shadow-md hover:bg-[#3c5ee0] transition border-[3px] border-[#9daffd]">
            Explore More
          </button>

          <div className="overflow-hidden rounded-xl flex-1 w-full min-h-[200px] sm:min-h-[300px] lg:min-h-0">
            <Image
              src="/assets/appartment1.png"
              alt="Apartment"
              width={740}
              height={688}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT FEATURES GRID with responsive layout */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 w-full lg:w-auto"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex w-full sm:w-auto lg:w-[305.767px] h-auto lg:h-[260px] p-4 sm:p-[15px_24px] flex-col items-start gap-3 sm:gap-4 flex-shrink-0"
            >
              <div className="w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] rounded-full bg-[#5271FF] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="sm:w-[31px] sm:h-[31px]"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#555] leading-[1.6]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
