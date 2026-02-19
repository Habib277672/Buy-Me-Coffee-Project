import React from "react";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuNotebookPen } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";

export const HelpCenter = () => {
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
        <div className="mx-auto min-h-fit max-w-5xl px-4 py-8">
          <Cards />
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
    </div>
  );
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cardsData?.map((data, id) => {
        return (
          <div
            key={id}
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
          </div>
        );
      })}
    </div>
  );
};

const cardsData = [
  {
    icon: <IoRocketOutline />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "7 articles",
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Growing your Supporters",
    desc: "Read more to discover effective strategies for growing your supporter base",
    article: "8 articles",
  },
  {
    icon: <FaRegHeart />,
    title: "One-Time Supports",
    desc: "About support widgets, coffee prices, thank you messages, and video replies",
    article: "5 articles",
  },
  {
    icon: <FaUsers />,
    title: "Launching your Membership",
    desc: "Get the complete context on what membership is and how to earn with memberships.",
    article: "10 articles",
  },
  {
    icon: <LiaShoppingBagSolid />,
    title: "Setting up your Shop",
    desc: "Expert tips to set up your Shop and start earning by selling",
    article: "12 articles",
  },
  {
    icon: <LuNotebookPen />,
    title: "Post, Gallery, and Messages",
    desc: "Share your updates in more than one way",
    article: "8 articles",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Getting paid",
    desc: "Read more to know what steps you should follow to get paid in no time.",
    article: "15 articles",
  },
  {
    icon: <LuUsers />,
    title: "For Supporters and Members",
    desc: "Everything a supporter and member must know about Buy Me a Coffee.",
    article: "11 articles",
  },
  {
    icon: <MdOutlineRemoveRedEye />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "7 articles",
  },
  {
    icon: <LuArrowRightLeft />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "7 articles",
  },
  {
    icon: <IoSettingsOutline />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "7 articles",
  },
  {
    icon: <IoEarthOutline />,
    title: "Getting Started",
    desc: "What is Ek Chup Chai, creating an account, faqs, and more",
    article: "7 articles",
  },
];
