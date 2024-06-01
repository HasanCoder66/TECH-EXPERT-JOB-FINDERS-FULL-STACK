import React from "react";
import FindJobCmp from "../components/FindJobCmp";
import JobListingCmp from "../components/JobListingCmp";


const JobAlertPage = () => {
  return (
    <div className="w-full relative pt-[200px] bg-white">
      <FindJobCmp />
      <JobListingCmp />
    </div>
  );
};

export default JobAlertPage;
