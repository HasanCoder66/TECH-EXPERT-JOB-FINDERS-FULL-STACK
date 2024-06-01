import React from "react";
import DashHomeSlider from "../../components/Dashboard/DashHomeSlider";
import DashQuestion from "../../components/Dashboard/DashQuestion";

const DashHome = ({ isSidebarOpen }) => {
  return (
   
    <>
      <DashHomeSlider />
      <DashQuestion />
      </>
    
  );
};

export default DashHome;
