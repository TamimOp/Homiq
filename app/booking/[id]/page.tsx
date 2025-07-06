"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { properties } from "@/data/properties";
import Image from "next/image";
import { ArrowLeft, Info, Users, CalendarDays } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface BookingData {
  monthlyRent: number;
  utilities: number;
  monthlySubtotal: number;
  cleaningFee: number;
  totalCharges: number;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
}

export default function BookingReview() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id as string));
  const [bookingData, setBookingData] = useState<BookingData>({
    monthlyRent: 2990.0,
    utilities: 250.7,
    monthlySubtotal: 3340.7,
    cleaningFee: 225.0,
    totalCharges: 3340.7,
    checkInDate: "31.12.2021",
    checkOutDate: "31.02.2022",
    guests: 1,
  });

  useEffect(() => {
    try {
      const savedBookingData = localStorage.getItem("bookingData");
      if (savedBookingData) {
        const parsed = JSON.parse(savedBookingData);
        setBookingData(parsed);
      }
    } catch (error) {
      console.error("Error loading booking data:", error);
    }
  }, []);

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
      className="min-h-screen bg-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div className="bg-white border-b" variants={sectionVariants}>
        <div className="max-w-7xl mx-auto px-6 py-4">
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

      {/* Main Content */}
      <motion.div
        className="flex justify-between items-start gap-6 px-10 py-8 bg-white min-h-screen"
        variants={sectionVariants}
      >
        {/* LEFT SECTION */}
        <motion.div
          className="flex-1 max-w-2xl space-y-8"
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-semibold text-gray-900">
            Booking review
          </h2>

          <div className="space-y-5">
            {/* Charges */}
            <div className="flex justify-between items-center text-base">
              <span className="text-gray-700">Rent per month</span>
              <span className="font-medium text-gray-900">
                £{bookingData.monthlyRent.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-base">
              <span className="flex items-center gap-1 text-gray-700">
                Utilities per month <Info size={14} className="text-gray-400" />
              </span>
              <span className="font-medium text-gray-900">
                £{bookingData.utilities.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-base pt-2 border-t border-gray-300">
              <span className="font-semibold text-gray-900">
                Monthly subtotal
              </span>
              <span className="font-semibold text-gray-900">
                £{bookingData.monthlySubtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-base pt-4">
              <span className="flex items-center gap-1 text-gray-700">
                One-time cleaning fee{" "}
                <Info size={14} className="text-gray-400" />
              </span>
              <span className="font-medium text-gray-900">
                £{bookingData.cleaningFee.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-base pt-2 border-t border-gray-300">
              <span className="font-semibold text-gray-900">Total charges</span>
              <span className="font-semibold text-gray-900">
                £{bookingData.totalCharges.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold pt-4 border-t-2 border-gray-400">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">£4225.00</span>
            </div>
          </div>

          {/* Confirm button */}
          <div className="pt-4 flex flex-col items-center">
            <motion.button
              className="bg-[#4262FF] hover:bg-[#304de0] transition px-8 py-4 rounded-full text-white font-medium text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Confirm and pay
            </motion.button>
            <p className="text-sm text-gray-600 text-center mt-3">
              You won&apos;t be charged yet
            </p>
          </div>
        </motion.div>

        {/* RIGHT SECTION: Summary Card */}
        <motion.div
          className="bg-[#F2F0F2] rounded-3xl overflow-hidden shadow-lg"
          style={{ width: "522px", height: "718px" }}
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-[280px] relative">
            <Image
              src="/assets/pic1.png"
              alt="Room"
              fill
              className="object-cover rounded-t-3xl"
            />
          </div>
          <div className="p-8 space-y-6 text-sm h-[438px] flex flex-col justify-between">
            {/* Dates & Guests */}
            <div className="space-y-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2 font-medium">
                    Move in
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} className="text-gray-600" />
                    <span className="text-base font-medium">
                      {bookingData.checkInDate}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2 font-medium">
                    Move out
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} className="text-gray-600" />
                    <span className="text-base font-medium">
                      {bookingData.checkOutDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users size={18} />
                <span className="text-base font-medium">Guests</span>
                <span className="font-semibold text-base">
                  {bookingData.guests}
                </span>
              </div>

              <p className="text-gray-700 text-base">
                All utilities are included
              </p>
            </div>

            {/* Timeline */}
            <div className="flex-1">
              <h3 className="font-semibold mb-4 text-base">Payment timeline</h3>
              <div className="space-y-6 border-l-2 border-gray-300 pl-6 relative">
                {/* Dot 1 */}
                <div className="absolute w-3 h-3 bg-black rounded-full left-[-7px] top-2" />
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-base text-gray-900">
                      Reserve this apartment
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Due now</p>
                  </div>
                  <p className="font-bold text-base text-gray-900">£4001.70</p>
                </div>

                {/* Dot 2 */}
                <div className="absolute w-3 h-3 bg-black rounded-full left-[-7px] top-[120px]" />
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-base text-gray-900">
                      After move-out
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <p className="text-sm text-gray-500">
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
    </motion.div>
  );
}
