import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuNotebookPen } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

// If User Click Outside The Card Then Card will be closed
const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

export const HelpCenter = () => {
  const [currentState, setCurrentState] = useState(null);
  const ref = useOutsideClick(() => setCurrentState(null));

  return (
    <>
      <div className="relative min-h-40 w-full bg-[#f0c9b0] py-6">
        <div className="mx-auto max-w-5xl px-6 md:px-4">
          {/* Top Section  */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex">
              <NavLink to="/" className="flex items-center gap-0.5">
                <img
                  src={logo}
                  alt="Logo Image"
                  className="h-12 w-12 object-contain"
                  draggable={false}
                />

                <h1 className="logo-font text-chaiBrown pt-1 text-lg leading-none lg:flex">
                  Ek Chup Chai
                </h1>
              </NavLink>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-chaiBrown text-xl font-extrabold tracking-tight md:text-3xl">
                Need assistance? Email support@ekchupchai.com
              </h2>

              <div className="relative w-[80%] rounded-md border border-white/30 bg-white/20 backdrop-blur-md transition duration-200 hover:scale-[1.02] hover:shadow-lg">
                <IoSearch className="text-chaiBrown absolute top-3 left-3 text-xl text-neutral-600" />
                <input
                  type="search"
                  placeholder="Search for articles.."
                  className="placeholder:text-chaiBrown w-full rounded-md bg-transparent p-3 px-4 pl-10 text-sm transition duration-200 outline-none placeholder:font-semibold focus:bg-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid Section for Cards and Data */}
      <div className="w-full bg-white">
        <div className="relative mx-auto min-h-fit max-w-5xl px-4 py-8">
          <LayoutGroup>
            <Cards setCurrentState={setCurrentState} />

            {/* onClick Same Card will rerender  */}
            <AnimatePresence>
              {currentState && (
                <>
                  {/* Background Overlay */}
                  <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setCurrentState(null)}
                    className="fixed top-0 left-0 z-40 h-full w-full bg-black/40 backdrop-blur-sm"
                  />

                  {/* Animated Card Wrapper */}
                  <motion.div
                    key="modal"
                    layoutId={`card-${currentState.id}`}
                    layout="position"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                    className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center p-4"
                  >
                    <div
                      ref={ref}
                      onClick={(e) => e.stopPropagation()}
                      className="w-87.5 rounded-2xl bg-white p-6 shadow-2xl" // ✅ FIXED WIDTH
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{currentState.icon}</span>

                        <span
                          className="cursor-pointer text-3xl"
                          onClick={() => setCurrentState(null)}
                        >
                          <RxCross2 />
                        </span>
                      </div>

                      <div className="mt-4">
                        <h2 className="text-xl font-semibold">
                          {currentState.title}
                        </h2>
                        <p className="mt-2 text-neutral-600">
                          {currentState.desc}
                        </p>
                      </div>

                      <span className="mt-4 block text-neutral-500">
                        {currentState.article}
                      </span>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        {/* HelpCenter Footer */}
        <HelpFooter />
      </div>
    </>
  );
};

const HelpFooter = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-center justify-center">
        <NavLink to="/" className="flex items-center gap-0.5">
          <img
            src={logo}
            alt="Logo Image"
            className="h-12 w-12 object-contain"
            draggable={false}
          />

          <h1 className="logo-font text-chaiBrown pt-1 text-lg leading-none lg:flex">
            Ek Chup Chai
          </h1>
        </NavLink>
        <div className="mt-4 flex gap-6 tracking-tight text-neutral-600">
          <NavLink to="#">FAQ</NavLink>
          <NavLink to="#">Email Support</NavLink>
          <NavLink to="#">Go Back to Ek Chup Chai</NavLink>
        </div>
        <div className="my-5 flex gap-6 text-2xl text-neutral-600 transition-all duration-200">
          <NavLink to="#">
            <FaFacebookSquare className="transition duration-300 hover:text-sky-700" />
          </NavLink>
          <NavLink to="#">
            <FaTwitter className="transition duration-300 hover:text-sky-400" />
          </NavLink>
          <NavLink to="#">
            <FaLinkedin className="transition duration-300 hover:text-sky-800" />
          </NavLink>
        </div>
        <p></p>
      </div>
    </div>
  );
};

const Cards = ({ setCurrentState }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cardsData?.map((data) => {
        return (
          <motion.div
            key={data.id}
            layoutId={`card-${data.id}`}
            onClick={() => {
              setCurrentState(data);
            }}
            className="flex max-w-full cursor-pointer flex-col justify-evenly gap-4 rounded-2xl border border-neutral-300 p-6 text-neutral-900 shadow-sm transition duration-300 hover:scale-[1.02] hover:border-neutral-600 hover:shadow-lg md:max-w-md"
          >
            <span className="text-2xl">{data.icon}</span>
            <div>
              <h2 className="text-lg font-semibold">{data.title}</h2>
              <p className="w-57.5 tracking-tight text-neutral-600">
                {data.desc}
              </p>
            </div>
            <span className="text-neutral-500">{data.article}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

const cardsData = [
  {
    id: 1,
    icon: <IoRocketOutline />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "7 articles",
  },
  {
    id: 2,
    icon: <BsGraphUpArrow />,
    title: "Growing your Supporters",
    desc: "Read more to discover effective strategies for growing your supporter base",
    article: "8 articles",
  },
  {
    id: 3,
    icon: <FaRegHeart />,
    title: "One-Time Supports",
    desc: "About support widgets, coffee prices, thank you messages, and video replies",
    article: "5 articles",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Launching your Membership",
    desc: "Get the complete context on what membership is and how to earn with memberships.",
    article: "10 articles",
  },
  {
    id: 5,
    icon: <LiaShoppingBagSolid />,
    title: "Setting up your Shop",
    desc: "Expert tips to set up your Shop and start earning by selling",
    article: "12 articles",
  },
  {
    id: 6,
    icon: <LuNotebookPen />,
    title: "Post, Gallery, and Messages",
    desc: "Share your updates in more than one way",
    article: "8 articles",
  },
  {
    id: 7,
    icon: <FaRegMoneyBillAlt />,
    title: "Getting paid",
    desc: "Read more to know what steps you should follow to get paid in no time.",
    article: "15 articles",
  },
  {
    id: 8,
    icon: <LuUsers />,
    title: "For Supporters and Members",
    desc: "Everything a supporter and member must know about Buy Me a Coffee.",
    article: "11 articles",
  },
  {
    id: 9,
    icon: <MdOutlineRemoveRedEye />,
    title: "Account and Content Moderations",
    desc: "Getting your account approved for payouts explained",
    article: "5 articles",
  },
  {
    id: 10,
    icon: <LuArrowRightLeft />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "5 articles",
  },
  {
    id: 11,
    icon: <IoSettingsOutline />,
    title: "Account Security",
    desc: "Keep your account safe and secure",
    article: "6 articles",
  },
  {
    id: 12,
    icon: <IoEarthOutline />,
    title: "Miscellaneous Topics",
    desc: "A collection of general and diverse subjects not covered elsewhere",
    article: "6 articles",
  },
];
