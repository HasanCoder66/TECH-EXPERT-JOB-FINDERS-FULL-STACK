import React from "react";

// Import React Icons
import { BsPlusLg } from "react-icons/bs";

// Import Images
import CVTemplate02 from "../assets/templates/cv-template-02.png";
import CVTemplate03 from "../assets/templates/cv-template-03.png";
import CVTemplate04 from "../assets/templates/cv-template-04.png";
import CVTemplate05 from "../assets/templates/cv-template-05.png";

const Templates = () => {
  return (
    <div className="w-full min-h-[50rem] flex flex-col items-center px-[2%] py-[8rem]">
      <h5 className="text-[1.6rem] font-medium text-theme-yellow">
        WHY IS Techexpertjobfinders THE BEST RESUME BUILDER ONLINE?
      </h5>

      <h2 className="text-[4rem] font-semibold text-theme-red">
        Professional CV Templates
      </h2>

      <div className="templatesRow min-w-full flex gap-[2rem] mt-[5rem] overflow-auto">
        {[
          CVTemplate04,
          CVTemplate02,
          CVTemplate03,
          CVTemplate04,
          CVTemplate05,
        ].map((templateImg, index) => (
          <div
            key={index}
            className="templateCard min-w-[32%] relative group/template overflow-hidden"
          >
            <span className="absolute top-[5%] right-[5%] bg-theme-red text-white text-[4rem] p-[1.5rem] rounded-full cursor-pointer hover:bg-theme-yellow transition-all duration-500 scale-0 group-hover/template:scale-100">
              <BsPlusLg />
            </span>

            <img src={templateImg} alt="template01" className="w-full" />

            <div className="w-[90%] flex flex-col gap-[0.5rem] absolute bottom-[5%] left-0 bg-white p-[1.6rem] py-[2rem] translate-x-[-100%] group-hover/template:translate-x-[0%] transition-all duration-300">
              <a
                href="#"
                className="text-[2.2rem] text-theme-red font-semibold translate-x-[6%] group-hover/template:translate-x-[0%] transition-all group-hover/template:delay-200 group-hover/template:duration-700 opacity-0 group-hover/template:opacity-100"
              >
                Social
              </a>
              <span className="text-[1.4rem] text-slate-500 font-normal translate-x-[6%] group-hover/template:translate-x-[0%] transition-all group-hover/template:delay-300 group-hover/template:duration-700 opacity-0 group-hover/template:opacity-100 cursor-default">
                Resume
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
