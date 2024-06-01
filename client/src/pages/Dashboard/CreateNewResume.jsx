import React, { useState } from "react";

// Import Icons
import { IoMdAdd } from "react-icons/io";
import { GiIciclesFence } from "react-icons/gi";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { HiMiniXMark } from "react-icons/hi2";

// Components
import ProfileForm from "../../components/Dashboard/CreateResumeForms/ProfileForm";
import ExperienceForm from "../../components/Dashboard/CreateResumeForms/ExperienceForm";
import EducationForm from "../../components/Dashboard/CreateResumeForms/EducationForm";
import SkillsForm from "../../components/Dashboard/CreateResumeForms/SkillsForm";
import SummaryForm from "../../components/Dashboard/CreateResumeForms/SummaryForm";
import LanguageForm from "../../components/Dashboard/CreateResumeForms/LanguageForm";
import CertificationForm from "../../components/Dashboard/CreateResumeForms/CertificationForm";
import PhotoAndLinksForm from "../../components/Dashboard/CreateResumeForms/PhotoAndLinksForm";

const ResumeForm = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const getTabClassNames = (tabName) => {
    return activeTab === tabName ? "bg-red-500 text-white rounded-full" : "";
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mainCont w-full h-full p-[3rem]">
      <div className="wrapper w-full h-full bg-white py-[1.5rem] px-[1.5rem] shadow-2xl rounded-2xl">
        {/* Create Resume Form Tabs */}
        <div className="tabCont flex flex-wrap items-center gap-[1.5rem] border-b-[0.2rem] border-neutral-200 py-[2rem] px-[1rem]">
          {/* Tabs */}
          <div className="flex items-center gap-[0.5rem]">
            {[
              "Profile",
              "Experience",
              "Education",
              "Skills",
              "Summary",
              "Languages",
              "Certifications",
              "Photo",
            ].map((tabname, index) => (
              <span
                key={index}
                onClick={() => handleTabClick(tabname)}
                className={`text-[1.6rem] leading-[1.6rem] px-6 py-4 cursor-pointer ${getTabClassNames(
                  tabname
                )} text-theme-red`}
              >
                {tabname}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-[1rem]">
            {/* <button className="text-[1.7rem] leading-[1.7rem] px-[1.2rem] py-[1rem] flex items-center gap-[0.6rem] bg-theme-red text-white shadow-md rounded-md whitespace-nowrap">
              <IoMdAdd />
              <span>Add Section</span>
            </button> */}

            <button className="text-[1.7rem] leading-[1.7rem] px-[1.2rem] py-[1rem] flex items-center gap-[0.6rem] bg-theme-black text-white shadow-md rounded-md whitespace-nowrap">
              <GiIciclesFence />
              <span>Ask AI</span>
            </button>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bottomCont flex flex-col gap-[2rem] p-[1.5rem]">
          {/* Tabs Info Cont */}
          <div className="w-full relative bg-theme-red px-[1.5rem] py-[1.5rem] flex items-start gap-[1.5rem] text-white rounded-md">
            <div className="iconCont text-[2rem]">
              <PiLightbulbFilamentBold />
            </div>

            <div className="textCont flex flex-col gap-[0.4rem] text-[1.4rem] leading-[1.7rem] pr-[3rem]">
              {activeTab === "Profile" ? (
                <>
                  <span>What's the best way for Employers to contact you?</span>
                  <span>We suggest including an email and phone number.</span>
                </>
              ) : activeTab === "Experience" ? (
                <>
                  <span>Now, let's fill out your work history</span>
                  <span>
                    Here's what you need to know: Employers scan your resume for
                    six seconds to decide if you're a match
                  </span>
                  <span>
                    We'll suggest bullet points that make a great impression
                  </span>
                </>
              ) : activeTab === "Education" ? (
                <>
                  <span>Tell us about your education</span>
                  <span>
                    Include every school, even if you're still there or didn't
                    graduate.
                  </span>
                </>
              ) : activeTab === "Skills" ? (
                <>
                  <span>Next, let's take care of your skills</span>
                  <span>
                    Here's what you need to know: Employers scan skills for
                    relevant keywords,
                  </span>
                  <span>
                    Enter 4-6 skills that are most relevant to your desired job.
                  </span>
                </>
              ) : activeTab === "Summary" ? (
                <>
                  <span>
                    Briefly describe the value that you bring through your
                    skills, background and experience
                  </span>
                  <span>
                    Write a career overview so that hiring managers can
                    immediately see the value that you bring.
                  </span>
                </>
              ) : activeTab === "Languages" ? (
                <>
                  <span>What languages do you Speak?</span>
                  <span>.....</span>
                </>
              ) : activeTab === "Certifications" ? (
                <>
                  <span>Certifications</span>
                  <span>Showcase your certifications to an employer</span>
                </>
              ) : (
                activeTab === "Photo" && (
                  <>
                    <span>Photo / Social Links</span>
                    <span>
                      Including a photo with your CV is not recommended when
                      applying for jobs in the United Kingdom, the United States
                      or Canada. Only use this template if you intend to apply
                      for jobs outside these areas or have a specific need for a
                      CV that includes a photo. Otherwise, please click the
                      Finish button to Finish button to Download Resume.
                    </span>
                  </>
                )
              )}
            </div>

            <button className="absolute top-[1rem] right-[1.5rem] text-white text-[2rem]">
              <HiMiniXMark />
            </button>
          </div>

          {/* Create Resume Forms */}
          {activeTab === "Profile" ? (
            <ProfileForm />
          ) : activeTab === "Experience" ? (
            <ExperienceForm />
          ) : activeTab === "Education" ? (
            <EducationForm />
          ) : activeTab === "Skills" ? (
            <SkillsForm />
          ) : activeTab === "Summary" ? (
            <SummaryForm />
          ) : activeTab === "Languages" ? (
            <LanguageForm />
          ) : activeTab === "Certifications" ? (
            <CertificationForm />
          ) : (
            activeTab === "Photo" && <PhotoAndLinksForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
