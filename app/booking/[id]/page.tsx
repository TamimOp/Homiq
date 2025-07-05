"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { properties } from "@/data/properties";
import Image from "next/image";
import { ArrowLeft, Info, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function BookingReview() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id as string));

  // Booking state
  const [checkIn] = useState("31.12.2021");
  const [checkOut] = useState("31.02.2022");
  const [guests] = useState(1);

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
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants: Variants = {
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

  const cardVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
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

  if (!property) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Property Not Found
          </h1>
          <Link
            href="/BrowsePage"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Back to Browse
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div className="bg-white border-b" variants={sectionVariants}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/property/${id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              Back to Property
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Booking Review */}
          <motion.div className="space-y-6" variants={sectionVariants}>
            <motion.h1
              className="text-4xl font-bold text-gray-900"
              variants={sectionVariants}
            >
              Booking review
            </motion.h1>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm"
              variants={cardVariants}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Rent per month</span>
                  <span className="font-medium">£2990.00</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700">Utilities per month</span>
                    <Info size={16} className="text-gray-400" />
                  </div>
                  <span className="font-medium">£250.70</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium">Monthly subtotal</span>
                  <span className="font-bold">£3340.70</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700">One-time cleaning fee</span>
                    <Info size={16} className="text-gray-400" />
                  </div>
                  <span className="font-medium">£225.00</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium">Total charges</span>
                  <span className="font-bold">£3340.70</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    £4225.00
                  </span>
                </div>
              </div>

              <motion.button
                className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm and pay
              </motion.button>

              <p className="text-center text-sm text-gray-600 mt-3">
                You won&apos;t be charged yet
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Property Details */}
          <motion.div className="space-y-6" variants={sectionVariants}>
            {/* Property Image */}
            <motion.div
              className="relative w-full h-64 rounded-lg overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/pic1.png"
                alt={property.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Booking Details */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm space-y-4"
              variants={cardVariants}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar size={16} />
                    <span className="font-medium">Move in</span>
                  </div>
                  <div className="text-lg font-bold">{checkIn}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar size={16} />
                    <span className="font-medium">Move out</span>
                  </div>
                  <div className="text-lg font-bold">{checkOut}</div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Users size={16} />
                  <span className="font-medium">Guests</span>
                </div>
                <div className="text-lg font-bold">{guests}</div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-gray-700">All utilities are included</p>
              </div>
            </motion.div>

            {/* Payment Timeline */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm"
              variants={cardVariants}
            >
              <h3 className="text-lg font-bold mb-4">Payment timeline</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Reserve this apartment</p>
                        <p className="text-sm text-gray-600">Due now</p>
                      </div>
                      <span className="font-bold">£4001.70</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">After move-out</p>
                        <div className="flex items-center gap-1">
                          <p className="text-sm text-gray-600">
                            Receive your £400.00 deposit back within 30 days
                          </p>
                          <Info size={14} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
