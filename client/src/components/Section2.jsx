import React from "react";
import FeatureCards from "./FeatureCards";
import resumeIcons from "../assets/Cv.png";
import websiteWeb from "../assets/website.webp";
import letter from "../assets/Letter.png";
import FeatureAsistanceContent from "./FeatureAsistanceContent";
import lock from "../assets/FeaturesIcons/icons8-lock-50.png";
import star from "../assets/FeaturesIcons/icons8-star-50.png";
import graph from "../assets/FeaturesIcons/icons8-graph-64.png";
import timer from "../assets/FeaturesIcons/icons8-timer-50.png";
import editor from "../assets/FeaturesIcons/icons8-file-100.png";
import bulb from "../assets/FeaturesIcons/icons8-bulb-30.png";

const Section2 = () => {
  const featureCardContent = [
    {
      id: 1,
      img: resumeIcons,
      head: "Create Resume / CV",
      para: "Create a professional-quality resume / CV with AI assistance in minutes.",
      btnText: "CREATE NEW RESUME",
    },
    {
      id: 2,
      img: letter,
      head: "Create Cover Letter",
      para: "Create an eye-catching cover letter to send with your resume with AI assistance.",
      btnText: "CREATE NEW LETTER",
    },
    {
      id: 3,
      img: websiteWeb,
      head: "Create Resume Website",
      para: "Transform your resume into a mobile-friendly website that you can share with recruiters!",
      btnText: "CREATE NEW WEBSITE",
    },
  ];
  const featureAssistanceContent = [
    {
      id: 1,
      img: lock,
      head: "Cover Letter Builder",
      para: " Write a cover letter using the same templates as your resume.",
    },
    {
      id: 2,
      img: star,
      head: "Follow Tips From Experts",
      para: "Our experts' tips and AI assistance will show you how to write a resume.",
    },
    {
      id: 3,
      img: graph,
      head: "20+ Best Resume Templates",
      para: "Create a modern and professional resume and cover letter.",
    },
    {
      id: 4,
      img: timer,
      head: " Resume / CV Check",
      para: "Our builder will give you suggestions on how to improve your resume.",
    },
    {
      id: 5,
      img: bulb,
      head: " It's Fast and Easy to Use",
      para: "Our online resume / CV builder will help you write a  perfect resume in minutes.",
    },
    {
      id: 6,
      img: editor,
      head: "Flexible Text Editor",
      para: "You will have access to the best text editor available.",
    },
  ];

  return (
    <div className="pb-[5rem] mt-20">
      <div className="flex justify-center flex-col items-center">
        <h3 className="text-theme-yellow text- font-bold">
          CREATE A CV IN MINIUTES
        </h3>
        <h1 className="text-theme-red text-5xl mt-4 font-bold ">
          Our Features.
        </h1>
      </div>
      <div className="flex justify-center gap-x-24 p-12 px-1/2">
        {featureCardContent.map((product, index) => (
          <FeatureCards
            key={index}
            img={product.img}
            head={product.head}
            para={product.para}
            btnText={product.btnText}
          />
        ))}
      </div>
      <div className="flex m-24">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <h1 className="text-5xl">
            What are the benefits of{" "}
            <span className="text-theme-red"> My Cv Creator </span> online
            resume / CV Builder with AI assistance?
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-1/3">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/b9Mpa6r5yDg"
            title="Build professional resume and cover letter for free"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-1/3 flex flex-wrap p-3">
          {featureAssistanceContent.map((product, index) => (
            <FeatureAsistanceContent
              key={index}
              img={product.img}
              head={product.head}
              para={product.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
