"use client";

import Image from "next/image";

const features = [
  {
    title: "Property Insurance",
    desc: "Secure listings with trusted partners for peace of mind.",
    icon: "/assets/heroicons-solid/home.svg",
  },
  {
    title: "Best Price",
    desc: "We show listings with the most competitive rates.",
    icon: "/assets/heroicons-solid/dollar.svg",
  },
  {
    title: "Lowest Commission",
    desc: "Save more on purchases with our platform-first commission model.",
    icon: "/assets/heroicons-solid/receipt.svg",
  },
  {
    title: "Overall Control",
    desc: "Manage your listings, schedule viewings, and track favorites.",
    icon: "/assets/heroicons-solid/setting.svg",
  },
];

export default function WhyBest() {
  return (
    <section className="bg-[#f9faff] px-6 py-24">
      {/* Main container with flex, width 1439px, padding 0px 80px */}
      <div className="flex w-[1439px] px-20 justify-center items-center gap-[60px] mx-auto">
        {/* LEFT CARD with specific dimensions and styling */}
        <div className="flex h-[754px] p-[50px] flex-col items-start gap-[26px] flex-1 bg-white rounded-[12px] border border-[#F1F1F3] shadow-[6px_6px_25px_1px_rgba(0,0,0,0.26)]">
          <h2 className="text-5xl leading-tight font-bold text-black">
            Why We are the <br /> best in the market
          </h2>
          <p className="text-[#4B4B4B] text-xl leading-relaxed">
            Discover apartments and homes that match your lifestyle — with
            powerful filters, interactive
          </p>

          <button className="bg-[#5271FF] text-white px-6 py-2.5 text-xl font-semibold hover:bg-[#3f5be0] transition rounded-[50px] border-[3px] border-[rgb(173,187,249)] shadow-[0px_-0.301px_0.241px_-1.167px_rgba(71,136,255,0.68)_inset,0px_-1.144px_0.915px_-2.333px_rgba(71,136,255,0.61)_inset,0px_-5px_4px_-3.5px_rgba(71,136,255,0.30)_inset,0px_0.602px_0.602px_-1.25px_rgba(0,0,0,0.18),0px_2.289px_2.289px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)]">
            Explore More
          </button>

          <div className="overflow-hidden rounded-xl flex-1 w-full">
            <Image
              src="/assets/appartment1.png"
              alt="Apartment"
              width={740}
              height={688}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT FEATURES GRID */}
        <div className="grid grid-cols-2 gap-0">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex w-[305.767px] h-[260px] p-[15px_24px] flex-col items-start gap-4 flex-shrink-0"
            >
              <div className="w-[54px] h-[54px] rounded-full bg-[#5271FF] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={31}
                  height={31}
                />
              </div>
              <h3 className="text-2xl font-semibold text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-lg text-[#555] leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
