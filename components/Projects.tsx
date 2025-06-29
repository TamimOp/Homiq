"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

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

  const CARD_WIDTH = 732;
  const total = projects.length;
  const getIndex = (i: number) => (i + total) % total;
  const visibleCards = [
    projects[getIndex(activeIndex - 1)],
    projects[getIndex(activeIndex)],
    projects[getIndex(activeIndex + 1)],
  ];

  return (
    <section className="relative w-full bg-[#F5F7FF] py-24 overflow-hidden">
      {/* Background Ellipse */}
      <Image
        src="/assets/projectEllipseBg.png"
        alt="bg"
        fill
        className="absolute left-0 top-0 h-full w-auto object-left object-contain pointer-events-none"
        style={{ minWidth: 600, maxWidth: 900 }}
      />

      <div className="relative z-10 text-center mb-14 px-4">
        <h2 className="text-5xl font-bold text-black">Our Top Projects</h2>
        <p className="text-[#3C3C3C] text-xl mt-2">
          Handpicked properties in vibrant cities — filtered by <br />
          quality, price, and demand.
        </p>
      </div>

      {/* Card Container with Framer Motion */}
      <div className="relative z-10 w-full flex justify-center">
        <motion.div
          className="flex gap-5"
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                style={{ width: CARD_WIDTH, height: 479 }}
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
                      width: "413.333px",
                      padding: "10px 24px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
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
      </div>

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
      <div className="relative z-10 mt-10 text-center">
        <button className="bg-[#5271FF] hover:bg-[#3f5ed6] text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition-all duration-300">
          Browse More Properties
        </button>
      </div>
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
