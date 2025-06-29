"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Discover Properties with the Best Value",
    answer:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: "/assets/project2.png",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer: "",
    image: "",
  },
  {
    question: "How can I contact an Homiq agent?",
    answer: "",
    image: "",
  },
  {
    question: "Discover Properties with the Best Value",
    answer: "",
    image: "",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="px-6 py-20 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:items-center">
        <h2 className="text-5xl font-bold leading-snug text-black">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-gray-500 max-w-md text-base md:self-center">
          Find answers to common questions about Estatein&apos;s services,
          property listings, and the real estate process. We&apos;re here to
          provide clarity and assist you every step of the way.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border border-gray-300 transition-all overflow-hidden bg-white ${
              activeIndex === index ? "pb-5" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left px-6 py-5 text-[17px] font-medium text-black text-2xl"
            >
              {item.question}
              {activeIndex === index ? (
                <ChevronUp size={22} />
              ) : (
                <ChevronDown size={22} />
              )}
            </button>

            {activeIndex === index && item.answer && (
              <div className="px-6 flex flex-col sm:flex-row justify-between gap-4 items-start">
                <p className="text-base text-gray-700 max-w-2xl leading-relaxed">
                  {item.answer}
                </p>
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Project Preview"
                    width={160}
                    height={100}
                    className="rounded-xl object-cover"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
