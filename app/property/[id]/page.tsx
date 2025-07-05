"use client";

import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BookingSection from "@/components/BookingSection";
import { motion, Variants } from "framer-motion";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id as string));

  // Animation variants
  const pageVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const galleryVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants: Variants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!property) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center">
          <motion.h1
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Property Not Found
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <Link
              href="/BrowsePage"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Back to Browse
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-[#f9fafe]"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div className="bg-white shadow-sm" variants={headerVariants}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
            <Link
              href="/BrowsePage"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              Back to Browse
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Component 1: Gallery */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-8"
        variants={galleryVariants}
      >
        <div className="mb-8">
          <div className="flex gap-4 h-96">
            {/* Left: Main Image */}
            <motion.div
              className="flex-1 relative rounded-2xl overflow-hidden"
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/assets/pic1.png"
                alt="Main property image"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right: Grid of 4 images */}
            <motion.div
              className="w-96 grid grid-cols-2 gap-2"
              variants={galleryVariants}
            >
              <motion.div
                className="relative rounded-lg overflow-hidden"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/assets/pic2.png"
                  alt="Property image 2"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative rounded-lg overflow-hidden"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/assets/pic3.jpg"
                  alt="Property image 3"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative rounded-lg overflow-hidden"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/assets/pic4.jpg"
                  alt="Property image 4"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative rounded-lg overflow-hidden"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/assets/pic5.jpg"
                  alt="Property image 5"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Component 2: Information Section */}
      <motion.div className="max-w-7xl mx-auto px-6" variants={sectionVariants}>
        <BookingSection />
      </motion.div>

      {/* Component 3: Location */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-14"
        variants={sectionVariants}
      >
        <div className="rounded-2xl">
          <motion.h2
            className="text-5xl text-center font-bold text-gray-800 mb-20"
            variants={titleVariants}
          >
            Location
          </motion.h2>
          <motion.div
            className="relative w-full h-96 rounded-lg overflow-hidden"
            variants={imageVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/assets/map3.png"
              alt="Property location map"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
