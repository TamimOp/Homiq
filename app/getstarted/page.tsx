"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GetStarted = () => {
  // Add ref and inView
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden mb-20 mx-4 sm:mx-6 lg:mx-12 xl:mx-16 mt-8 pt-24"
      style={{
        borderRadius: "30px",
        background:
          "radial-gradient(42.48% 77.94% at 50.04% 125.84%, rgba(195, 237, 255, 0.68) 0%, rgba(211, 219, 255, 0.27) 100%)",
      }}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="relative z-10 w-full px-4 pb-12"
          style={{
            backgroundImage: "url(/assets/heroBgEllipse.png)",
            backgroundSize: "120%",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Top Section - Badge */}
          <div className="text-center relative">
            <div
              className="relative z-10 py-8 max-w-4xl mx-auto"
              style={{
                backgroundImage: "url(/assets/grid.png)",
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Top Badge */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 bg-white text-sm px-4 py-1 rounded-full shadow-md font-medium text-gray-700">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  Based on 10,000+ reviews on
                </div>
              </div>

              {/* Login Form */}
              <form
                className="flex flex-col justify-center items-center gap-10"
                style={{
                  width: "866px",
                  padding: "90px 80px",
                  background: "rgba(255,255,255,0.85)",
                  borderRadius: "24px",
                  boxShadow: "0 8px 32px rgba(80, 112, 255, 0.10)",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "40px",
                }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
                <div className="flex flex-col gap-6 w-full max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
                      style={{
                        borderRadius: "10px",
                        background: "#FFF",
                        boxShadow:
                          "6px 4px 8.3px 0px rgba(154, 154, 154, 0.16)",
                        border: "none",
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
                      style={{
                        borderRadius: "10px",
                        background: "#FFF",
                        boxShadow:
                          "6px 4px 8.3px 0px rgba(154, 154, 154, 0.16)",
                        border: "none",
                      }}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition text-base"
                  style={{
                    background:
                      "linear-gradient(90deg, #5271FF 0.29%, #4C68EB 54.62%, #314499 100.29%)",
                    border: "3px solid #5271FF7A",
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Logos Section */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-20 opacity-100">
            <Image
              src="/assets/company1.svg"
              alt="Company 1"
              width={80}
              height={40}
            />
            <Image
              src="/assets/company2.svg"
              alt="Company 2"
              width={105}
              height={23}
            />
            <Image
              src="/assets/company3.svg"
              alt="Company 3"
              width={68}
              height={17}
            />
            <div className="flex items-center gap-2">
              <Image
                src="/assets/company4.1.svg"
                alt="Company 4.1"
                width={48}
                height={16}
              />
              <Image
                src="/assets/company4.2.svg"
                alt="Company 4.2"
                width={44}
                height={16}
              />
            </div>
            <Image
              src="/assets/company5.svg"
              alt="Company 5"
              width={68}
              height={18}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
