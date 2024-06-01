import React, { useState, useEffect } from "react";

import SelectResumeTemplateModal from "./SelectResumeTemplateModal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";


// const dispatch = useDispatch()
// const [title, setTitle] = useState("")
// const resumedData = useSelector()
const EnterResumeTitleModal = ({ isTitleModalOpen, setIsTitleModalOpen }) => {
  const [isResumeTemplateModalOpen, setIsResumeTemplateModalOpen] =
    useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  useEffect(() => {
    if (isResumeTemplateModalOpen) {
      // Set the initial state for the second modal if the first one is closed
      setIsTitleModalOpen(false);
    }
  }, [isResumeTemplateModalOpen, setIsTitleModalOpen]);

  const handleCreateClick = () => {

    if (resumeTitle) {
      // dispatch(resumeSuccess(resumeTitle))
      setIsTitleModalOpen(false);
      setTimeout(() => {
        setIsResumeTemplateModalOpen(true);
      }, 300);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please! Enter the Resume Title",
      });
    }
  };

  return (
    <div>
      <div
        className={`w-full fixed z-50 top-0 left-0 h-dvh flex justify-center ${
          isTitleModalOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsTitleModalOpen(false)}
          className={`overlay absolute z-50 top-0 left-0 w-full h-full bg-[#222222a0]`}
        ></div>

        {/* Modal */}
        <div
          className={`w-[50rem] p-[2rem] absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
        >
          <h2 className="text-[2rem] leading-[2rem] font-medium">
            Enter Resume Title
          </h2>
          <p className="text-[1.5rem] leading-[1.5rem] font-normal">
            This name will be used to save your resume.
          </p>

          <input
            type="text"
            // onChange={(e) => setTitle(e.target.value) }
            name="ResumeTitle"
            id="ResumeTitle"
            onChange={(e) => setResumeTitle(e.target.value)}
            placeholder="Enter Resume Title"
            className="w-full px-[1rem] py-[0.5rem] text-[1.5rem] outline-none border-[0.2rem] border-neutral-300"
          />

          <div className="buttons w-full flex justify-end items-center gap-[1rem]">
            <button
              className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-red text-white rounded-sm"
              onClick={() => setIsTitleModalOpen(false)}
            >
              Close
            </button>
            <button
              onClick={handleCreateClick}
              className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-yellow text-white rounded-sm"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      {isResumeTemplateModalOpen && (
        <div>
          <SelectResumeTemplateModal
            setIsResumeTemplateModalOpen={setIsResumeTemplateModalOpen}
          />
        </div>
      )}
    </div>
  );
};

export default EnterResumeTitleModal;
