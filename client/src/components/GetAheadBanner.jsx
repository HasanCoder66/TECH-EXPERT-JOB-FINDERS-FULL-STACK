import React from "react";

const GetAheadBanner = () => {
  return (
    <div className="w-full bg-white flex justify-center py-16">
      <div className="w-2/4 bg-coral-light text-center m-5 p-10 rounded-lg">
        <h1 className="text-5xl text-theme-red font-bold">
          Get ahead of the competition
        </h1>
        <p className="m-5 text-xl">
          Make your job applications stand-out from other candidates
        </p>
        <button className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all overflow-hidden before:content-[''] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetAheadBanner;
