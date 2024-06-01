import React from "react";

import { jobCardData } from "../../dummyData";
import DashjobCard from "./DashJobCard";
const DashJob = () => {
  return (
    <div>
   

      <div className="flex justify-evenly flex-wrap py-[2rem]">
        {jobCardData.map((data, index) => (
          <DashjobCard data={data} key={index} />
        ))}
      </div>

      
    </div>
  );
};

export default DashJob;