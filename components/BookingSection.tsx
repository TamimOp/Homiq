"use client";

import { useState } from "react";
import { CalendarDays, Users, Info, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface BookingSectionProps {
  propertyId?: string;
}

export default function BookingSection({
  propertyId = "1",
}: BookingSectionProps) {
  const [guests, setGuests] = useState(1);
  const [checkInDate] = useState("31.12.2021");
  const [checkOutDate] = useState("31.02.2022");
  const router = useRouter();

  // Pricing data
  const monthlyRent = 2990.0;
  const utilities = 250.7;
  const monthlySubtotal = monthlyRent + utilities;
  const cleaningFee = 225.0;
  const totalCharges = monthlySubtotal + cleaningFee;

  const handleContinueBooking = () => {
    const bookingData = {
      monthlyRent,
      utilities,
      monthlySubtotal,
      cleaningFee,
      totalCharges,
      checkInDate,
      checkOutDate,
      guests,
    };

    // Store booking data in localStorage to pass to next page
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    router.push(`/booking/${propertyId}`);
  };

  return (
    <div className="flex flex-col xl:flex-row justify-between items-start gap-10 py-12 min-h-screen px-4 sm:px-6 lg:px-8">
      {/* LEFT: Details */}
      <motion.div
        className="w-full xl:w-1/2 space-y-6 sm:space-y-8 lg:space-y-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold">
            Rhoncus suspendisse
          </h1>
          <p className="text-gray-600 mt-1 text-base sm:text-lg">
            London, Notting Hill
          </p>
        </div>

        <div className="flex flex-col sm:flex-row text-sm sm:text-base text-gray-700 items-start sm:items-center gap-3 sm:gap-0">
          {/* Left side - Bed and Bath */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Image src="/assets/bed.svg" alt="Bed" width={16} height={16} />
              <span>2 bedroom</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/bath.svg" alt="Bath" width={16} height={16} />
              <span>2 bath</span>
            </div>
          </div>

          {/* Right side - Other details */}
          <div className="flex flex-wrap items-center gap-2 sm:ml-12">
            <span>500 sq.ft</span>
            <span className="hidden sm:inline">|</span>
            <span>City view</span>
            <span className="hidden sm:inline">|</span>
            <span>3rd floor</span>
            <span className="hidden sm:inline">|</span>
            <span>Elevator</span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Description
          </h2>
          <p className="text-gray-800 text-sm sm:text-base">
            A truly global city, London has long been considered a cutting-edge
            metropolis and hub for culture, style and finance. With each
            borough, Tube zone and neighborhood of London sporting its own vibe
            and lifestyle advantages, it can be downright difficult to settle on
            where to look for a furnished apartment in London. Whether
            you&apos;re a digital nomad looking for a studio apartment in London
            or just seeking a month to month rental in London, Blueground has
            you covered.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-medium">In sed</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            In nullam eget urna suspendisse odio nunc. Eu sodales vestibulum,
            donec rutrum justo, amet porttitor vitae et. Interdum consectetur
            dictum mattis gravida sed vulputate. Tempus sagittis cras sagittis
            viverra erat proin duis enim.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-medium">
            Adipiscing risus, fermentum
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Laoreet risus accumsan pellentesque lacus, in nulla eu elementum.
            Mollis enim fringilla aenean diam tellus diam morbi ipsum placerat.
          </p>
        </div>
      </motion.div>

      {/* RIGHT: Booking Card */}
      <motion.div
        className="w-full max-w-[470px] xl:w-[470px] bg-white text-sm flex flex-col mx-auto xl:mx-0"
        style={{
          display: "flex",
          padding: "40px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          borderRadius: "30px",
          background: "#FFF",
          boxShadow: "6px 6px 25px 1px rgba(0, 0, 0, 0.26)",
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold w-full text-center mb-6">
          £{monthlySubtotal.toFixed(0)} / Month
        </h3>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
          <div>
            <p className="text-base sm:text-lg font-bold text-black mb-1">
              CHECK-IN
            </p>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-black" />
              <span>{checkInDate}</span>
            </div>
          </div>
          <div>
            <p className="text-base sm:text-lg font-bold text-black mb-1">
              CHECK-OUT
            </p>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-black" />
              <span>{checkOutDate}</span>
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 w-full">
          <Users size={16} />
          <span className="text-base sm:text-lg font-bold">Guests</span>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Plus
              size={16}
              onClick={() => setGuests((g) => g + 1)}
              className="cursor-pointer"
            />
          </motion.div>
          <span className="font-medium">{guests}</span>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Minus
              size={16}
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="cursor-pointer"
            />
          </motion.div>
        </div>

        <div className="w-full">
          <p className="text-black text-base sm:text-lg text-left">
            All utilities are included
          </p>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2 text-black w-full">
          <div className="flex justify-between items-center">
            <span className="text-base sm:text-lg">Average monthly rent</span>
            <span className="text-right text-base sm:text-lg">
              £{monthlyRent.toFixed(0)}
              <br />
              <span className="text-sm text-gray-500">incl. VAT</span>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 font-bold">
              Pay upon booking <Info size={14} className="text-black" />
            </span>
            <span className="text-right text-base sm:text-lg font-medium">
              £{totalCharges.toFixed(2)}
              <br />
              <span className="text-sm text-gray-500">incl. VAT</span>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex text-base sm:text-lg items-center gap-1">
              Total costs <Info size={14} className="text-black" />
            </span>
            <span className="text-right text-base sm:text-lg">
              £{totalCharges.toFixed(2)}
              <br />
              <span className="text-sm text-gray-500">incl. VAT</span>
            </span>
          </div>

          <p className="text-blue-600 text-sm cursor-pointer mt-1">Show more</p>
        </div>

        {/* CTA */}
        <div className="w-full flex justify-center">
          <motion.button
            className="px-6 sm:px-8 py-3 bg-[#4262FF] text-white font-medium rounded-full text-base sm:text-lg hover:bg-[#2e4bdd] transition w-full sm:w-auto"
            onClick={handleContinueBooking}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue booking
          </motion.button>
        </div>

        <p className="text-center text-sm text-[#181A18] w-full">
          When you book this apartment, your reservation will be confirmed
          instantly
        </p>
      </motion.div>
    </div>
  );
}
