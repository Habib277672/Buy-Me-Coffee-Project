import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { IoSearch } from "react-icons/io5";

export const NavBar = () => {
  const [isDropDownOpen, SetIsDropDownOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-100 flex w-full items-center justify-between border-b border-neutral-100 bg-white px-4 py-2 antialiased sm:px-6 md:py-4">
        {/* Desktop Nav */}
        {/* Left Side Items */}
        <div className="hidden items-center gap-8 text-base font-semibold text-neutral-900 md:flex">
          <NavLink
            to="#"
            className="hover:text-chaiBrown transition duration-300"
          >
            FAQ
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-chaiBrown flex items-center gap-2 transition duration-300"
          >
            Wall of <FaRegHeart className="text-chaiBrown text-base" />
          </NavLink>

          <div className="relative z-101">
            <div
              onClick={() => SetIsDropDownOpen(!isDropDownOpen)}
              className="hover:text-chaiBrown flex cursor-pointer items-center gap-2 transition duration-300"
            >
              <span>Resources</span>
              <FiChevronDown className="text-base" />
            </div>
            <AnimatePresence>
              {/* DropDown */}
              {isDropDownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-10 left-0 z-105 w-54 space-y-4 rounded-xl border border-neutral-100 bg-white p-4 shadow-xl"
                >
                  <NavLink
                    to="#"
                    className="text-md hover:text-chaiBrown transtion flex items-center gap-2 duration-300"
                  >
                    <FiHelpCircle className="text-lg" />{" "}
                    <span>Help Center</span>
                  </NavLink>

                  <NavLink
                    to="#"
                    className="text-md hover:text-chaiBrown transtion flex items-center gap-2 duration-300"
                  >
                    <FaApple className="text-lg" /> <span>IOS</span>
                  </NavLink>

                  <NavLink
                    to="#"
                    className="text-md hover:text-chaiBrown transtion flex items-center gap-2 duration-300"
                  >
                    <FaAndroid className="text-lg" /> <span>Android</span>
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center Item Logo */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex">
          <div className="flex items-center gap-0.5 font-semibold">
            <NavLink to="/" className="flex items-center gap-0.5">
              <img
                src="/Images/logo.png"
                alt="Logo Image"
                className="h-12 w-12 object-contain"
                draggable={false}
              />

              <h1 className="logo-font text-chaiBrown pt-1 text-lg leading-none">
                Ek Chup Chai
              </h1>
            </NavLink>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="relative">
            <IoSearch className="absolute top-2.5 left-3 text-base text-neutral-600" />
            <input
              type="search"
              placeholder="Search Creators "
              className="rounded-full border-none bg-neutral-100 p-2 px-4 pl-10 text-sm transition duration-300 outline-none placeholder:text-left placeholder:font-semibold hover:bg-neutral-200"
            />
          </div>
          <NavLink
            to="/login"
            className="hover:text-chaiBrown transition duration-300"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="hover:text-chaiBrown transition duration-300"
          >
            Sign up
          </NavLink>
        </div>
      </nav>
    </>
  );
};
