import React, { useState } from "react";
import CreateButton from "../../components/Dashboard/CreateButton";
import DashUserResumeCard from "../../components/Dashboard/DashUserResumeCard";
import EnterResumeTitleModal from "../../components/Dashboard/EnterResumeTitleModal";

const DashResume = () => {
  const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);

  return (
    <>
      <div className=" flex-1 bg-coral-light m-10">
        <div className="flex pr-8 items-center h-[10rem]  mb-5">
          <div className="bg-theme-red w-2/6 p-8 h-full rounded-lg">
            <p className="text-xl text-white">
              <span className="text-2xl font-bold">Pro Tip: </span> It's
              important to create a custom resume tailored to each job
              application to increase your chances of success!
            </p>
          </div>

          <CreateButton
            btnText="Create New Resume"
            setIsTitleModalOpen={setIsTitleModalOpen}
          />
        </div>
        <DashUserResumeCard cardName="Name" />
      </div>
      <EnterResumeTitleModal
        isTitleModalOpen={isTitleModalOpen}
        setIsTitleModalOpen={setIsTitleModalOpen}
      />
    </>
  );
};

export default DashResume;
