// export default DashQuestion;
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { GoReply } from "react-icons/go";
import DashPost from "./DashPost";
import DashJob from "./DashJob";
const DashQuestion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUploadPhotoClick = () => {  
    document.getElementById("fileInput").click();
  };

  return (
    <div className="p-[4rem] w-full flex justify-between">
      <div className="w-[55%]">
        <div className="bg-theme-red w-full p-8 rounded-lg">
          <p className="text-xl text-white">AI Assistance</p>
          <p className="text-xl text-white">
            Ask AI Assistance Question about Career, Jobs, Business and Finance
          </p>
          <button className="bg-white text-theme-red p-2 text-xl mt-2 rounded-lg font-semibold">
            AI Assistance
          </button>
        </div>
        <div className="w-full mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <textarea
              className="w-full p-4 text-2xl border border-gray-300 rounded-lg mb-4"
              placeholder="Type your question here..."
              rows="4"
              onClick={openModal}
            ></textarea>
            <div className="flex justify-between">
              <button className="bg-white shadow-lg text-theme-red p-2 text-xl rounded-lg font-semibold">
                Upload Photo
              </button>
              <button className="bg-white shadow-lg flex text-theme-red p-2 text-xl rounded-lg font-semibold">
                <span>Ask Question</span>
                <GoReply className="text-2xl" />
              </button>
            </div>
          </div>
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/b9Mpa6r5yDg"
            title="Build professional resume and cover letter for free"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <DashPost />

        {isModalOpen && (
          <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
              <button className="absolute top-4 right-4" onClick={closeModal}>
                <FiX className="text-theme-red" size={24} />
              </button>
              <h2 className="text-center text-2xl font-semibold mb-4 text-theme-red">
                Ask Question?
              </h2>
              <textarea
                className="w-full text-2xl p-4 border border-gray-300 rounded-lg mb-4"
                placeholder="Type your question here..."
                rows="6"
              ></textarea>
              <div className="flex justify-between">
                <button
                  className="bg-white shadow-lg text-theme-red p-2 text-xl rounded-lg font-semibold"
                  onClick={handleUploadPhotoClick}
                >
                  Upload Photo
                </button>
                <button className="bg-white shadow-lg text-theme-red flex p-2 text-xl rounded-lg font-semibold">
                  <span>Ask Question</span>
                  <GoReply className="text-2xl" />
                </button>
              </div>
              {/* Hidden file input element */}
              <input id="fileInput" type="file" style={{ display: "none" }} />
            </div>
          </div>
        )}
      </div>
      <div className="w-[40%]">
        <DashJob />
      </div>
    </div>
  );
};

export default DashQuestion;
