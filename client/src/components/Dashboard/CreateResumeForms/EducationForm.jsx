import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

// React Icons
import { ImBackward2, ImForward3 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineDrag } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";
import { useDispatch, useSelector } from "react-redux";

const EducationForm = () => {
  // const [isCheckCurrentStudy, setIsCheckCurrentStudy] = useState(false);
  // const [isSaveContent, setIsSaveContent] = useState(false);
  // const [schoolName, setSchoolName] = useState("");
  // const [schoolCity, setSchoolCity] = useState("");
  // const [lastQualification, setLastQualification] = useState("");
  // const [schoolState, setSchoolState] = useState("");
  // const [educationStartDate, setEducationStartDate] = useState("");
  // const [endEducationDate, setEndEducationDate] = useState("");
  // const [fieldOfStudy, setFieldOfStudy] = useState("");

  // // const [educationList, setEducationList] = useState([]);
  
  // const dispatch = useDispatch();
  // const resumeData = useSelector((state) => state.resume.resumeAllData);
  // console.log(resumeData);
  // const educationDataList = useSelector((state) => state.resume.resumeAllData);
  // console.log(educationDataList);
  // let educationArray = educationDataList.hasOwnProperty("educationData") ? [...educationArray.educationData] : [0];

  // // const educationDataList = useSelector(
  // //   (state) => state.resume.resumeAllData.educationObj
  // // );
  // // console.log(educationDataList);
  // // // console.log(educationData);
  // // console.log(schoolName);
  // // console.log(schoolCity);
  // // console.log(lastQualification);
  // // console.log(schoolState);
  // // console.log(fieldOfStudy);
  // // console.log(educationStartDate);
  // // console.log(endEducationDate);

  // // const dualFunctionHandler =(e) => {
  // //   // onClick={(e) => saveContent(e)}
  // //   saveEducationDataHandler()
  // // }

  // // const handleLanguageChange = (index, key, value) => {
  // //   const updatedLanguagesList = languagesList.map((languageItem, i) =>
  // //     i === index ? { ...languageItem, [key]: value } : languageItem
  // //   );
  // //   setLanguagesList(updatedLanguagesList);
  // // };
  // const educationObj = {
  //   schoolName,
  //   schoolCity,
  //   lastQualification,
  //   schoolState,
  //   educationStartDate,
  //   endEducationDate,
  //   fieldOfStudy,
  // };

  
  // const saveEducationDataHandler = (e) => {
  //   e.preventDefault();
  //   console.log("save Education handler is working");
  //   educationArray.push( educationObj);
  //   console.log(educationArray, "====>>>> education array");
  //   const payload = {
  //     ...resumeData,
  //     educationData: educationArray,
  //     //  educationObj,

  //     // educationDataList: [...educationData],
  //     // resumeData: {
  //     //   ...resumeData,
  //     //   educationList: [
  //     //     ...educationData,
  //     //     educationObj

  //     //     // schooification,
  //     //     // educationStartDate,
  //     //     // endEducationDate,
  //     //     // // endDate,
  //     //     // fieldOfStudy,lName,
  //     //     // schoolCity,
  //     //     // lastQual
  //     //   ],
  //     // },
  //   };
  //   dispatch(resumeSuccess(payload));
  // };

  // const saveContent = (e) => {
  //   e.preventDefault();

  //   if (
  //     schoolName &&
  //     schoolCity &&
  //     lastQualification &&
  //     schoolState &&
  //     educationStartDate &&
  //     endEducationDate &&
  //     fieldOfStudy
  //   ) {
  //     saveEducationDataHandler(e);

  //     setSchoolName("");
  //     setSchoolCity("");
  //     setLastQualification("");
  //     setSchoolState("");
  //     setEducationStartDate("");
  //     setEndEducationDate("");
  //     setFieldOfStudy("");

  //     setIsCheckCurrentStudy(false);
  //     setIsSaveContent(true);
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Please! Enter the All Fields",
  //     });
  //   }
  // };

  // const handleCheckboxChange = (event) => {
  //   setIsCheckCurrentStudy(event.target.checked);
  //   if (event.target.checked) {
  //     setEndEducationDate("I currently study here");
  //   } else {
  //     setEndEducationDate("");
  //   }
  // };

  // const handleInputChange = (event) => {
  //   if (!isCheckCurrentStudy) {
  //     setEndEducationDate(event.target.value);
  //   }
  // };

  // // console.log(schoolName);
  // // console.log(schoolCity);
  // // console.log(lastQualification);
  // // console.log(schoolState);
  // // console.log(startDate);
  // // console.log(endDate);
  // // console.log(fieldOfStudy);

  const [isCheckCurrentStudy, setIsCheckCurrentStudy] = useState(false);
  const [isSaveContent, setIsSaveContent] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [lastQualification, setLastQualification] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [endEducationDate, setEndEducationDate] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume.resumeAllData);
  const educationDataList = useSelector((state) => state.resume.resumeAllData);
  const educationDataMap = useSelector((state) => state.resume.resumeAllData.educationData);

  // Corrected initialization of educationArray
  let educationArray = educationDataList.hasOwnProperty("educationData")
    ? [...educationDataList.educationData]
    : [];

  const educationObj = {
    schoolName,
    schoolCity,
    lastQualification,
    schoolState,
    educationStartDate,
    endEducationDate,
    fieldOfStudy,
  };

  const saveEducationDataHandler = (e) => {
    e.preventDefault();
    educationArray.push(educationObj);
    const payload = {
      ...resumeData,
      educationData: educationArray,
    };
    dispatch(resumeSuccess(payload));
  };

  const saveContent = (e) => {
    e.preventDefault();

    if (
      schoolName &&
      schoolCity &&
      lastQualification &&
      schoolState &&
      educationStartDate &&
      endEducationDate &&
      fieldOfStudy
    ) {
      saveEducationDataHandler(e);

      setSchoolName("");
      setSchoolCity("");
      setLastQualification("");
      setSchoolState("");
      setEducationStartDate("");
      setEndEducationDate("");
      setFieldOfStudy("");

      setIsCheckCurrentStudy(false);
      setIsSaveContent(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please! Enter All Fields",
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setIsCheckCurrentStudy(event.target.checked);
    if (event.target.checked) {
      setEndEducationDate("I currently study here");
    } else {
      setEndEducationDate("");
    }
  };

  const handleInputChange = (event) => {
    if (!isCheckCurrentStudy) {
      setEndEducationDate(event.target.value);
    }
  };

  return (
    <div className="w-full">
      {/* Education Info Cont */}
      <div className="educationInfoCont w-full px-[2rem] pb-[4rem]">
        <div className="educationInfoContWrap w-full border-[0.2rem] border-neutral-200">
          {/* Header Row */}
          <div className="infoRowheader grid grid-cols-12">
            <div className="headerLeft py-[1.4rem] px-[1rem] col-span-8 border-r-[0.2rem]">
              <h2 className="text-[1.6rem] leading-[1.6rem] font-semibold text-neutral-800">
                Education
              </h2>
            </div>
            <div className="headerRight py-[1.4rem] px-[1rem] col-span-4">
              <h2 className="text-[1.6rem] leading-[1.6rem] font-semibold text-neutral-800">
                Action
              </h2>
            </div>
          </div>

          {/* Education Row */}
          {educationDataMap?.map((edu,index) =>(
            <div className="infoRowEducation grid grid-cols-12">
            <div className="eduRowLeft py-[1.2rem] px-[1rem] col-span-8 border-r-[0.2rem] border-t-[0.2rem] flex flex-col gap-[0.2rem]">
              degree and fieldOfStudy 
              <h4 className="text-[1.4rem] font-normal text-neutral-800">
               {`${edu.fieldOfStudy} -  ${edu.schoolName}`}
              </h4>

              {/* From and To */}
              <p className="text-[1.4rem] font-normal text-neutral-800">
                <span className="font-semibold">From : </span>{edu.educationStartDate}{" "}
                <span className="font-semibold">To : </span>{edu.endEducationDate}
              </p>
            </div>
            <div className="eduRowRight py-[1.2rem] px-[1.5rem] col-span-4 border-t-[0.2rem] flex items-start gap-[2rem] text-white">
              <abbr
                title="Edit"
                className="bg-blue-500 p-[0.7rem] rounded-md text-[1.7rem] cursor-pointer"
              >
                <MdEdit />
              </abbr>
              <abbr
                title="Delete"
                className="bg-red-600 p-[0.7rem] rounded-md text-[1.7rem] cursor-pointer"
              >
                <RiDeleteBin5Line />
              </abbr>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* Education Form FIelds */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        {!isSaveContent && (
          <div className="rowFirst grid grid-cols-2 gap-[2rem]">
            {/* School Name */}
            <div className="schoolNameInput flex flex-col gap-[1rem]">
              <label
                htmlFor="schoolName"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                School Name
              </label>
              <input
                onChange={(e) => setSchoolName(e.target.value)}
                type="text"
                name="schoolName"
                id="schoolName"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* City */}
            <div className="cityInput flex flex-col gap-[0.8rem]">
              <label
                htmlFor="city"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                City
              </label>
              <input
                onChange={(e) => setSchoolCity(e.target.value)}
                type="text"
                name="city"
                id="city"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>
          </div>
        )}

        {/* Row Second */}
        {!isSaveContent && (
          <div className="rowSecond grid grid-cols-2 gap-[2rem]">
            {/* State */}
            <div className="stateInput flex flex-col gap-[0.8rem]">
              <label
                htmlFor="state"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                State
              </label>
              <input
                onChange={(e) => setSchoolState(e.target.value)}
                type="text"
                name="state"
                id="state"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* Last Qualification */}
            <div className="qualificationInput flex flex-col gap-[0.8rem]">
              <label
                htmlFor="qualification"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Last Qualification / Degree
              </label>
              <input
                onChange={(e) => setLastQualification(e.target.value)}
                type="text"
                name="qualification"
                id="qualification"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>
          </div>
        )}

        {/* Row Third */}
        {!isSaveContent && (
          <div className="rowThird grid grid-cols-12 gap-[2rem] mb-[6rem]">
            {/* Field Of Study */}
            <div className="fieldOfStudyInput col-span-6 flex flex-col gap-[0.8rem]">
              <label
                htmlFor="fieldOfStudy"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Field Of Study
              </label>
              <input
                onChange={(e) => setFieldOfStudy(e.target.value)}
                type="text"
                name="fieldOfStudy"
                id="fieldOfStudy"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* Start Date */}
            <div className="startDateInput col-span-3 flex flex-col gap-[0.8rem]">
              <label
                htmlFor="startDate"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Start Date:
              </label>

              <input
                onChange={(e) => setEducationStartDate(e.target.value)}
                type="date"
                name="startDate"
                id="startDate"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* End Date */}
            <div className="endDateInput col-span-3 relative flex flex-col gap-[0.8rem]">
              <label
                htmlFor="endDate"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                End Date:
              </label>
              <input
                onChange={handleInputChange}
                type={isCheckCurrentStudy ? "text" : "date"}
                name="endDate"
                id="endDate"
                value={endEducationDate}
                disabled={isCheckCurrentStudy}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />

              <div className="currentStudyCheckbox absolute bottom-[-3.2rem] left-0 flex items-center gap-[1rem] px-[0.5rem]">
                <input
                  type="checkbox"
                  checked={isCheckCurrentStudy}
                  onChange={handleCheckboxChange}
                  id="currentStudy"
                  className="w-7 h-7 border-2 border-gray-300 rounded-full accent-theme-red ring-2 ring-offset-2 ring-theme-red"
                />
                <label
                  htmlFor="currentStudy"
                  className="text-[1.5rem] leading-[1.4rem]"
                >
                  I currently study here
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-between py-[1rem]">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <ImBackward2 size={20} />
            <span>Previous</span>
          </button>

          {!isSaveContent && (
            <button
              // onClick={saveEducationDataHandler}
              onClick={(e) => saveContent(e)}
              className="bg-green-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
            >
              <TfiSave />
              <span>Save</span>
            </button>
          )}

          {isSaveContent && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSaveContent(false);
              }}
              className="bg-blue-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
            >
              <TfiSave />
              <span>Add Education</span>
            </button>
          )}

          <button
            onClick={(e) => e.preventDefault()}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <span>Next</span>
            <ImForward3 size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
