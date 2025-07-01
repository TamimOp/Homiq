"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "Discover Properties with the Best Value",
    answer:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: "/assets/project2.png",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "To sell your property, you typically need proof of ownership, identification documents, and any relevant property certificates. Our agents will guide you through the complete documentation process.",
    image: "",
  },
  {
    question: "How can I contact an Homiq agent?",
    answer:
      "You can contact a Homiq agent through our website's contact form, by calling our support number, or by visiting one of our local offices. Our team is always ready to assist you.",
    image: "",
  },
  {
    question: "Discover Properties with the Best Value",
    answer:
      "Browse our listings to find properties that match your preferences and budget. Our platform offers advanced filters to help you discover the best value deals in your desired location.",
    image: "",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <motion.section
      ref={sectionRef}
      className="px-6 py-20 max-w-[1200px] mx-auto"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-5xl font-bold leading-snug text-black">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-gray-500 max-w-md text-base md:self-center">
          Find answers to common questions about Estatein&apos;s services,
          property listings, and the real estate process. We&apos;re here to
          provide clarity and assist you every step of the way.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            className={`transition-all overflow-hidden bg-white ${
              activeIndex === index ? "pb-5" : ""
            }`}
            style={{
              borderRadius: "11px",
              border: "2px solid #C9C9C9",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.15 + index * 0.08,
            }}
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
              <motion.div
                className="px-6 flex flex-col sm:flex-row justify-between gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
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
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
