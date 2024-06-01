import React, { useState } from "react";
import FinishSelectTemplateListing from "./FinishSelectTemplateListing";
function FinishTemplateTabBar({ setIsSelectTemplateOpen }) {
  const [activeTab, setActiveTab] = useState("free");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getTabClassNames = (tabName) => {
    return activeTab === tabName ? "bg-red-500 text-white rounded-full" : "";
  };

  return (
    <div className=" flex justify-center items-center mt-5">
      <div className="bg-white w-full  ">
        <div className="px-[.5rem] py-[1.5rem] ">
          <span
            className={`text-lg px-4 py-2  cursor-pointer ${getTabClassNames(
              "free"
            )}`}
            onClick={() => handleTabClick("free")}
          >
            Free
          </span>
          <span
            className={`text-lg px-4 py-2  cursor-pointer ${getTabClassNames(
              "premium"
            )}`}
            onClick={() => handleTabClick("premium")}
          >
            Premium
          </span>
          <span
            className={`text-lg px-4 py-2  cursor-pointer ${getTabClassNames(
              "my"
            )}`}
            onClick={() => handleTabClick("my")}
          >
            My Template
          </span>
        </div>
        <div className=" w-full ">
          <input
            type="search"
            placeholder="Search"
            className="border w-full p-4 rounded-lg"
            name=""
            id=""
          />
        </div>
        <FinishSelectTemplateListing activeTab={activeTab} />
      </div>
    </div>
  );
}

export default FinishTemplateTabBar;
