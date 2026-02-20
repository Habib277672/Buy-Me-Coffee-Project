import React from "react";
import featureImage from "../../assets/Images/features.png";
import logo from "../../assets/Images/logo.png";
import { FaBolt, FaCogs, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export const Features = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#f5f1ee] px-4 py-12 text-center sm:px-8">
      {/* Sub Heading */}
      <p className="mb-2 text-xs tracking-wide text-neutral-500 uppercase">
        Creator-first platform
      </p>

      {/* Main Heading */}
      <h2 className="text-chaiBrown mb-6 text-3xl font-extrabold sm:text-5xl">
        Why Creators Love Us
      </h2>

      {/* Mini Description */}
      <p className="mx-auto mb-16 max-w-2xl px-8 text-xs text-neutral-600 sm:mb-20 sm:px-0 sm:text-lg">
        We built Ek Cup Chai to help creators grow, connect with fans, and earn
        without hassle. Here's what makes us special.
      </p>

      {/* Features Cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-20 px-8 sm:grid-cols-2 sm:px-0">
        {featuresData?.map((data) => {
          return (
            <Tilt
              key={data.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              transitionSpeed={800}
              className="w-full"
            >
              <div className="custom-shadow group relative mx-auto max-w-125 cursor-pointer space-y-3 rounded-xl border border-[#BB591C] bg-white p-6 pt-12 text-center transition-all duration-300">
                {/* Chai Logo */}
                <img
                  src={logo}
                  alt="Chai Logo"
                  draggable="false"
                  className="top-8px pointer-events-none absolute right-3 z-0 h-7 w-7 opacity-25 transition-opacity duration-300 group-hover:opacity-50"
                />

                {/* Features Icon */}
                <div className="absolute top-0 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3e2723] shadow-lg sm:h-16 sm:w-16">
                  {data.icon}
                </div>

                {/* Content */}
                <h3 className="text-chaiBrown relative z-10 mt-2 text-lg font-bold">
                  {data.title}
                </h3>
                <p className="relative z-10 text-sm text-neutral-600">
                  {data.desc}
                </p>
              </div>
            </Tilt>
          );
        })}
      </div>

      {/* Work Image */}
      <div className="mx-auto -mt-10 max-w-6xl px-4 sm:-mt-15 sm:px-0">
        <img
          src={featureImage}
          alt="Feautures Image"
          draggable="false"
          className="mx-auto -mb-15 h-auto w-[90%] max-w-[320px] object-contain sm:-mb-20 sm:max-h-175 sm:w-[70%] sm:max-w-200"
        />
      </div>
    </section>
  );
};

const featuresData = [
  {
    id: 1,
    icon: <FaBolt className="text-3xl text-[#fceee6] sm:text-4xl" />,
    title: "Instant Payment Setup",
    desc: "Start receiving chai (payments) in seconds - no complicated setup.",
  },
  {
    id: 2,
    icon: <FaCogs className="text-3xl text-[#fceee6] sm:text-4xl" />,
    title: "Custom Membership Options",
    desc: "Offer memberships with exclusive perks to your biggest supporters.",
  },
  {
    id: 3,
    icon: <FaUserFriends className="text-3xl text-[#fceee6] sm:text-4xl" />,
    title: "Simple Dashboard",
    desc: "Manage payments, messages, and supporters in one clean place.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave className="text-3xl text-[#fceee6] sm:text-4xl" />,
    title: "Zero Monthly Fees",
    desc: "Keep more of what you earn. No hidden charges or subscriptions.",
  },
];
