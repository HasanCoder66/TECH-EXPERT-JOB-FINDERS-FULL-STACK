import React, { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import UserProfileAvatar from "../../../assets/profile-avatar.jpg";
import { ImBackward2, ImForward3 } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";

const PhotoAndLinksForm = () => {
  const dispatch = useDispatch()
  const resumeData = useSelector((state) => state.resume.resumeAllData)
  console.log(resumeData);
  // const [userImage, setUserImage] = useState("");
  // const [profileImg, setProfileImg] = useState("");
  const [fbUserName, setFbUserName] = useState("");
  const [twitterUserName, setTwitterUserName] = useState("");
  const [linkedinUserName, setLinkedinUserName] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");

  console.log(fbUserName);
  console.log(twitterUserName);
  console.log(linkedinUserName);
  console.log(websiteLink);

  const saveLinksDataHandler = (e) => {
    e.preventDefault();
    console.log("save Links handler is working");
    const payload = {
      ...resumeData,
      fbUserName,
      twitterUserName,
      linkedinUserName,
      websiteLink,
    };
    dispatch(resumeSuccess(payload));
  };
  return (
    <>
      <div className="">
        {/* Body */}
        <div className="w-full flex justify-between">
          {/* Left Container */}
          {/* <div className="w-[35%] pr-[2rem]">
            {/* Image Info Container */}

          <div>
            <h4 className="text-[2.2rem] font-normal my-5">Add Social Link</h4>
            <form action="#" className="w-full flex flex-col gap-[2rem]">
              {/* Row First */}
              <div className="rowFirst grid grid-cols-2 gap-[2rem]">
                {/* Facebook Username */}
                <div className="jobTitleInput flex flex-col gap-[.5rem]">
                  <label
                    htmlFor="facebookUsername"
                    className="text-[1.4rem] mb-[0.2rem] leading-[1.5rem] text-theme-red"
                  >
                    Facebook (Username)
                  </label>
                  <input
                    onChange={(e) => setFbUserName(e.target.value)}
                    type="text"
                    name="facebookUsername"
                    id="facebookUsername"
                    placeholder="eg. malik abbas"
                    className="outline-none px-[1rem] py-[0.6rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.1rem] rounded-md focus:border-theme-red"
                  />
                </div>

                {/* Twitter userName */}
                <div className="employerInput flex flex-col gap-[.5rem]">
                  <label
                    htmlFor="twitterUsername"
                    className="text-[1.4rem] mb-[0.2rem] leading-[1.5rem] text-theme-red"
                  >
                    Twitter (Username)
                  </label>
                  <input
                    onChange={(e) => setTwitterUserName(e.target.value)}
                    type="text"
                    name="twitterUsername"
                    id="twitterUsername"
                    placeholder="eg mycvcreator"
                    className="outline-none px-[1rem] py-[0.6rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.1rem] rounded-md focus:border-theme-red"
                  />
                </div>
              </div>

              {/* Row Second */}
              <div className="rowSecond grid grid-cols-2 gap-[2rem]">
                {/* Street Address */}
                <div className="firstNameInput flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="LinkedinUsername"
                    className="text-[1.4rem] mb-[0.2rem] leading-[1.5rem] text-theme-red"
                  >
                    LinkedIn (Username)
                  </label>
                  <input
                    onChange={(e) => setLinkedinUserName(e.target.value)}
                    type="text"
                    name="LinkedinUsername"
                    id="LinkedinUsername"
                    placeholder="eg mycvcreator"
                    className="outline-none px-[1rem] py-[0.6rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.1rem] rounded-md focus:border-theme-red"
                  />
                </div>

                {/* City */}
                <div className="middleNameInput flex flex-col gap-[0.5rem]">
                  <label
                    htmlFor="website"
                    className="text-[1.4rem] mb-[0.2rem] leading-[1.5rem] text-theme-red"
                  >
                    Website
                  </label>
                  <input
                    onChange={(e) => setWebsiteLink(e.target.value)}
                    type="link"
                    name="website"
                    id="website"
                    placeholder="yourwebsite.com"
                    className="outline-none px-[1rem] py-[0.6rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.1rem] rounded-md focus:border-theme-red"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="btnRow w-full flex justify-between mt-10 py-[2rem]">
        <button className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
          <ImBackward2 size={20} />
          <span>Previous</span>
        </button>

        <button
          onClick={saveLinksDataHandler}
          className="bg-[#18da35] text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
          <TfiSave />
          <span>Save</span>
        </button>

        <button className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
          <span>Next</span>
          <ImForward3 size={20} />
        </button>
      </div>
    </>
  );
};

export default PhotoAndLinksForm;

{
  /* <div className="imageInfo flex flex-col items-center gap-[1rem] px-[2rem] py-[2rem] w-full bg-neutral-100">
              <div className="imgCOnt h-[22rem] w-[20rem] rounded-lg shadow-sm border-neutral-300 border-[0.2rem]">
                {userImage && (
                  <img
                    src={userImage}
                    alt="userImage"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="inputImageFile">
                <label
                  htmlFor="inputProfileImage"
                  className="bg-theme-red text-[1.4rem] leading-[1.4rem] flex items-center gap-[0.5rem] text-white px-[3rem] py-[1rem] rounded-lg whitespace-nowrap cursor-pointer"
                >
                  <IoCloudUpload className="text-[1.6rem] leading-[1.6rem]" />
                  <span>UPLOAD CV PHOTO</span>
                </label>

                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  id="inputProfileImage"
                  className="hidden"
                />
              </div>

              <span className="text-[1.6rem] font-normal text-center leading-[2rem]  text-neutral-700 mt-[1rem]">
                Acceptable formats: .JPG, .GIF, .PNG, File size is limited to 2
                MB
              </span>
            </div>
          </div> 

          {/* Right Container */
}
// <div className="w-[65%]">
//   <div>
//     <h4 className="text-[1.8rem] font-medium">CV PHOTO TIPS</h4>
//     <p className="text-[1.5rem] font-normal">
//       - Your final photo should show your head, neck and shoulders
//       only
//     </p>
//     <p className="text-[1.5rem] font-normal">
//       - Your photo will appear 3.5 cm wide by 4.5 cm tall
//     </p>
//     <p className="text-[1.5rem] font-normal">
//       - Acceptable formats: .JPG, .GIF, .PNG.
//     </p>
//     <p className="text-[1.5rem] font-normal">
//       File size is limited to 2 MB
//     </p>
//     <p className="text-[1.5rem] font-normal mt-[0.5rem]">
//       <span className="text-theme-red">WARNING:</span> Including a
//       photo with your CV is not recommended when applying for jobs in
//       the United Kingdom, the United States or Canada. Only use this
//       template if you intend to apply for jobs outside these areas or
//       have a specific need for a CV that includes a photo. Otherwise,
//       please click the Finish button to Download Resume.
//     </p>
//   </div>
