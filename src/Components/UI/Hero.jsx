import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import userOne from "../../assets/Images/userOne.jpg";
import userTwo from "../../assets/Images/userTwo.jpg";
import userThree from "../../assets/Images/userThree.jpg";
import userFour from "../../assets/Images/userFour.jpg";
import userFive from "../../assets/Images/userFive.jpg";
import userSix from "../../assets/Images/userSix.jpg";
import Tilt from "react-parallax-tilt";
// import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f5f1ee] px-4 pt-25 text-center sm:px-8">
      {/* Floating Cards (Hidden on Mobile)*/}
      <div className="absolute inset-0 z-0 hidden max-w-full overflow-hidden lg:block">
        {/* Left Side Floating Cards */}
        <div className="absolute top-45 -left-1 z-10 w-50 -rotate-6 cursor-pointer">
          <Tilt glareEnable={false}>
            <Card {...testimonials[0]} />
          </Tilt>
        </div>

        <div className="absolute top-82.25 left-24 z-20 w-50 rotate-[-4deg] cursor-pointer">
          <Tilt glareEnable={false}>
            <Card {...testimonials[1]} />
          </Tilt>
        </div>

        <div className="absolute bottom-15 -left-1 z-30 w-50 rotate-6 cursor-pointer">
          <Tilt glareEnable={false}>
            <Card {...testimonials[2]} />
          </Tilt>
        </div>

        {/* Right Side Floating Cards */}

        <div className="absolute top-45 -right-1 z-10 w-50 rotate-6 cursor-pointer">
          <Tilt glareEnable={false}>
            <Card {...testimonials[3]} />
          </Tilt>
        </div>

        <div className="absolute top-82.25 right-24 z-20 w-50 rotate-[4deg] cursor-pointer">
          <Tilt glareEnable={false}>
            <Card {...testimonials[4]} />
          </Tilt>
        </div>

        <div className="absolute -right-1 bottom-15 z-30 w-50 -rotate-6 cursor-pointer">
          <Tilt glareEnable={false}>
            <Card {...testimonials[5]} />
          </Tilt>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-50 mx-auto flex min-h-[calc(100vh-150px)] w-full max-w-3xl flex-col items-center justify-center px-2 sm:px-4">
        {/* Star Line */}
        <div className="text-chaiBrown mb-8 flex flex-wrap items-center justify-center gap-1 text-sm font-medium sm:mb-10">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return <FaStar key={i} />;
            })}
          <span className="ml-2">Loved by 1,000,000+ chai supporters</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-center text-5xl leading-tight font-extrabold text-black sm:text-7xl md:text-8xl">
          Create more. <br />
          <span className="logo-font text-chaiBrown">Chai more.</span>
        </h1>

        {/* Sub Heading */}
        <p className="mb-18 px-2 text-center text-base tracking-wide text-neutral-500 sm:px-0 sm:text-xl">
          Serving content? Let your fans serve the chai. It's simpler than you
          think.
        </p>

        {/* CTA button with Logo */}
        <div className="group relative mb-6 inline-block cursor-pointer sm:mb-8">
          <img
            src={logo}
            alt="Logo Image"
            draggable="false"
            className="pointer-events-none absolute -top-7 -left-3 z-10 h-14 w-14 rotate-[-10deg] transition-all duration-500 ease-in-out group-hover:top-9 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 group-focus:top-9 group-focus:left-1/2 group-focus:-translate-x-1/2 group-focus:-translate-y-1/2 group-focus:rotate-0 group-active:top-9 group-active:left-1/2 group-active:-translate-x-1/2 group-active:-translate-y-1/2 group-active:rotate-0"
          />
          <NavLink
            to="/signup"
            className="bg-chaiBrown relative inline-block overflow-hidden rounded-full border-2 border-[#BB591C] px-10 py-4 text-lg font-bold text-white shadow-[7px_5px_56px_-20px_#BB591C] transition duration-300 ease-in-out hover:bg-[#BB591C] hover:shadow-[7px_5px_66px_-10px_#BB591C] sm:px-12 sm:py-5 sm:text-xl"
          >
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              Get Started
            </span>
          </NavLink>
        </div>

        {/* Bottom Tag line */}
        <p className="mx-auto max-w-md px-6 text-center text-xs leading-relaxed text-neutral-500 sm:px-12 sm:text-sm lg:max-w-lg">
          Setting up your chai page takes less time than boiling water!
        </p>
      </div>
    </section>
  );
};

// Card Component for Hero Section
const Card = ({ name, supporters, avatar }) => {
  return (
    <div className="custom-shadow text-chiaBrown flex flex-col items-center gap-2 rounded-2xl border border-[#BB591C] bg-[#edcfbc]/50 p-4 text-center text-sm backdrop-blur-md">
      <img
        src={avatar}
        alt="Avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
      <span className="text-center text-sm font-semibold">{name}</span>
      <div className="text-chaiBrown -mt-4px flex items-center gap-1 text-xs">
        <FaHeart className="text-chaiBrown opacity-80" />
        <span>{supporters} supporters</span>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Seerat is funding her art with Ek Cup Chai",
    supporters: "2,200",
    avatar: userOne,
  },
  {
    name: "Aman shares coding tips & gets chai love!",
    supporters: "4,800",
    avatar: userFour,
  },
  {
    name: "Amina writes poetry, powered by chai ☕",
    supporters: "700",
    avatar: userTwo,
  },
  {
    name: "Habib is podcasting over sips of chai",
    supporters: "1,120",
    avatar: userThree,
  },
  {
    name: "Simran creates tutorials & chai fuels her",
    supporters: "3,450",
    avatar: userFive,
  },
  {
    name: "Manu makes music & gets support via chai",
    supporters: "2,670",
    avatar: userSix,
  },
];
