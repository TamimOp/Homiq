"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#f5f7ff] overflow-hidden pb-20">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 pt-24">
        {/* Top Section - Badge, Heading, Subheading */}
        <div
          className="text-center relative"
          style={{
            backgroundImage: "url(/assets/grid.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Background overlay for better text readability (optional) */}
          <div className="absolute inset-0 bg-white/30 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10 py-8">
            {/* Top Badge */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-white text-sm px-4 py-1 rounded-full shadow-md font-medium text-gray-700">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                Based on 10,000+ reviews on
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
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
              with Ease and Professional Guidance
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Discover apartments and homes that match your lifestyle — with
              powerful filters, interactive
            </p>
          </div>
        </div>

        {/* Search Form Section */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Find the best place
          </h3>

          {/* Filter Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Enter type"
              className="px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
            />
            <input
              type="text"
              placeholder="Price"
              className="px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
            />
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
            />
            <input
              type="text"
              placeholder="2 Bed"
              className="px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f6ff4]"
            />
          </div>

          {/* Filter Tags */}
          <div className="mt-5">
            <label className="font-medium text-gray-700 mb-2 block">
              Filter:
            </label>
            <div className="flex flex-wrap gap-2">
              {["City", "House", "Residential", "Apartment"].map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-sm ${
                    tag === "City"
                      ? "bg-[#e0e9ff] text-[#4f6ff4]"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tabs + Button */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex bg-gray-100 rounded-full text-sm font-medium">
              {["Rent", "Buy", "Sell"].map((tab, i) => (
                <button
                  key={i}
                  className={`px-6 py-2 rounded-full ${
                    tab === "Rent"
                      ? "bg-white text-[#4f6ff4] shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button className="px-6 py-3 bg-[#4f6ff4] text-white font-semibold rounded-full hover:bg-[#3c58d1] transition text-sm w-full lg:w-auto">
              Browse Properties
            </button>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-60 text-gray-600 text-sm font-medium">
          <span>SKYLINE</span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            4.5 <span className="text-xs">10k+ RATINGS</span>
          </span>
          <span>TNW</span>
          <span>9TO5Mac</span>
          <span>lifehacker</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
