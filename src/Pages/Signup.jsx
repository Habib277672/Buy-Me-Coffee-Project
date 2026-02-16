import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import logo from "../assets/Images/logo.png";
import membership from "../assets/Images/membership.png";
import shop from "../assets/Images/shop.png";
import support from "../assets/Images/support.png";

import userOne from "../assets/Images/userOne.jpg";
import userTwo from "../assets/Images/userTwo.jpg";
import userThree from "../assets/Images/userThree.jpg";
import userFour from "../assets/Images/userFour.jpg";

import { IoStarSharp } from "react-icons/io5";

export const Signup = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white md:flex-row md:bg-[#f0c9b0]">
      {/* Left Section */}
      <div className="relative hidden flex-col items-start bg-[#f0c9b0] px-6 py-6 md:w-[30%] lg:flex">
        <NavLink to="/" className="mb-4">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 object-contain"
            draggable={false}
          />
        </NavLink>

        <h1 className="mb-4 text-center text-lg font-medium text-neutral-800">
          Welcome to{" "}
          <span className="logo-font text-chaiBrown">Ek Chup Chai</span>
        </h1>

        {/* Cards */}
        <div className="relative flex h-100 w-full items-center justify-center">
          <AnimatePresence>
            <motion.div
              key={cardsData[activeCard].id}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="absolute flex h-[90%] w-[85%] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-2xl"
            >
              <h2 className="text-xl font-bold text-neutral-900 xl:mt-4 2xl:mt-5">
                {cardsData[activeCard].title}
              </h2>
              <p className="mt-2 max-w-45 text-xs text-neutral-700">
                {cardsData[activeCard].minDes}
              </p>
              <img
                src={cardsData[activeCard].src}
                alt="card"
                className="mt-4"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 flex w-full flex-row items-center">
          <div className="flex -space-x-4">
            {images?.map((image) => {
              return (
                <img
                  key={image.id}
                  src={image.src}
                  className="h-14 w-14 cursor-pointer rounded-full border-6 border-[#f0c9b0] object-cover transition duration-200 hover:z-10 hover:scale-[1.06] hover:opacity-90"
                />
              );
            })}
          </div>
          <div className="flex flex-col">
            <div className="text-chaiBrown mt-2 flex space-x-1">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <p className="mt-1 text-sm font-semibold">
              Loved by 1,000,000+ creators
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full flex-col rounded-none bg-white px-4 py-6 lg:ml-1 lg:w-[70%] lg:rounded-l-[80px] lg:py-10 lg:shadow-md">
        {/* Top Bar */}
        <div className="mb-4 flex items-center justify-between lg:mb-6">
          <NavLink to="/">
            <img className="h-12 w-12 lg:hidden" src={logo} alt="Logo" />
          </NavLink>
          <p className="text-[16px] text-neutral-800">
            Already have an account?{" "}
            <NavLink to="/login" className="text-black underline">
              Sign in
            </NavLink>
          </p>
        </div>

        {/* Center Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="mt-20 w-full max-w-xs md:mt-0 md:max-w-sm">
            <h2 className="mb-2 text-3xl font-bold text-neutral-900 md:text-4xl">
              Create your account
            </h2>
            <p className="text-md mb-2 text-neutral-500">
              Choose a username for your page.
            </p>

            {/* Domain Input */}
            <div className="flex items-center overflow-hidden rounded-lg bg-neutral-100 ring-neutral-800 transition duration-300 placeholder:text-neutral-500 hover:bg-neutral-200 focus:bg-transparent focus:ring-1 focus:ring-neutral-800 focus:ring-offset-1">
              <span className="px-3 text-sm font-bold whitespace-nowrap text-neutral-600">
                ekchupchai.com/
              </span>
              <input
                type="text"
                placeholder="yourname"
                className="flex flex-1 p-3 text-sm font-semibold text-neutral-800 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-chaiBrown px4 mt-3 w-full cursor-pointer rounded-full py-3 text-white transition duration-300 hover:opacity-90 active:scale-90"
            >
              Sign up
            </button>
            <p className="mt-3 text-xs text-neutral-500">
              By continuing, you agree to the{" "}
              <NavLink
                to="#"
                className="text-neutral-800 underline transition duration-300 hover:no-underline"
              >
                terms of service
              </NavLink>{" "}
              and{" "}
              <NavLink
                to="#"
                className="text-neutral-800 underline transition duration-300 hover:no-underline"
              >
                privacy policy
              </NavLink>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const images = [
  {
    id: 1,
    src: userOne,
  },
  {
    id: 2,
    src: userTwo,
  },
  {
    id: 3,
    src: userThree,
  },
  {
    id: 4,
    src: userFour,
  },
];

const cardsData = [
  {
    id: 1,
    title: "Shop",
    minDes: "A creative way to sell digital or physical items.",
    src: shop,
  },
  {
    id: 2,
    title: "Membership",
    minDes: "Offer memberships to your community or services.",
    src: membership,
  },
  {
    id: 3,
    title: "Support",
    minDes: "Receive support or donations easily.",
    src: support,
  },
];
