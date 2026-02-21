import React, { useRef, useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Hook to detect clicks outside of an element
const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);

  return ref;
};

export const FAQ = () => {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center gap-6 bg-[#f5f1ee] px-4 py-25 text-center sm:px-12">
      <h1 className="custom-font text-[24px] font-light sm:text-[48px]">
        Frequently Asked Questions
      </h1>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
        {accordianData.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer rounded-xl bg-neutral-200 px-5 py-4 text-left"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide sm:text-base">
          {item.title}
        </h2>
        <FiChevronDown
          className={`text-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="sm:text-md mt-4 overflow-hidden text-sm text-neutral-700"
          >
            {item.desc}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Data
const accordianData = [
  {
    title: "Who uses Ek Chup Chai?",
    desc: "Anyone with an audience. Youtubers, musicians, podcasters, writers, programmers, nonprofits, cosplayers, you name it. More than a million creators and their supporters are on Ek Chup Chai.",
  },
  {
    title: "How do I get paid?",
    desc: "You get paid to your local bank account. We currently offer bank deposits to creators from over 110 countries.",
  },
  {
    title: "How can my audience pay?",
    desc: "We support all major credit and debit cards, Apple Pay, Google Pay, Cash App and other global payment methods.",
  },
  {
    title: "Is there a fee to use Ek Chup Chai?",
    desc: "We do not charge a monthly fee. All features including publishing and emails are free for everyone. We charge a 5% transaction fee, and creators keep 95% of the earnings. We make money only when you do. We'll never show ads and we'll never sell your data.",
  },
  {
    title: "Is Ek Chup Chai safe and reliable?",
    desc: "We take security seriously. Here are some measures we’ve taken to protect your and your supporter’s data. We don’t store credit card data on our servers. Payment processing is handled by Stripe (PCI Compliance Level 1) and Wise. We run on the robust Amazon infrastructure. Cloudflare adds an additional layer of security. We also take periodic backups and force SSL encryption across the platform. We have a bug bounty program to encourage responsible reporting of any security issues, and we’re quick to take action.",
  },
  {
    title: "Do I have complete ownership of my supporters?",
    desc: "Yes, your supporters are strictly yours. We do not email them. You can export their list any time you like.",
  },
  {
    title: "How is this different from other platforms for creators?",
    desc: "With Ek Chup Chai, you get everything you need to run your creative business. You don't have to worry about paying for and stitching together a dozen services, from sending emails to charging for subscriptions. Besides, your Ek Chup Chai page is arguably the most delightful experience you can offer your audience. From the one-tap payment to the delightful little touches for your supporters, we’ve obsessed over every bit of detail.",
  },
  {
    title: "Can I build a serious business using Buy Me a Coffee?",
    desc: "Yes, there are many creators earning a six-figure income on Buy Me a Coffee. We will grow with you.",
  },
  {
    title: "Who are you folks?",
    desc: "Ek Chup Chai is one of the leading creator economy companies in the world. It was founded in the UK in 2017 by a team of creators who turned their passion into a platform. Ek Chup Chai is backed by Y Combinator and Stripe. Read more about us and our guiding values.",
  },
  {
    title: "How do I contact Ek Chup Chai?",
    desc: "You can email us at support@ekchupchai.com, or leave us a message on the Intercom chat. We also respond to every feature request submitted.",
  },
];
