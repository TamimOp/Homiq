"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Rent");
  const tabs = ["Rent", "Buy", "Sell"];

  return (
    <section
      className="relative overflow-hidden mb-20 mx-4 sm:mx-6 lg:mx-12 xl:mx-16 mt-8 pt-24"
      style={{
        borderRadius: "30px",
        background:
          "radial-gradient(42.48% 77.94% at 50.04% 125.84%, rgba(195, 237, 255, 0.68) 0%, rgba(211, 219, 255, 0.27) 100%)",
      }}
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
        {/* Top Section - Badge, Heading, Subheading */}
        <div className="text-center relative">
          {/* Content */}
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
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-white text-sm px-4 py-1 rounded-full shadow-md font-medium text-gray-700">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                Based on 10,000+ reviews on
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Explore Your Ideal{" "}
              <span className="inline-flex items-center justify-center bg-white px-2 py-1 rounded-lg shadow-sm mx-1">
                <Image
                  src="/assets/homeLogo.svg"
                  alt="Home"
                  width={43}
                  height={49}
                  className="text-[#4f6ff4]"
                />
                ome
              </span>{" "}
              with <br />
              Ease and Professional Guidance
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Discover apartments and homes that match your lifestyle — with
              powerful filters, interactive
            </p>
          </div>
        </div>

        {/* Search Form Section */}
        <div
          className="mt-12 p-8 md:p-12 w-full max-w-6xl mx-auto"
          style={{
            borderRadius: "19px",
            background: "rgba(255, 255, 255, 0.62)",
            boxShadow: "0px 0px 56.7px 20px rgba(0, 0, 0, 0.20)",
          }}
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Find the best place
            </h3>

            {/* Tabs with sliding underline */}
            <div className="relative flex justify-between bg-white rounded-xl px-4 py-2 w-[220px] shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 flex-1 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab ? "text-[#4f6ff4]" : "text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}

              {/* Underline */}
              <motion.div
                animate={{
                  x:
                    tabs.indexOf(activeTab) *
                    (220 / tabs.length - 32 / tabs.length),
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 0.8,
                }}
                className="absolute bottom-0.5 left-4 h-[2px] bg-[#4f6ff4] rounded-full"
                style={{
                  width: `${220 / tabs.length - 16}px`,
                }}
              />
            </div>
          </div>

          {/* Filter Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Looking For
              </label>
              <input
                type="text"
                placeholder="Enter type"
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
                style={{
                  borderRadius: "10px",
                  background: "#FFF",
                  boxShadow: "6px 4px 8.3px 0px rgba(154, 154, 154, 0.16)",
                  border: "none",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="text"
                placeholder="Price"
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
                style={{
                  borderRadius: "10px",
                  background: "#FFF",
                  boxShadow: "6px 4px 8.3px 0px rgba(154, 154, 154, 0.16)",
                  border: "none",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
                style={{
                  borderRadius: "10px",
                  background: "#FFF",
                  boxShadow: "6px 4px 8.3px 0px rgba(154, 154, 154, 0.16)",
                  border: "none",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of rooms
              </label>
              <input
                type="text"
                placeholder="2 Bed"
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
                style={{
                  borderRadius: "10px",
                  background: "#FFF",
                  boxShadow: "6px 4px 8.3px 0px rgba(154, 154, 154, 0.16)",
                  border: "none",
                }}
              />
            </div>
          </div>

          {/* Filter Tags and Button */}
          <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Filter:</label>
              <div className="flex flex-wrap gap-2">
                {["City", "House", "Residential", "Apartment"].map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      tag === "City"
                        ? "bg-[#e0e9ff] text-[#4f6ff4]"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition text-sm w-full lg:w-auto"
              style={{
                background:
                  "linear-gradient(90deg, #5271FF 0.29%, #4C68EB 54.62%, #314499 100.29%)",
                border: "3px solid #5271FF7A",
              }}
            >
              Browse Properties
            </button>
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
    </section>
  );
};

export default Hero;
