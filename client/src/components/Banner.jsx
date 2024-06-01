import React from "react";

// Import Images
import BannerWaves from "../assets/banner-bg.png";
import BannerParticle01 from "../assets/shapes/banner-particle-01.png";
import BannerParticle02 from "../assets/shapes/banner-particle-02.png";
import BannerParticle03 from "../assets/shapes/banner-particle-03.png";
import BannerLaptop from "../assets/banner-image/laptop.png";
import BannerTablet from "../assets/banner-image/tablet.png";
import BannerMobile from "../assets/banner-image/mobile.png";

const Banner = () => {
  return (
    <div className="bannerCont relative z-0 w-full h-dvh">
      <img
        src={BannerWaves}
        alt="banner-waves"
        className="absolute bottom-0 right-0 w-[90rem]"
      />
      <img
        src={BannerParticle01}
        alt="Particle-01"
        className="absolute top-[40%] left-[1.5%] w-[6rem]"
      />
      <img
        src={BannerParticle02}
        alt="Particle-02"
        className="absolute top-[55%] left-[2%] w-[15rem]"
      />
      <img
        src={BannerParticle03}
        alt="Particle-03"
        className="absolute top-[17%] left-[12%] w-[2.2rem]"
      />

      <div className="bannerWrapper relative z-[40] h-full flex items-center justify-between mx-[5%]">
        {/* Content Side 01 */}
        <div className="contentSide01 w-[40%] flex flex-col items-start justify-center mt-[5rem]">
          <h4 className="text-[1.6rem] leading-[1.6rem] font-medium">
            Welcome to TechexpertJobfinders
          </h4>

          <h1 className="text-[4rem] font-medium text-theme-red">
            Create a <br /> compelling CV with <br /> AI assistance in <br />{" "}
            minutes.
          </h1>

          <h3 className="text-[1.8rem] font-normal text-theme-black mt-[0.4rem]">
            Online resume builder with AI assistance
          </h3>

          <p className="text-[1.3rem] font-normal text-theme-black mt-[1.8rem]">
            Seamlessly create{" "}
            <span className="text-theme-red font-medium">
              an exceptional resume/CV with AI-powered features,
            </span>{" "}
            fine-tuning expert content to match your individuality.
          </p>

          <button className="text-[1.6rem] leading-[1.6rem] bg-theme-red text-white px-[1.5rem] py-[1.4rem] rounded-lg mt-[2.5rem]">
            Get Started
          </button>
        </div>

        {/* Content Side 02 */}
        <div className="contentSide02 w-[55%]">
          <div className="imagesCont relative z-[1] flex items-end justify-between mt-[3rem]">
            <img
              src={BannerLaptop}
              alt="Laptop"
              className="w-[60rem] object-cover"
            />
            <img
              src={BannerTablet}
              alt="Tablet"
              className="w-[26rem] absolute z-[2] bottom-0 right-0 object-cover animate-moveDown"
            />
            <img
              src={BannerMobile}
              alt="Mobile"
              className="w-[11rem] absolute z-[2] bottom-0 left-0 object-cover animate-moveDown"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
