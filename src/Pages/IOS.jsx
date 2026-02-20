import React from "react";

export const IOS = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-[#f5f1ee] px-2 text-center sm:gap-5">
      <h1 className="text-chaiBrown inline-block bg-transparent text-xl font-extrabold sm:text-3xl lg:text-5xl xl:text-6xl">
        IOS App – Coming Soon
      </h1>
      <p className="max-w-xs text-xs text-neutral-500 md:text-shadow-md lg:max-w-3xl lg:text-base xl:text-xl">
        We’re building something amazing for IOS users. <br />
        The app will be available soon with exciting features and improved
        performance.
      </p>
    </section>
  );
};
