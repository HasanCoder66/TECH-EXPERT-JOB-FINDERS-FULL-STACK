import React from "react";

// Import React Icons
import { IoMdPlay } from "react-icons/io";

const Solution = () => {
  return (
    <div className="solutionCont w-full h-[60rem] bg-solution-bg-image bg-cover bg-center bg-no-repeat bg-[#333] bg-blend-multiply">
      <div className="solutionContWrapper h-full mx-[10%] flex items-center justify-between text-white">
        {/* Content Side 01 */}
        <div className="contentSide01 w-[50%] flex flex-col items-start gap-[2rem]">
          <span className="text-[1.8rem] leading-[1.8rem]">
            WATCH OUR VIDEO
          </span>

          <h2 className="text-[4.2rem] leading-[5.5rem] font-semibold text-theme-red">
            Get Better Solution For Your Resume
          </h2>

          <p className="text-[1.4rem] font-normal">
            Stand out from the herd of job applicants with our professionally -
            designed resume templates. Get noticed, Get hired.
          </p>

          <button className="text-[1.6rem] overflow-hidden leading-[1.6rem] bg-theme-red py-[1.5rem] px-[1.5rem] rounded-xl mt-[2rem] before:transition-all before:duration-[1200ms] relative z-[10] before:content-[''] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-yellow before:top-0 before:left-0  before:translate-x-[-125%]  hover:before:translate-x-[0%] before:rounded-2xl">
            ORDER A RESUME NOW
          </button>
        </div>

        {/* Content Side 02 */}
        <div className="contentSide02 w-[40%] flex items-center justify-center">
          <button className="playBtn text-[5rem] text-theme-red bg-white p-[2.2rem] rounded-full hover:bg-theme-red hover:text-white transition-all duration-500">
            <IoMdPlay className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solution;
