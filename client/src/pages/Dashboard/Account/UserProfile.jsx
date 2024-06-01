// import React, { useRef, useState } from "react";

// // Import Icons
// import { MdOutlineStarPurple500 } from "react-icons/md";
// import { HiOutlineUpload } from "react-icons/hi";
// import { IoMdSettings } from "react-icons/io";
// import { FaBriefcase } from "react-icons/fa";
// import { IoCloudUpload, IoTimeOutline } from "react-icons/io5";
// import { PiArrowBendUpRightBold } from "react-icons/pi";
// import { FaEarthAmericas } from "react-icons/fa6";
// import { UPDATE_USER, UPLOAD_SINGLE_IMAGE } from "../../../constants/apis.js";
// // Import Image
// import UserProfileAvatar from "../../../assets/profile-avatar.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { uploadImgSuccess } from "../../../Redux/Slices/userSlices";

// const UserProfile = () => {
//   const user = useSelector((state) => state.user.currentUser);
//   // console.log(user._id)
//   const dispatch = useDispatch();
//   const [selectedImage, setSelectedImage] = useState("");
//   const [profilePhoto, setProfilePhoto] = useState(user.profileImg);

//   const updateUserProfilePic = async (imgUrl) => {
//     console.log(imgUrl)
//     try {
//       const res = await axios.put(`/api${UPDATE_USER}/${user._id}`, {profileImg:imgUrl});
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleImageChange = async (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const image = e.target.files[0];
//       setSelectedImage(image);

//       const formData = new FormData();
//       formData.append("photo", image);

//       try {
//         const response = await axios.post(
//           `/api${UPLOAD_SINGLE_IMAGE}`,
//           formData
//         );
//         const { data } = response;
//         // console.log(data);
//         setProfilePhoto(data.results[0].secure_url);
//         if (data.results[0].secure_url) {
//           updateUserProfilePic(data.results[0].secure_url);
//           dispatch(uploadImgSuccess(data.results[0].secure_url));
//         }
//         if (response.status === 200) {
//           console.log("Image uploaded successfully:");
//         } else {
//           console.error("Failed to upload image");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//   };

//   return (
//     <div className="px-[4rem] py-[4rem]">
//       {/* Row First */}
//       <div className="rowFirst grid grid-cols-12 gap-[4rem]">
//         {/* User Profile Card */}
//         <div className="userProfileCard col-span-4 flex flex-col items-center justify-center gap-[1.2rem] py-[3rem] px-[1rem] bg-white shadow-2xl rounded-2xl">
//           <img
//             src={profilePhoto || UserProfileAvatar}
//             alt="UserProfilePic"
//             className="w-[10rem] h-[10rem] rounded-full object-cover shadow-lg"
//           />

//           <h4 className="text-[2rem] leading-[2rem] font-normal">
//             {user.username}
//           </h4>

//           <span className="text-[2rem] leading-[2rem] text-theme-yellow flex">
//             {[1, 2, 3, 4, 5].map((e, index) => (
//               <MdOutlineStarPurple500 key={index} />
//             ))}
//           </span>

//           <label
//             htmlFor="selectImage"
//             className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md cursor-pointer"
//           >
//             <HiOutlineUpload className="text-[1.7rem] leading-[1.6rem]" />
//             <span>
//               {/* // onClick={editProfileWorkWithCloud} */}
//               Edit Photo
//             </span>
//           </label>
//           <input
//             onChange={handleImageChange}
//             type="file"
//             name="selectImage"
//             accept=".jpg, .png, .jpeg"
//             id="selectImage"
//             className="hidden"
//           />
//         </div>

//         {/* User Profile Info */}
//         <div className="userProfileInfo col-span-8 bg-white shadow-2xl rounded-2xl p-[2rem]">
//           <div className="subCont flex flex-col">
//             <div className="topInfo pb-[1.5rem] flex justify-between border-b-[0.1rem] border-neutral-300">
//               <div className="LeftSide flex gap-[3rem] text-neutral-800">
//                 {/* Followers */}
//                 <div className="followers flex flex-col gap-[0.6rem]">
//                   <span className="text-[2.2rem] leading-[2.2rem] font-medium">
//                     0
//                   </span>
//                   <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">
//                     Followers
//                   </span>
//                 </div>

//                 {/* Following */}
//                 <div className="following flex flex-col gap-[0.6rem]">
//                   <span className="text-[2.2rem] leading-[2.2rem] font-medium">
//                     0
//                   </span>
//                   <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">
//                     Following
//                   </span>
//                 </div>

//                 {/* Questions */}
//                 <div className="question flex flex-col gap-[0.6rem]">
//                   <span className="text-[2.2rem] leading-[2.2rem] font-medium">
//                     0
//                   </span>
//                   <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">
//                     Question
//                   </span>
//                 </div>
//               </div>

//               <div className="rightSide">
//                 <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md">
//                   <IoMdSettings className="text-[1.7rem] leading-[1.6rem]" />
//                   <span>Settings</span>
//                 </button>
//               </div>
//             </div>
//             <div className="desc py-[1rem]">
//               <p className="text-[1.5rem]">{user.aboutMe}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Row Second */}
//       <div className="rowSecond grid grid-cols-12 gap-[4rem] mt-[4rem]">
//         {/* User Question Feeds */}
//         <div className="userQuestionFeeds col-span-7 flex flex-col items-center gap-[2rem]">
//           {/* Alert Feeds Box */}
//           <div className="alertFeedsBox w-full bg-theme-red text-white p-[2rem] rounded-lg">
//             <p className="text-[1.5rem] leading-[1.5rem] ">
//               No question feeds at this time
//             </p>
//           </div>

//           {/* Feeds */}
//           <div className="feeds w-full flex flex-col gap-[2rem]"></div>

//           {/* Load More Btn */}
//           <div className="loadMoreBtnCont w-full flex justify-center">
//             <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[1rem] rounded-md">
//               Load more..
//             </button>
//           </div>
//         </div>

//         {/* Jobs Trending */}
//         <div className="jobsTrending col-span-5 flex flex-col gap-[1rem]">
//           <h4 className="ml-[1rem] text-[2rem] text-theme-red font-semibold">
//             Job / <span className="opacity-[0.8]">Trending</span>
//           </h4>

//           {/* Jobs Trending Cards */}
//           <div className="jobCardsCont flex flex-col gap-[3rem]">
//             {[1, 2, 3, 4].map((data, index) => (
//               <div
//                 key={index}
//                 className="profileJobsCard w-full bg-white p-[2rem] rounded-lg"
//               >
//                 {/* Card Top */}
//                 <div className="cardTop relative w-full flex items-center gap-[1rem] px-[1rem] py-[1rem] border-b-[0.1rem] border-neutral-300">
//                   {/* Job Icon */}
//                   <div className="icon text-[1.8rem] leading-[1.8rem] bg-theme-red text-white p-[0.8rem] rounded-full">
//                     <FaBriefcase />
//                   </div>

//                   {/* Job Company */}
//                   <h5 className="w-full pr-[3rem] text-[1.8rem] leading-[2rem] text-neutral-800 font-medium">
//                     Energy Department Punjab
//                   </h5>

//                   <div className="time absolute right-0 flex items-center gap-[0.2rem] text-[1.2rem] leading-[1.2rem]">
//                     <IoTimeOutline />
//                     <span>3 min</span>
//                   </div>
//                 </div>

//                 {/* Card Bottom */}
//                 <div className="cardBottom w-full flex flex-col gap-[1rem] px-[1rem] py-[1rem]">
//                   <p className="text-[2rem] leading-[2.4rem] font-medium">
//                     Archaeology Department Latest Jobs
//                   </p>

//                   <div className="text-[1.4rem] leading-[1.4rem] flex items-center gap-[0.2rem] text-neutral-500">
//                     <FaEarthAmericas />
//                     <span>Pakistan</span>
//                   </div>

//                   <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex justify-center gap-[1rem] text-white px-[2rem] py-[1.2rem] rounded-md  font-medium mt-[1rem] shadow-lg">
//                     <PiArrowBendUpRightBold className="text-[1.7rem] leading-[1.6rem]" />
//                     <span className="tracking-[0.05rem]">Apply Now</span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;














import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { UPDATE_USER, UPLOAD_SINGLE_IMAGE } from "../../../constants/apis";
import UserProfileAvatar from "../../../assets/profile-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { uploadImgSuccess } from "../../../Redux/Slices/userSlices";

const UserProfile = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(user.profileImg);

  const updateUserProfilePic = async (imgUrl) => {
    try {
      const res = await axios.put(`/api${UPDATE_USER}/${user._id}`, { profileImg: imgUrl });
      console.log("User profile updated response:", res);
    } catch (error) {
      console.log("Error updating user profile:", error);
    }
  };

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setSelectedImage(image);

      const formData = new FormData();
      formData.append("photo", image);

      try {
        const response = await axios.post(`/api${UPLOAD_SINGLE_IMAGE}`, formData);
        const { data } = response;
        console.log("Image upload response data:", data);

        setProfilePhoto(data.results[0].secure_url);
        if (data.results[0].secure_url) {
          await updateUserProfilePic(data.results[0].secure_url);
          dispatch(uploadImgSuccess(data.results[0].secure_url));
        }
        if (response.status === 200) {
          console.log("Image uploaded successfully");
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="px-[4rem] py-[4rem]">
      {/* Row First */}
      <div className="rowFirst grid grid-cols-12 gap-[4rem]">
        {/* User Profile Card */}
        <div className="userProfileCard col-span-4 flex flex-col items-center justify-center gap-[1.2rem] py-[3rem] px-[1rem] bg-white shadow-2xl rounded-2xl">
          <img
            src={profilePhoto || UserProfileAvatar}
            alt="UserProfilePic"
            className="w-[10rem] h-[10rem] rounded-full object-cover shadow-lg"
          />

          <h4 className="text-[2rem] leading-[2rem] font-normal">{user.username}</h4>

          <span className="text-[2rem] leading-[2rem] text-theme-yellow flex">
            {[1, 2, 3, 4, 5].map((e, index) => (
              <MdOutlineStarPurple500 key={index} />
            ))}
          </span>

          <label
            htmlFor="selectImage"
            className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md cursor-pointer"
          >
            <HiOutlineUpload className="text-[1.7rem] leading-[1.6rem]" />
            <span>Edit Photo</span>
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            name="selectImage"
            accept=".jpg, .png, .jpeg"
            id="selectImage"
            className="hidden"
          />
        </div>

        {/* User Profile Info */}
        <div className="userProfileInfo col-span-8 bg-white shadow-2xl rounded-2xl p-[2rem]">
          <div className="subCont flex flex-col">
            <div className="topInfo pb-[1.5rem] flex justify-between border-b-[0.1rem] border-neutral-300">
              <div className="LeftSide flex gap-[3rem] text-neutral-800">
                {/* Followers */}
                <div className="followers flex flex-col gap-[0.6rem]">
                  <span className="text-[2.2rem] leading-[2.2rem] font-medium">0</span>
                  <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">Followers</span>
                </div>

                {/* Following */}
                <div className="following flex flex-col gap-[0.6rem]">
                  <span className="text-[2.2rem] leading-[2.2rem] font-medium">0</span>
                  <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">Following</span>
                </div>

                {/* Questions */}
                <div className="question flex flex-col gap-[0.6rem]">
                  <span className="text-[2.2rem] leading-[2.2rem] font-medium">0</span>
                  <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">Question</span>
                </div>
              </div>

              <div className="rightSide">
                <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md">
                  <IoMdSettings className="text-[1.7rem] leading-[1.6rem]" />
                  <span>Settings</span>
                </button>
              </div>
            </div>
            <div className="desc py-[1rem]">
              <p className="text-[1.5rem]">{user.aboutMe}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row Second */}
      <div className="rowSecond grid grid-cols-12 gap-[4rem] mt-[4rem]">
        {/* User Question Feeds */}
        <div className="userQuestionFeeds col-span-7 flex flex-col items-center gap-[2rem]">
          {/* Alert Feeds Box */}
          <div className="alertFeedsBox w-full bg-theme-red text-white p-[2rem] rounded-lg">
            <p className="text-[1.5rem] leading-[1.5rem]">No question feeds at this time</p>
          </div>

          {/* Feeds */}
          <div className="feeds w-full flex flex-col gap-[2rem]"></div>

          {/* Load More Btn */}
          <div className="loadMoreBtnCont w-full flex justify-center">
            <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[1rem] rounded-md">
              Load more..
            </button>
          </div>
        </div>

        {/* Jobs Trending */}
        <div className="jobsTrending col-span-5 flex flex-col gap-[1rem]">
          <h4 className="ml-[1rem] text-[2rem] text-theme-red font-semibold">
            Job / <span className="opacity-[0.8]">Trending</span>
          </h4>

          {/* Jobs Trending Cards */}
          <div className="jobCardsCont flex flex-col gap-[3rem]">
            {[1, 2, 3, 4].map((data, index) => (
              <div key={index} className="profileJobsCard w-full bg-white p-[2rem] rounded-lg">
                {/* Card Top */}
                <div className="cardTop relative w-full flex items-center gap-[1rem] px-[1rem] py-[1rem] border-b-[0.1rem] border-neutral-300">
                  {/* Job Icon */}
                  <div className="icon text-[1.8rem] leading-[1.8rem] bg-theme-red text-white p-[0.8rem] rounded-full">
                    <FaBriefcase />
                  </div>

                  {/* Job Company */}
                  <h5 className="w-full pr-[3rem] text-[1.8rem] leading-[2rem] text-neutral-800 font-medium">Energy Department Punjab</h5>

                  <div className="time absolute right-0 flex items-center gap-[0.2rem] text-[1.2rem] leading-[1.2rem]">
                    <IoTimeOutline />
                    <span>3 min</span>
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="cardBottom w-full flex flex-col gap-[1rem] px-[1rem] py-[1rem]">
                  <p className="text-[2rem] leading-[2.4rem] font-medium">Archaeology Department Latest Jobs</p>

                  <div className="text-[1.4rem] leading-[1.4rem] flex items-center gap-[0.2rem] text-neutral-500">
                    <FaEarthAmericas />
                    <span>Pakistan</span>
                  </div>

                  <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex justify-center gap-[1rem] text-white px-[2rem] py-[1.2rem] rounded-md  font-medium mt-[1rem] shadow-lg">
                    <PiArrowBendUpRightBold className="text-[1.7rem] leading-[1.6rem]" />
                    <span className="tracking-[0.05rem]">Apply Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
