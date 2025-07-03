"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    image: "/assets/project1.png",
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    price: "$550,000",
    featured: false,
  },
  {
    image: "/assets/project2.png",
    title: "Metropolitan Haven",
    desc: "A quiet, modern building with great access to public transport in Manchester.",
    price: "$550,000",
    featured: true,
  },
  {
    image: "/assets/appartment1.png",
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    price: "$550,000",
    featured: false,
  },
];

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [cardWidth, setCardWidth] = useState(732);

  // Add ref and inView for scroll animation
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Responsive card width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setCardWidth(window.innerWidth - 32); // 16px padding on each side
      } else if (window.innerWidth < 1024) {
        setCardWidth(400);
      } else {
        setCardWidth(732);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const total = projects.length;
  const getIndex = (i: number) => (i + total) % total;
  const visibleCards = [
    projects[getIndex(activeIndex - 1)],
    projects[getIndex(activeIndex)],
    projects[getIndex(activeIndex + 1)],
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F5F7FF] py-24 overflow-hidden"
    >
      {/* Background Ellipse */}
      <Image
        src="/assets/projectEllipseBg.png"
        alt="bg"
        fill
        className="absolute left-0 top-0 h-full w-auto object-left object-contain pointer-events-none"
        style={{ minWidth: 300, maxWidth: 900 }}
      />

      {/* Animated Section Header */}
      <motion.div
        className="relative z-10 text-center mb-14 px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold text-black">Our Top Projects</h2>
        <p className="text-[#3C3C3C] text-xl mt-2">
          Handpicked properties in vibrant cities — filtered by <br />
          quality, price, and demand.
        </p>
      </motion.div>

      {/* Animated Card Container */}
      <motion.div
        className="relative z-10 w-full flex justify-center overflow-x-auto md:overflow-visible px-2"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      >
        <motion.div
          className="flex gap-5"
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            minWidth: cardWidth * 1.5,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {visibleCards.map((proj, idx) => {
            const isActive = idx === 1;
            return (
              <div
                key={getIndex(activeIndex - 1 + idx)}
                className={clsx(
                  "relative rounded-2xl overflow-hidden will-change-transform shadow-lg flex-shrink-0 transition-all duration-300",
                  isActive ? "scale-[1.02] shadow-2xl z-20" : "opacity-90"
                )}
                style={{
                  width: cardWidth,
                  height: cardWidth > 480 ? 479 : Math.round(cardWidth * 0.65),
                  minWidth: 260,
                  maxWidth: 732,
                }}
              >
                <div
                  className={clsx(
                    "w-full h-full transition-transform duration-300",
                    isActive ? "scale-[1.02] shadow-2xl z-20" : "opacity-90"
                  )}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* Arrow SVG at top right of card (only for active & featured) */}
                  {isActive && (
                    <div className="absolute top-8 right-10 z-30">
                      <Image
                        src="/assets/arrow-up-right.svg"
                        alt="arrow"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                      priority={isActive}
                    />
                  </div>

                  {/* Overlay content */}
                  <div
                    className={clsx(
                      "absolute bottom-5 left-5 rounded-lg text-white shadow-lg",
                      isActive ? "bg-[#5177FF]" : "bg-black/60"
                    )}
                    style={{
                      fontSize: 12,
                      display: "flex",
                      width: cardWidth > 480 ? "413.333px" : "100%",
                      maxWidth: cardWidth > 480 ? "90%" : "100%",
                      left: cardWidth > 480 ? 20 : 0,
                      right: cardWidth > 480 ? "auto" : 0,
                      padding: "10px 24px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      boxSizing: "border-box",
                    }}
                  >
                    <h3 className="font-medium text-xl">{proj.title}</h3>
                    <p className="text-base mt-1">{proj.desc}</p>
                    <div className="flex text-sm gap-1 flex-wrap mt-2">
                      <Tag
                        icon={
                          <Image
                            src="/assets/bed.svg"
                            alt="bed"
                            width={16}
                            height={16}
                            className="inline-block"
                          />
                        }
                        label="2-Bedroom"
                      />
                      <Tag
                        icon={
                          <Image
                            src="/assets/bath.svg"
                            alt="bath"
                            width={16}
                            height={16}
                            className="inline-block"
                          />
                        }
                        label="2-Bathroom"
                      />
                      <Tag
                        icon={
                          <Image
                            src="/assets/villa.svg"
                            alt="villa"
                            width={16}
                            height={16}
                            className="inline-block"
                          />
                        }
                        label="Villa"
                      />
                    </div>
                    <div className="mt-2 font-normal">
                      <div className="text-white/70 text-sm">Price</div>
                      <div className="text-xl">{proj.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Pagination */}
      <div className="relative z-10 mt-10 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300",
              i === activeIndex ? "bg-[#5177FF]" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="relative z-10 mt-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
      >
        <button className="mt-6 px-6 py-3 rounded-full bg-[#5271FF] text-white font-semibold text-xl hover:bg-[#3c5ee0] border-[3px] border-[#9daffd] shadow-md transition-all duration-300">
          Browse More Properties
        </button>
      </motion.div>
    </section>
  );
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="bg-white text-black text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
      {icon}
      {label}
    </span>
  );
}
