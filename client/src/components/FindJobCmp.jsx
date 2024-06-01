import React from "react";
import SearchBarCmp from "../components/SearchBarCmp";
import SearchBox2Location from "../components/SearchBox2Location";
import ButtonCmp from "../components/ButtonCmp";

const FindJobCmp = () => {
  return (
    <div className="mainContainer  bg-coral-light ">
      <div className="ContainerWrapper py-[4rem] ">
        <div className="headingBox ">
          <h1 className="uppercase text-theme-red text-6xl text-center">
            Find The Job That Fits your Life
          </h1>
        </div>
        <div className="mb-[3rem]">
          <h3 className=" text-theme-yellow  text-center text-[16px]">
            We offer thousands of jobs vacancies right now
          </h3>
        </div>

        <div className="flex justify-center w-full">
          <SearchBarCmp />
          <SearchBox2Location />
        </div>
        <div>
          <p className="text-center text-2xl mt-3">
            Browse job offers by Category or location
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindJobCmp;
