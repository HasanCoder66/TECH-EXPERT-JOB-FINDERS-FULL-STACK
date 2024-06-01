import React from "react";
// import resumeIcons from "../assets/resume.webp";

const  FeatureCards = ({ img, head, para, btnText, key }) => {
  return (
    <div
      key={key}
      className="flex w-2/12 flex-col items-center  text-center justify-between bg-coral-light p-8 rounded-md group/card  hover:shadow-2xl hover:translate-y-[-1rem] transition-all duration-500"
    >
      <img src={img} className="text-theme-red w-24 translate-y-0 group-hover/card:translate-y-[-1rem] transition-all duration-500" alt="icon" />
      <h1 className="text-2xl font-bold mt-3">{head}</h1>
      <p className="mt-3 ">{para}</p>
      <button className="text-theme-red font-bold p-3 mt-3 border border-theme-red rounded-lg w-60 group-hover/card:bg-theme-red group-hover/card:text-white transition-all duration-500">
        {btnText}
      </button>
    </div>
  );
};

export default FeatureCards;
