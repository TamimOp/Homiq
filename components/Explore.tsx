"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Explore() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-[420px] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center px-4 md:px-0"
      style={{
        backgroundImage: "url(/assets/ExploreBg1.png)",
        position: "relative",
      }}
    >
      {/* Overlay: dark blue with opacity */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "#000C41A3" }}
      />

      {/* Overlay Diamonds */}
      <Image
        src="/assets/ExploreBg2.png"
        alt="Diamonds overlay"
        fill
        className="pointer-events-none object-cover z-[2]"
      />

      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.13, delayChildren: 0.1 },
          },
        }}
      >
        <motion.h2
          className="text-white text-[32px] md:text-5xl font-semibold leading-tight md:leading-snug"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Explore the local area
        </motion.h2>
        <motion.p
          className="text-white text-base md:text-xl font-normal mt-2"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          Discover apartments and homes that match your lifestyle{" "}
          <br className="hidden md:block" />— with powerful filters, interactive
        </motion.p>

        {/* Search Input */}
        <motion.div
          className="mt-8 mx-auto w-full max-w-xl bg-white rounded-full flex items-center overflow-hidden px-6 py-3 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
        >
          <Search className="text-gray-400 w-[34px] h-[34px]" />
          <input
            type="text"
            placeholder="Search Location"
            className="flex-1 px-3 text-gray-700 placeholder:text-gray-400 outline-none border-none bg-transparent text-xl"
          />
          <button className="bg-[#4F46E5] text-white font-medium text-xl px-6 py-2 rounded-full">
            Search
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
