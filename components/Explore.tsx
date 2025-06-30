"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export default function Explore() {
  return (
    <section
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

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-white text-[32px] md:text-[40px] font-semibold leading-tight md:leading-snug">
          Explore the local area
        </h2>
        <p className="text-white text-base md:text-lg font-normal mt-2">
          Discover apartments and homes that match your lifestyle{" "}
          <br className="hidden md:block" />— with powerful filters, interactive
        </p>

        {/* Search Input */}
        <div className="mt-8 mx-auto w-full max-w-xl bg-white rounded-full flex items-center overflow-hidden px-6 py-3 shadow-md">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Location"
            className="flex-1 px-3 text-gray-700 placeholder:text-gray-400 outline-none border-none bg-transparent text-base"
          />
          <button className="bg-[#4F46E5] text-white font-medium text-base px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
