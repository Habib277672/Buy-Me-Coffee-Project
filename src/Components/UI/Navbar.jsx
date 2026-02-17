import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/Images/logo.png";

export const NavBar = () => {
  const [isDropDownOpen, SetIsDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-100 flex w-full items-center justify-between border-b border-neutral-100 bg-white px-4 py-2 antialiased sm:px-6 md:py-4">
        {/* Mobile Menu */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Left Side of Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer text-2xl text-neutral-900"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo Image"
                className="h-12 w-12 object-contain"
                draggable={false}
              />
            </NavLink>
          </div>

          {/* Right Side of Mobile Menu */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="text-[14px] font-semibold text-neutral-900"
            >
              Log in
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-chaiBrown rounded-full px-4 py-2 text-[14px] font-semibold text-white transition duration-300 hover:scale-[1.03]"
            >
              Sign up
            </NavLink>
          </div>
        </div>

        {/* Desktop Nav */}
        {/* Left Side Items */}
        <div className="hidden items-center gap-8 text-base font-bold text-neutral-900 md:flex">
          <NavLink
            to="#"
            className="hover:text-chaiBrown transition duration-300"
          >
            FAQ
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-chaiBrown flex items-center gap-2 tracking-tight transition duration-300"
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
          <div className="flex cursor-pointer items-center gap-0.5 font-medium">
            <NavLink to="/" className="flex items-center gap-0.5">
              <img
                src={logo}
                alt="Logo Image"
                className="h-12 w-12 object-contain md:mr-20 lg:mr-0"
                draggable={false}
              />

              <h1 className="logo-font text-chaiBrown pt-1 text-lg leading-none md:hidden lg:flex">
                Ek Chup Chai
              </h1>
            </NavLink>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="relative">
            <IoSearch className="absolute top-3 left-3 text-xl text-neutral-600" />
            <input
              type="search"
              placeholder="Search Creators"
              className="rounded-full border-none bg-neutral-100 p-3 px-4 pl-10 text-sm transition duration-300 outline-none placeholder:text-left placeholder:font-semibold placeholder:text-neutral-600 hover:bg-neutral-200"
            />
          </div>
          <NavLink
            to="/login"
            className="hover:text-chaiBrown text-base font-bold text-neutral-900 transition duration-300"
          >
            Log in
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-chaiBrown rounded-full px-4 py-2 text-base font-bold text-white transition duration-300 hover:scale-[1.03] hover:opacity-95"
          >
            Sign up
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu Redering Data */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-99 flex h-full w-full flex-col gap-6 overflow-y-auto bg-white p-6 pt-20 text-lg font-semibold text-neutral-900"
          >
            <NavLink
              to="#"
              className="hover:text-chaiBrown transition duration-300"
            >
              FAQ
            </NavLink>

            <NavLink
              to="#"
              className="hover:text-chaiBrown flex items-center gap-2 tracking-tight transition duration-300"
            >
              Wall of <FaRegHeart className="text-chaiBrown text-base" />
            </NavLink>

            <span className="text-neutral-700">Resources</span>

            <NavLink
              to="#"
              className="text-md hover:text-chaiBrown transtion flex items-center gap-2 duration-300"
            >
              <FiHelpCircle className="text-lg" /> <span>Help Center</span>
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
    </>
  );
};
