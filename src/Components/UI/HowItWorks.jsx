import React from "react";
import { FaCoffee, FaShareAlt, FaUserEdit } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";
import Tilt from "react-parallax-tilt";
import workImage from "../../assets/Images/work.png";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Create your chai page",
      desc: "Set up your profile with a photo, bio & set your chai price.",
      icon: <FaUserEdit className="text-3xl text-[#fceee6] sm:text-4xl" />,
    },
    {
      title: "Share with your fans",
      desc: "Send your custom page link to your audience and community.",
      icon: <FaShareAlt className="text-3xl text-[#fceee6] sm:text-4xl" />,
    },
    {
      title: "Get chai love & grow",
      desc: "Receive chai (payments) and build a loyal supporter base.",
      icon: <FaCoffee className="text-3xl text-[#fceee6] sm:text-4xl" />,
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-[#f5f1ee] px-4 py-12 text-center sm:px-8">
      {/* Sub Heading */}
      <p className="mb-2 text-xs tracking-wide text-neutral-500 uppercase">
        Easy as chai
      </p>

      {/* Main Heading */}
      <h2 className="text-chaiBrown mb-6 text-3xl font-extrabold sm:text-5xl">
        How It Works
      </h2>

      {/* Mini Description */}
      <p className="mx-auto mb-16 max-w-2xl px-8 text-xs text-neutral-600 sm:mb-20 sm:px-0 sm:text-lg">
        Ek Cup Chai makes supporting creators fun and effortless. In just a few
        taps, your fans can send chai and show their appreciation.
      </p>

      {/* Steps Timeline mini Cards */}
      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-start justify-center gap-14 md:flex-row md:items-center md:gap-10">
        {steps?.map((step, id) => {
          return (
            <div
              key={id}
              className="relative mx-auto w-full max-w-70 cursor-pointer"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.03}
                transitionSpeed={800}
                className="w-full"
              >
                <div className="custom-shadow group relative space-y-3 rounded-xl border border-[#BB591C] bg-white p-6 pt-12 text-center shadow-[0_50px_80px_-10px_rgba(187,89,28,0.1)] transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(187,89,28,0.2)]">
                  {/* Inner Corner Logo Image */}
                  <img
                    src={logo}
                    alt="Logo Image"
                    className="pointer-events-none absolute right-3 -bottom-px z-0 h-7 w-7 opacity-25 transition duration-200 group-hover:opacity-50"
                  />
                  {/* Data */}
                  <div className="absolute top-0 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3e2723] shadow-lg sm:h-16 sm:w-16">
                    {step.icon}
                  </div>
                  <h3 className="text-chaiBrown relative z-10 mt-2 text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-sm text-neutral-600">
                    {step.desc}
                  </p>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>

      {/* Work Image */}
      <div className="mx-auto mt-5 max-w-4xl px-2 sm:px-0">
        <img
          src={workImage}
          alt="How it Works Image"
          draggable="false"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};
