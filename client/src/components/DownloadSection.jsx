import React from "react";
import windowicon from "../assets/windows.png";
import appleicon from "../assets/images.jpg";
import linuxicon from "../assets/linux.png";
function DownloadSection() {
  return (
    <div className="bg-coral-light py-14">
      <div className="text-center pt-10">
        <h2 className="text-theme-yellow text-4xl mb-2">Our Products</h2>
        <h1 className="text-theme-red text-6xl font-bold">
          Download Any Of Our Apps
        </h1>
        <h1 className="text-theme-black text-5xl font-bold pt-24">Desktop</h1>
      </div>
      <div className="pt-24 text-center flex gap-14 justify-center">
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={windowicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on Windows 10</span>
        </button>
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={appleicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on AppStore</span>
        </button>
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={windowicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on Windows</span>
        </button>
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={linuxicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on Linux</span>
        </button>
      </div>

      <h1 className="text-theme-red text-5xl font-bold pt-24 text-center">
        Mobile
      </h1>
      <div className="pt-24 text-center flex gap-14 justify-center">
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={windowicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on Windows 10</span>
        </button>
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={appleicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on AppStore</span>
        </button>
        <button className="flex items-center bg-black text-white py-8 px-8 rounded-md ">
          <img src={windowicon} alt="Windows Logo" className="w-12 h-12 mr-2" />
          <span className="text-2xl">Get it on Windows</span>
        </button>
      </div>
    </div>
  );
}

export default DownloadSection;
