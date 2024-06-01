import React from "react";

const DashOverlay = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className={`overlay fixed z-50 top-0 left-0 w-full h-dvh bg-[#ffffffa0] backdrop-blur-[0.2rem] ${
        isModalOpen ? "block" : "hidden"
      }`}
    ></div>
  );
};

export default DashOverlay;
