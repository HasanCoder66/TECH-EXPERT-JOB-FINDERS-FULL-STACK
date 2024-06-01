import React from "react";
import ResumeCardListing from "../../components/Dashboard/ResumeCardListing";
import TemplateTabBar from "../../components/Dashboard/TemplateTabBar";
import { useState } from "react";
import DashViewProduct from "../../components/Dashboard/DashViewProduct";
function DashTemplate() {
  const [activeTab, setActiveTab] = useState("resume");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const openModal = (template) => {
      setSelectedTemplate(template);
      setIsModalOpen(true);
      console.log(template)
  };


  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedTemplate(null);
  };
  return (
    <div className="bg-white  m-[3rem] ">
      <TemplateTabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleTabClick={handleTabClick}
      />
      <ResumeCardListing activeTab={activeTab} openModal={openModal} />
      {isModalOpen && (
                <DashViewProduct openModal={isModalOpen} closeModal={closeModal} template={selectedTemplate} />
            )}
      <div className="loadMoreCont w-full flex justify-center py-6">
        <button className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all overflow-hidden before:content-[''] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300">
          Load More
        </button>
      </div>
    </div>
  );
}

export default DashTemplate;
