import React from "react";
import publishImage from "../../assets/Images/publish.png";

export const Publish = () => {
  return (
    <section className="bg-[#f5f1ee] px-4 py-12 text-center sm:px-12">
      {/* Sub Heading */}
      <p className="mb-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
        Content, Audio & Stories
      </p>

      {/* Main Heading */}
      <h2 className="text-chaiBrown mb-4 text-3xl font-extrabold sm:text-5xl">
        Start Publishing
      </h2>

      {/* Mini Description */}
      <p className="mx-auto mb-16 max-w-2xl px-8 text-xs text-neutral-600 sm:mb-20 sm:px-0 sm:text-lg">
        Ek Cup Chai helps creators publish authentic stories, behind-the-scenes
        moments, music, and more. Connect with the real you.
      </p>

      {/* Publish Image */}
      <div className="mx-auto -mt-4 max-w-182.5 px-4">
        <img
          src={publishImage}
          alt="Feautures Image"
          draggable="false"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
};
