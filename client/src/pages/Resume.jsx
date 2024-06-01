import React from "react";

// Import React Icon
import { BsArrowRight } from "react-icons/bs";

// Import Image
import ResumeTemplate from "../assets/templates/cv-template-04.png";

const Resume = () => {
  return (
    <div className="w-full relative ">
      <div className="resumeCont flex flex-col px-[4%]">
        {/* Content Side 01 */}
        <div className="w-full flex flex-col items-center gap-[0.5rem] mt-[8rem] py-[5rem]">
          <h1 className="text-[3.5rem] font-semibold text-theme-red text-center">
            Resume/CV Templates
          </h1>
          <p className="text-[1.5rem] font-medium text-center">
            View our list of resume/CV templates for every profession and
            career.
          </p>
        </div>

        {/* Content Side 02 */}
        <div className="w-full grid grid-cols-4 gap-[4rem] pb-[8rem]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <figure
              key={index}
              className="singleResumeCont flex flex-col shadow-2xl group/tmpCard "
            >
              <div className="resumeImage">
                <img src={ResumeTemplate} alt="ResumeTemplate" />
              </div>

              <figcaption className="resumeContent relative z-10 px-[2rem] py-[2.5rem]">
                <div className="displayText group-hover/tmpCard:translate-y-[-3rem] transition-all duration-500">
                  <h3 className="text-[2rem] font-semibold text-theme-red">
                    Graphic
                  </h3>
                  <p className="text-[1.5rem] font-medium text-neutral-600 leading-[2.5rem]">
                    The Graphic template is an excellent CV for the contemporary
                    job seeker. It showcases skills and exp
                  </p>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-[0.5rem] absolute -z-10 bottom-[2rem] left-[2rem] text-[1.5rem] opacity-0 group-hover/tmpCard:opacity-100 transition-all duration-500 text-theme-red font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.2rem] after:bg-theme-red hover:after:w-full after:transition-all after:duration-300"
                >
                  <span>View Template</span> <BsArrowRight />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Load More BTN */}
        <div className="loadMoreCont w-full flex justify-center pb-[8rem]">
          <button className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all overflow-hidden before:content-[''] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
