import React from "react";
import research from "../assets/research.png";
import searchicon from "../assets/digital-marketing.png";
import blueprint from "../assets/blueprint.png";
function WorksSection() {
  return (
    <div className="bg-coral-light w-full h-full">
      <div className="text-center flex py-24 justify-center ">
        <div className="w-[60%]">
          <h2 className="text-theme-yellow text-3xl mb-2">How It Works</h2>
          <p className="text-theme-red leading-tight text-5xl font-bold">
            Build your job-winning <br /> resume with AI assistance in three
            simple steps
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center pb-16">
        <div className='bg-white group/card overflow-hidden w-[30rem] before:transition-all before:duration-[1200ms] text-start mb-10 mr-12 relative z-[10] before:content-[""] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-red  before:translate-x-[-101%]  hover:before:translate-x-[0%] '>

          <div className="pt-14 px-6">
            <img className="h-36" src={searchicon} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-theme-red group-hover/card:text-white py-6 px-6">
              Step O1
            </h1>
            <h2 className="text-2xl text-theme-black  group-hover/card:text-white leading-tight pb-14 px-6">
              Choose one of our professionally designed resumes.
            </h2>
          </div>
        </div>
        <div className='bg-white w-[30rem] group/card overflow-hidden before:transition-all before:duration-[1200ms]  text-start mb-10 mr-12 relative z-[10] before:content-[""] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-red  before:translate-x-[-101%]  hover:before:translate-x-[0%]'>
          <div className="pt-14 px-6">
            <img className="h-36" src={research} alt="" />
          </div>
          <div>
            <h1 className="text-4xl  group-hover/card:text-white font-bold text-theme-red py-6 px-6">
              Step O2
            </h1>
            <h2 className="text-2xl  group-hover/card:text-white text-theme-black leading-tight pb-14 px-6">
              Fill in your details using our simple prompts.
            </h2>
          </div>
        </div>
        <div className='bg-white w-[30rem] group/card overflow-hidden before:transition-all before:duration-[1200ms]  text-start mb-10 relative z-[10] before:content-[""] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-red  before:translate-x-[-101%]  hover:before:translate-x-[0%]'>
          <div className="pt-14">
            <img className="h-36 px-6" src={blueprint} alt="" />
          </div>
          <div>
            <h1 className="text-4xl  group-hover/card:text-white font-bold text-theme-red py-6 px-6">
              Step O3
            </h1>
            <h2 className="text-2xl  group-hover/card:text-white text-theme-black leading-tight pb-14 px-6">
              Download & start applying for jobs today!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksSection;
