import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import SelectResumeTemplateListing from "./SelectResumeTemplateListing";

function SelectResumeTemplateModal({ setIsResumeTemplateModalOpen }) {
  const [activeTab, setActiveTab] = useState("free");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getTabClassNames = (tabName) => {
    return activeTab === tabName ? "bg-red-500 text-white rounded-full" : "";
  };

  return (
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[700px] relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsResumeTemplateModalOpen(false)}
        >
          <FiX className="text-theme-red" size={24} />
        </button>
        <h2 className="text-center text-5xl font-semibold mb-4 text-theme-red">
          Choose a Resume Template
        </h2>
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">
          The Template will be use for you personal resume
        </h2>
        <hr />
        <div className="px-[6.5rem] py-[2rem]">
          <span
            className={`text-2xl p-4 cursor-pointer ${getTabClassNames(
              "free"
            )}`}
            onClick={() => handleTabClick("free")}
          >
            Free Template
          </span>
          <span
            className={`text-2xl p-4 cursor-pointer ${getTabClassNames(
              "premium"
            )}`}
            onClick={() => handleTabClick("premium")}
          >
            Premium Template
          </span>
          <span
            className={`text-2xl p-4 cursor-pointer ${getTabClassNames("my")}`}
            onClick={() => handleTabClick("my")}
          >
            My Template
          </span>
        </div>
        <div className=" w-full px-[6.5rem] ">
          <input
            type="search"
            placeholder="Search"
            className="border w-full p-4 rounded-lg"
            name=""
            id=""
          />
        </div>
        <SelectResumeTemplateListing activeTab={activeTab} />
      </div>
    </div>
  );
}

export default SelectResumeTemplateModal;
