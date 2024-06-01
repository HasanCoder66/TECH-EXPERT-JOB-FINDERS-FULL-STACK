import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const  DashjobCard= (data) => {
  const { companyName, designation, general, location, country } = data.data;
  return (
    <div className="flex gap-5 items-start p-6 mb-5 shadow-lg rounded-md bg-white w-[400px] h-[150px]">
      <div className="bg-gray-200 p-2 rounded-full">
        <WorkOutlineIcon />
      </div>
      <div className=" flex-grow">
        <p className="text-3xl font-semibold mt-1">{companyName}</p>
        <p className="text-lg font-bold mt-1">{designation}</p>
       
       
        <p className="text-xl mt-1 mb-4">{country}</p>
        <button className='bg-theme-red overflow-hidden p-4  w-full text-white rounded-2xl  before:transition-all before:duration-[1200ms] relative z-[10] before:content-[""] before:absolute before:z-[-1] before:w-full before:h-full before:bg-theme-yellow before:top-0 before:left-0  before:translate-x-[-125%]  hover:before:translate-x-[0%] before:rounded-2xl'>
          Apply
        </button>
      </div>
      <div>
  <p className="text-theme-red">3m</p>
      </div>
    </div>
  );
};

export default DashjobCard;
