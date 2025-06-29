"use client";

import Image from "next/image";

const Location = () => {
  return (
    <section className="w-full bg-[url('/assets/mapBg.png')] bg-no-repeat bg-cover bg-center py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-35">
        {/* Left Side - Map with Pin */}
        <div className="relative w-full max-w-xl rounded-[20px] border-2 border-blue-500 shadow-xl overflow-hidden">
          <Image
            src="/assets/map.png"
            alt="Map"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Pin Marker */}
          <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <div className="w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-md mx-auto">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">
                🏠
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full shadow-md inline-block">
              Dream Home 😊
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            Discover Properties <br />
            with the Best Value
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore neighborhoods across the UK with high rental value, low
            crime, and lifestyle perks.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-medium rounded-full shadow-md transition hover:brightness-105">
            Find Nearest Properties
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;
