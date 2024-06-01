import React from "react";
import banner from "../assets/sideban.png";
function ChooseUsSection() {
  return (
    <div className="flex  justify-center gap-x-24 py-40 ">
      <div className="w-[30%] pt-28">
        <h2 className="text-theme-yellow text-4xl py-8">Why Choose Us</h2>
        <h1 className="text-theme-red text-6xl pb-4 font-bold leading-tight">
          SAY GOODBYE TO WRITER'S BLOCK.
        </h1>
        <p className="text-2xl leading-snug">
          Finish your resume faster with{" "}
          <span className="text-theme-red">
            {" "}
            thousands of pre-written examples{" "}
          </span>{" "}
          for hundreds of jobs you can insert directly into your resume!
        </p>
        <button className='bg-theme-red overflow-hidden w-1/3 p-6 text-2xl text-white rounded-2xl mt-24 before:transition-all before:duration-[1200ms] relative z-[10] before:content-[""] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-yellow before:top-0 before:left-0  before:translate-x-[-125%]  hover:before:translate-x-[0%] before:rounded-2xl'>
          Get Started
        </button>
      </div>
      <div className="shadow-2xl">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default ChooseUsSection;
