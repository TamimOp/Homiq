"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Approach = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#f9faff] py-32 overflow-hidden" ref={ref}>
      {/* Left Ellipse Background */}
      <div className="absolute -left-[100px] -top-5 w-[600px] h-[600px] z-0">
        <Image
          src="/assets/approachEllipseBg.png"
          alt="Ellipse Background"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Stat */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-8xl font-bold text-[#4f6ff4]">40%</h2>
          <p className="mt-4 text-gray-600 text-xl leading-relaxed">
            Users find a perfect match 40% quicker than on other <br />{" "}
            platforms — thanks to real-time filters and personalized <br />
            suggestions.
          </p>

          {/* Avatars */}
          <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
            {["dp1.jpg", "dp2.jpg", "dp3.jpg", "dp4.jpg"].map((img, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#73737342] shadow-sm"
              >
                <Image
                  src={`/assets/${img}`}
                  alt={`User ${i + 1}`}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-5xl font-semibold text-black">Our Approach</h3>
          <p className="mt-4 text-gray-700 text-xl leading-relaxed">
            We make the home-finding experience simple and personalized using
            intelligent filters, lifestyle mapping, and verified listings.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-[#4f6ff4] text-white font-semibold text-xl shadow-md hover:bg-[#3c5ee0] transition">
            Contact Us
          </button>

          <p className="mt-6 text-gray-700 text-xl leading-relaxed italic">
            &quot;Romiq is built to make finding a home easier, safer, and
            smarter — for everyone.&quot;
          </p>

          <p className="mt-2 font-semibold text-xl text-gray-900">
            — Bendel, CEO & Founder of Homiq
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
