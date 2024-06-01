import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaToolbox } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const JobsAlert = () => {
  return (
    <div className="p-10 ">
      <div className=" w-[90%]  shadow-lg mx-10 searchBar flex items-center gap-10 bg-white px-5 py-1 rounded-lg">
        <input
          type="text"
          name="Serach"
          id="Search"
          placeholder="Job Title, Keywords, or company"
          className="m-3 w-[40%] px-[0.7rem] py-[0.75rem] text-[1.35rem] leading-[1.35rem] outline-none rounded-lg border"
        />
        <input
          type="text"
          name="Serach"
          id="Search"
          placeholder="Location"
          className="m-3 w-[40%] px-[0.7rem] py-[0.75rem] text-[1.35rem] leading-[1.35rem] outline-none rounded-lg border"
        />
        <button
          htmlFor="Search"
          className="bg-theme-red flex items-center gap-2 px-5 text-white p-[0.7rem] text-[1.6rem] rounded-lg hover:bg-[#ec4943d9] transition-all"
        >
          <FiSearch />
          Search
        </button>
      </div>
      <div className=" w-[90%] mt-10 m-10  py-5 text-2xl flex items-center gap-10 bg-white px-5  rounded-lg">
        <h1>
          Home / <span className="text-theme-red"> Recent Jobs Alert</span>
        </h1>
      </div>
      <div className="w-[88%] flex mx-14 max-h-[35rem]">
        {/* Left Div */}
        <div className="w-1/2 border  max-h-full scrollbar-light overflow-y-auto">
          <div>
            <h1 className="text-2xl font-bold border p-5">
              Most Recent Jobs
            </h1>
          </div>
          <Recentjobs/>
          <Recentjobs/>
          <Recentjobs/>
          <Recentjobs/>
          <Recentjobs/>
          <Recentjobs/>
          
        </div>
        {/* Right Div */}
        <div className="w-1/2 border p-5">
          <div className="flex justify-between">
            <div className="flex">
              <div className="border border-slate-300 max-w-fit flex items-center">
                <FaToolbox className="text-white bg-theme-red text-6xl rounded-full p-2 mx-8 " />
              </div>
              <div className="ms-5 text-md">
                <h1>The World Bank</h1>
                <h1>The University of Haripur Latest Jobs</h1>
                <h1 className="text-theme-red">General</h1>
                <h1>Pakistan - Karachi Sindh, Pakistan | Full Time</h1>
              </div>
            </div>
            <div className="mb-8 flex justify-center">
              <button
                htmlFor="Search"
                className="bg-theme-red flex items-center gap-1 px-8  text-white  text-[1rem] rounded-lg hover:bg-[#ec4943d9] transition-all"
              >
                <FaShare />
                Apply
              </button>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <h1 className="my-5 text-xl">Job Description</h1>
            <p>
              Today Jobs, this page inform you about The University of Haripur
              Latest jobs Published today in Leading Newspaper for Males and
              Female Applicants. The University of Haripur is looking the
              services of Excellent and Experienced applicants for the posts
              given below From Pakistan Nationality Holders. So if you are
              interested and you have the required Qualification or Experience
              for this job then apply as soon as possible and avail such a great
              opportunity and make your future successful by having jobs in such
              a well reputed department. Eligible Selected Individuals will be
              Paid Attractive Salary Packages.
            </p>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between">
            <button
              htmlFor="Search"
              className=" border border-slate-300 flex items-center gap-1 px-3 p-[0.7rem] text-[1rem] rounded-lg hover:underline"
            >
              <MdReportProblem  className="text-theme-red"/>
              Report this job
            </button>
            <button
              htmlFor="Search"
              className="border border-theme-red text-theme-red flex items-center gap-1 px-10 p-[0.7rem] text-[1rem] rounded-lg hover:bg-theme-red hover:text-white"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsAlert;


const Recentjobs = () =>{
  return(
    <>
    <div className="flex justify-between p-3">
            <div className="flex">
              <div className="border border-slate-300 max-w-fit flex items-center">
                <FaToolbox className="text-white bg-theme-red text-6xl rounded-full p-2 mx-8 " />
              </div>
              <div className="ms-5 text-md">
                <h1>The World Bank</h1>
                <h1>The University of Haripur Latest Jobs</h1>
                <h1 className="text-theme-red">General</h1>
                <h1>Pakistan - Karachi Sindh, Pakistan | Full Time</h1>
              </div>
            </div>
            <div className="mb-8 flex justify-center">
              <span >3m</span>
            </div>
          </div>
          <hr className="" />
          </>
  )
}