"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const current = reviews[index];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold max-w-xl">
          What Our Clients Say <br /> about us
        </h2>
        <div className="flex items-center gap-2">
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
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
          ))}
          <p className="ml-2 text-sm text-gray-500">
            More than <span className="font-semibold">500+</span>
            <br /> Client Reviews
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full gap-6">
          <Image
            src={current.image}
            alt={current.name}
            width={280}
            height={280}
            className="rounded-2xl object-cover"
          />
          <div className="bg-[#f4f6ff] rounded-2xl p-6 md:p-10 max-w-2xl">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800 mb-6">
              {current.review}
            </p>
            <p className="text-lg font-semibold text-black mb-1">
              {current.name}
            </p>
            <p className="text-sm text-[#5271FF] font-medium">{current.role}</p>
          </div>
        </div>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
