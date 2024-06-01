import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
import UserProfileAvatar from "../../../assets/profile-avatar.jpg";
import { useSelector } from "react-redux";
import { ImBackward2, ImForward3 } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";

// const user = useSelector((state) => state?.user?.currentUser);

const CoverPhoto = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="">
        {/* Body */}
        <div className="flex  min-h-[36rem] ">
          {/* Left Container */}
          <div className="w-4/12">
            {/* Image Container */}
            <div className="userProfileCard col-span-4 flex flex-col items-center gap-[1rem] p-[1rem] max-h-[24rem] max-w-[26rem]  bg-[#e4e4e4]">
              <img
                src={UserProfileAvatar}
                alt="UserProfilePic"
                className=" h-[10rem] w-[9rem] rounded-lg object-fill shadow-lg border-neutral-300 border-[0.2rem]"
              />

              <button className="bg-theme-red text-[1rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-lg">
                <IoCloudUpload className="text-[1.5rem] leading-[1.6rem]" />
                <span className="tracking-[0.05rem]">UPLOAD CV PHOTO</span>
              </button>

              <h4 className="text-[1.2rem] font-bold text-center mb-3 leading-[2rem]  text-neutral-600 mt-[1rem] px-5">
                {
                  "Acceptable formats: .JPG, .GIF, .PNG, File size is limited to 2 MB"
                }
              </h4>
            </div>
          </div>
          {/* Right Container */}
          <div className="w-10/12 ">
            <div>
              <h1 className="text-2xl font-semibold">CV PHOTO TIPS</h1>
              <p className="text-lg">
                - Your final photo should show your head, neck and shoulders
                only
              </p>
              <p className="text-lg">
                - Your photo will appear 3.5 cm wide by 4.5 cm tall
              </p>
              <p className="text-lg">- Acceptable formats: .JPG, .GIF, .PNG.</p>
              <p className="text-lg">File size is limited to 2 MB</p>
              <p className="text-lg">
                <span className="text-theme-red">WARNING:</span> Including a
                photo with your COVER LETTER is not recommended when applying
                for jobs in the United Kingdom, the United States or Canada.
                Only use this template if you intend to apply for jobs outside
                these areas or have a specific need for a COVER LETTER that
                includes a photo. Otherwise, please click the Back button to
                choose another template
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold my-5">Add Social Link</h1>
              <form action="#" className="w-full flex flex-col gap-[2rem]">
                {/* Row First */}
                <div className="rowFirst grid grid-cols-2 gap-[2rem]">
                  {/* Facebook Username */}
                  <div className="jobTitleInput flex flex-col gap-[.5rem]">
                    <label
                      htmlFor="facebookUsername"
                      className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                    >
                      Facebook (Username)
                    </label>
                    <input
                      type="text"
                      name="facebookUsername"
                      id="facebookUsername"
                      placeholder="eg. malik abbas"
                      className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                    />
                  </div>

                  {/* Twitter userName */}
                  <div className="employerInput flex flex-col gap-[.5rem]">
                    <label
                      htmlFor="twitterUsername"
                      className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                    >
                      Twitter (Username)
                    </label>
                    <input
                      type="text"
                      name="twitterUsername"
                      id="twitterUsername"
                      placeholder="eg mycvcreator"
                      className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                    />
                  </div>
                </div>

                {/* Row Second */}
                <div className="rowSecond grid grid-cols-2 gap-[2rem]">
                  {/* Street Address */}
                  <div className="firstNameInput flex flex-col gap-[0.5rem]">
                    <label
                      htmlFor="LinkedinUsername"
                      className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                    >
                      LinkedIn (Username)
                    </label>
                    <input
                      type="text"
                      name="LinkedinUsername"
                      id="LinkedinUsername"
                      placeholder="eg mycvcreator"
                      className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                    />
                  </div>

                  {/* City */}
                  <div className="middleNameInput flex flex-col gap-[0.5rem]">
                    <label
                      htmlFor="website"
                      className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="yourwebsite.com"
                      className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-between mt-10 py-[1rem]">
          <button className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
            <ImBackward2 size={20} />
            <span>Previous</span>
          </button>

          <button className="bg-[#18da35] text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
            <TfiSave />
            <span>Save</span>
          </button>

          <button className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
            <span>Next</span>
            <ImForward3 size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CoverPhoto;
