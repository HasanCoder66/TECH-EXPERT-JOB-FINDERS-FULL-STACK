import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CreateButton = ({ btnText, setIsTitleModalOpen }) => {
  return (
    <div
      onClick={() => setIsTitleModalOpen(true)}
      className="flex w-2/6 h-full m-10 items-center justify-between p-8 bg-white rounded-lg shadow-lg cursor-pointer"
    >
      <BsFillPlusCircleFill className="text-theme-red text-6xl" />
      <span className="text-2xl"> {btnText}</span>
    </div>
  );
};

export default CreateButton;
