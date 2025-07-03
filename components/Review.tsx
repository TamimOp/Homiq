"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Wade Warren",
    role: "Product and Seals Manager",
    image: "/assets/dp1.jpg",
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
  },
  {
    name: "Marvin McKinney",
    role: "Marketing Lead",
    image: "/assets/dp2.jpg",
    review:
      "Working with Estatein was an absolute pleasure. Their intuitive interface and attentive staff made the process seamless.",
  },
  {
    name: "Jacob Jones",
    role: "UX Designer",
    image: "/assets/dp3.jpg",
    review:
      "I found the perfect place within days! Estatein's filtering tools are incredibly powerful and easy to use.",
  },
  {
    name: "Darlene Robertson",
    role: "Freelancer",
    image: "/assets/dp4.jpg",
    review:
      "Great experience from start to finish. The team was responsive, and listings were updated in real time.",
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const current = reviews[index];

  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((prev) => (prev + 1) % reviews.length);

  return (
    <motion.section
      ref={sectionRef}
      className="w-full px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-18 bg-white"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Header and avatars */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10 gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
          What Our Clients Say <br className="hidden md:block" /> about us
        </h2>
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {[
            "/assets/dp1.jpg",
            "/assets/dp2.jpg",
            "/assets/dp3.jpg",
            "/assets/dp4.jpg",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Reviewer ${i + 1}`}
              width={40}
              height={40}
              className={`rounded-full border-2 border-white md:w-12 md:h-12 ${
                i !== 0 ? "-ml-3" : ""
              }`}
              style={{ zIndex: 10 - i }}
            />
          ))}
          <p className="ml-2 text-xs md:text-sm font-semibold text-[#666666]">
            More than <span className="text-black">500+</span>
            <br className="hidden md:block" /> Client Reviews
          </p>
        </motion.div>
      </motion.div>

      {/* Main review content */}
      <div className="flex flex-col lg:flex-row items-center justify-between pt-10 md:pt-16 lg:pt-22 gap-6">
        <motion.button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full mb-4 lg:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ArrowLeft size={20} />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex flex-col md:flex-row flex-1 items-center justify-center gap-8 md:gap-16"
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left: Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Image
                src={current.image}
                alt={current.name}
                width={180}
                height={180}
                className="rounded-2xl object-cover w-36 h-36 md:w-[220px] md:h-[220px] lg:w-[345px] lg:h-[345px]"
              />
            </motion.div>
            {/* Right: Review Content */}
            <motion.div
              className="flex flex-col items-start rounded-2xl w-full md:w-[350px] lg:w-[673px]"
              style={{
                padding: "24px 32px",
                gap: 18,
                borderRadius: 16,
                background: "#F5F7FF",
              }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <p className="text-lg md:text-2xl lg:text-[32px] font-medium leading-relaxed text-[#242424] mb-4 md:mb-6">
                {current.review}
              </p>
              <p className="text-lg md:text-2xl font-semibold text-black mb-1">
                {current.name}
              </p>
              <p className="text-base text-[#5271FF] font-medium">
                {current.role}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.section>
  );
}
