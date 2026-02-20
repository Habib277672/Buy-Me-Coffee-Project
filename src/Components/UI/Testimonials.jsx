import React, { useEffect, useRef, useState } from "react";
import userOne from "../../assets/Images/userOne.jpg";
import userTwo from "../../assets/Images/userTwo.jpg";
import userThree from "../../assets/Images/userThree.jpg";
import userFour from "../../assets/Images/userFour.jpg";
import userFive from "../../assets/Images/userFive.jpg";
import userSix from "../../assets/Images/userSix.jpg";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Testimonials = () => {
  const scrollRef = useRef(null);
  const [acitveIndex, setActiveIndex] = useState(0);

  // Scrolling Funtion Left and Right
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      const newIndex = direction === "left" ? acitveIndex - 1 : acitveIndex + 1;
      if (newIndex >= 0 && newIndex < testimonialsData.length) {
        container.scrollTo({
          left: scrollAmount * newIndex,
          behavior: "smooth",
        });
        setActiveIndex(newIndex);
      }
    }
  };

  // Adjust Active Index on manual scroll (in Case User Swipe)
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setActiveIndex(newIndex);
      }
    };
    container?.addEventListener("scroll", handleScroll);
    return container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f5f1ee] px-4 py-12 text-center sm:px-12">
      {/* Sub Heading */}
      <p className="mb-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
        Love from the creators
      </p>

      {/* Main Heading */}
      <h2 className="text-chaiBrown mb-4 text-3xl font-extrabold sm:text-5xl">
        What Our Users Say
      </h2>

      {/* Mini Description */}
      <p className="mx-auto mb-16 max-w-2xl px-8 text-xs text-neutral-600 sm:mb-20 sm:px-0 sm:text-lg">
        Thousands of creators use Ek Cup Chai to share stories, connect with
        fans, and build meaningful support.
      </p>

      {/* Navigation Icons */}
      <div className="mb-2 flex items-center justify-end gap-4 sm:mb-0 sm:hidden">
        <button
          onClick={() => scroll("left")}
          disabled={acitveIndex === 0}
          className={`cursor-pointer rounded-full border p-2 transition duration-300 ${acitveIndex === 0 ? "text-chaiBrown cursor-not-allowed border border-neutral-200 opacity-30" : "text-chaiBrown border border-neutral-200 hover:bg-[#ffeadd]"}`}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={acitveIndex === testimonialsData.length - 1}
          className={`cursor-pointer rounded-full border p-2 transition duration-300 ${
            acitveIndex === testimonialsData.length - 1
              ? "text-chaiBrown cursor-not-allowed border border-neutral-200 opacity-30"
              : "text-chaiBrown border border-neutral-200 hover:bg-[#ffeadd]"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Faded Edges */}
      <div className="relative">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-8 bg-linear-to-r from-[#f5f1ee] to-transparent"></div>

        {/* Testimonials */}
        <div
          ref={scrollRef}
          className="no-scrollbar mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 sm:overflow-visible sm:px-0 lg:grid-cols-3"
        >
          {testimonialsData?.map((data, index) => {
            return (
              <div
                key={data.id}
                className={`group min-w-full cursor-pointer snap-center rounded-xl border border-neutral-200 bg-[#fffaf6] p-6 text-left transition-all duration-300 hover:scale-[1.02] sm:min-w-0 ${acitveIndex === index ? "shadow-lg" : ""} hover:shadow-[rgba(187,89,28,0.25)_0px_50px_100px_-20px, rgba(187,89,28,0.3)_0px_30px_60px_-30px, rgba(187,89,28,0.35)_0px_-2px_6px_-0px_inset]`}
                style={{
                  boxShadow:
                    "rgba(187,89,28,0.08) 0px 20px 40px -10px, rgba(187,89,28,0.12) 0px 15px 30px -15px, rgba(187,89,28,0.18) 0px -1px 3px 0px inset",
                }}
              >
                <HiOutlineChatBubbleLeftRight className="text-chaiBrown mb-4 text-7xl opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="mb-6 text-sm text-gray-700 italic">
                  {data.comment}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={data.avatar}
                    alt="User Image"
                    draggable="false"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{data.name}</p>
                    <p className="text-xs text-neutral-500">{data.prof}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const testimonialsData = [
  {
    id: 1,
    name: "Habib Ur Rehman",
    prof: "Frontend Developer",
    comment:
      "Delivered clean, scalable UI components with exceptional attention to responsiveness and performance. The user experience improved significantly across all devices.",
    avatar: userThree,
  },
  {
    id: 2,
    name: "Seerat",
    prof: "Brand Designer",
    comment:
      "Translated complex brand ideas into visually compelling identities. Every design element aligned perfectly with our brand voice and target audience.",
    avatar: userOne,
  },
  {
    id: 3,
    name: "Mr James",
    prof: "Fullstack Developer",
    comment:
      "Built a robust end-to-end solution with optimized APIs and seamless frontend integration. The architecture is clean, maintainable, and production-ready.",
    avatar: userFour,
  },
  {
    id: 4,
    name: "Amna",
    prof: "Digital Marketer",
    comment:
      "Implemented data-driven strategies that boosted engagement and conversion rates. Campaign execution was precise and results-oriented.",
    avatar: userTwo,
  },
  {
    id: 5,
    name: "Manu Arora",
    prof: "Aceternity Founder and Teacher",
    comment:
      "Demonstrated strong technical depth and clarity in teaching complex UI patterns. A rare combination of creativity, engineering precision, and mentorship.",
    avatar: userSix,
  },
  {
    id: 6,
    name: "Rubab",
    prof: "Social Media Expert",
    comment:
      "Crafted engaging content strategies that increased reach and audience interaction. Strong understanding of trends and platform-specific optimization.",
    avatar: userFive,
  },
];
