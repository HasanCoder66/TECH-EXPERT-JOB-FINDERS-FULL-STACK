import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";

// Import React Icons
import { GiIciclesFence } from "react-icons/gi";
import { TfiSave } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { ImBackward2, ImForward3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";
import { htmlToText } from "html-to-text";
import Swal from "sweetalert2";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineDrag } from "react-icons/ai";

const ExperienceForm = () => {
  const [isCheckCurrentWork, setIsCheckCurrentWork] = useState(false);
  const [isSaveContent, setIsSaveContent] = useState(false);
  const [selectExperienceText, setSelectExperienceText] = useState([]);

  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [expCity, setExpCity] = useState("");
  const [expState, setExpState] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume.resumeAllData);
  console.log(resumeData);

  const experienceDataList = useSelector((state) => state.resume.resumeAllData);
  const experienceDataListMap = useSelector((state) => state.resume.resumeAllData.experienceData);

  // Corrected initialization of educationArray
  let experienceArray = experienceDataList.hasOwnProperty("experienceData")
    ? [...experienceDataList.experienceData]
    : [];

  const experienceObj = {
    jobTitle,
    employer,
    expCity,
    expState,
    startDate,
    endDate,
    responsibilities,
  };


  const handleEditorChange = (content, editor) => {
    const plainText = convertHtmlToText(content);
    setResponsibilities(plainText);
  };

  // console.log(jobTitle)
  // console.log(employer)
  // console.log(expCity)
  // console.log(expState)
  // console.log(startDate)
  // console.log(endDate)
  // console.log(responsibilities);

  const saveExperienceDataHandler = (e) => {
    e.preventDefault();
    console.log("save Experience handler is working");
    experienceArray.push(experienceObj);
    const payload = {
      ...resumeData,
      experienceData: experienceArray,
    };
    dispatch(resumeSuccess(payload));
  };

  const convertHtmlToText = (html) => {
    return htmlToText(html, {
      wordwrap: 130,
      selectors: [
        { selector: "a", format: "inline" },
        { selector: "img", format: "inline" },
      ],
    });
  };

  const editorRef = useRef(null);

  // Function to generate unordered list HTML from the array
  const generateListHTML = (items) => {
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  };

  // Use effect to set the initial content of the editor
  useEffect(() => {
    if (editorRef.current) {
      const listHTML = generateListHTML(selectExperienceText);
      editorRef.current.setContent(listHTML);
    }
  }, [selectExperienceText]);

  const saveContent = (e) => {
    e.preventDefault();

    if (
      jobTitle &&
      employer &&
      expCity &&
      expState &&
      startDate &&
      endDate &&
      responsibilities
    ) {
      saveExperienceDataHandler(e);

      setJobTitle("");
      setEmployer("");
      setExpCity("");
      setExpState("");
      setStartDate("");
      setEndDate("");
      setResponsibilities("");

      setIsCheckCurrentWork(false);
      setIsSaveContent(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please! Enter the All Fields",
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setIsCheckCurrentWork(event.target.checked);
    if (event.target.checked) {
      setEndDate("I currently work here");
    } else {
      setEndDate("");
    }
  };

  const handleInputChange = (event) => {
    if (!isCheckCurrentWork) {
      setEndDate(event.target.value);
    }
  };

  return (
    <div className="w-full">
      {/* Experience Info Cont */}
      <div className="educationInfoCont w-full px-[2rem] pb-[4rem]">
        <div className="educationInfoContWrap w-full border-[0.2rem] border-neutral-200">
          {/* Header Row */}
            <div className="infoRowheader grid grid-cols-12">
            <div className="headerLeft py-[1.4rem] px-[1rem] col-span-8 border-r-[0.2rem]">
              <h2 className="text-[1.6rem] leading-[1.6rem] font-semibold text-neutral-800">
                Work History
              </h2>
            </div>
            <div className="headerRight py-[1.4rem] px-[1rem] col-span-4">
              <h2 className="text-[1.6rem] leading-[1.6rem] font-semibold text-neutral-800">
                Action
              </h2>
            </div>
          </div>
          {experienceDataListMap?.map((itemsExp)=> (
            <>
          <div className="infoRowExperience grid grid-cols-12">
            <div className="expRowLeft py-[1.2rem] px-[1rem] col-span-8 border-r-[0.2rem] border-t-[0.2rem] flex flex-col gap-[0.2rem]">
              {/* Job Title */}
              <h4 className="text-[1.4rem] font-normal text-neutral-800">
              {itemsExp.jobTitle}
              </h4>

              {/* From and To */}
              <p className="text-[1.4rem] font-normal text-neutral-800">
                <span className="font-semibold">From : {itemsExp.startDate} </span>
                <span className="font-semibold">To : {itemsExp.endDate} </span>
              </p>
            </div>
            <div className="expRowRight py-[1.2rem] px-[1.5rem] col-span-4 border-t-[0.2rem] flex items-start gap-[2rem] text-white">
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
              {/* <abbr
                title="Drag"
                className="bg-theme-yellow p-[0.7rem] rounded-md text-[1.7rem] cursor-pointer"
              >
                <AiOutlineDrag />
              </abbr> */}
            </div>
          </div>
          </>
          ))}
          

          {/* Experience Row */}
        </div>
      </div>

      {/* Experience Form FIelds */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        {!isSaveContent && (
          <div className="rowFirst grid grid-cols-2 gap-[2rem]">
            {/* Job Title */}
            <div className="jobTitleInput flex flex-col gap-[1rem]">
              <label
                htmlFor="jobTitle"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Job Title
              </label>
              <input
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                name="jobTitle"
                id="jobTitle"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* Employer */}
            <div className="employerInput flex flex-col gap-[1rem]">
              <label
                htmlFor="employer"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Employer
              </label>
              <input
                onChange={(e) => setEmployer(e.target.value)}
                type="text"
                name="employer"
                id="employer"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>
          </div>
        )}

        {/* Row Second */}
        {!isSaveContent && (
          <div className="rowSecond grid grid-cols-2 gap-[2rem]">
            {/* City */}
            <div className="cityInput flex flex-col gap-[0.8rem]">
              <label
                htmlFor="city"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                City
              </label>
              <input
                onChange={(e) => setExpCity(e.target.value)}
                type="text"
                name="city"
                id="city"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* State */}
            <div className="stateInput flex flex-col gap-[0.8rem]">
              <label
                htmlFor="state"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                State
              </label>
              <input
                onChange={(e) => setExpState(e.target.value)}
                type="text"
                name="state"
                id="state"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>
          </div>
        )}

        {/* Row Third */}
        {!isSaveContent && (
          <div className="rowThird grid grid-cols-2 gap-[2rem] mb-[6rem]">
            {/* Start Date */}
            <div className="startDateInput flex flex-col gap-[0.8rem]">
              <label
                htmlFor="startDate"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Start Date:
              </label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
                name="startDate"
                id="startDate"
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* End Date */}
            <div className="endDateInput relative flex flex-col gap-[0.8rem]">
              <label
                htmlFor="endDate"
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                End Date:
              </label>
              <input
                onChange={handleInputChange}
                type={isCheckCurrentWork ? "text" : "date"}
                name="endDate"
                id="endDate"
                value={endDate}
                disabled={isCheckCurrentWork}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />

              <div className="currentWorkingCheckbox absolute bottom-[-3.2rem] left-0 flex items-center gap-[1rem] px-[0.5rem]">
                <input
                  type="checkbox"
                  checked={isCheckCurrentWork}
                  onChange={handleCheckboxChange}
                  id="currentWorking"
                  className="w-7 h-7 border-2 border-gray-300 rounded-full accent-theme-red ring-2 ring-offset-2 ring-theme-red"
                />
                <label
                  htmlFor="currentWorking"
                  className="text-[1.5rem] leading-[1.4rem]"
                >
                  I currently work here
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Experience About Textarea */}
        {!isSaveContent && (
          <div className="w-full flex justify-between">
            {/* Textarea Side */}
            <div className="w-[50%] flex flex-col gap-[1.2rem]">
              <div className="w-full">
                <button className="text-[1.7rem] leading-[1.7rem] px-[1.2rem] py-[1rem] flex items-center gap-[0.6rem] bg-theme-red text-white shadow-md rounded-md whitespace-nowrap">
                  <GiIciclesFence />
                  <span>AI Assistance</span>
                </button>

                <span className="text-[1.5rem] leading-[2.5rem]">
                  <b>PRO TIP:</b> Ask AI any question about your job duties
                </span>
              </div>

              <h6 className="text-[1.5rem] text-theme-red">
                Job Duties / Responsibilities
              </h6>

              <Editor
                onEditorChange={handleEditorChange}
                apiKey="ar9rz3ek138ri8zqmmjy1ver1c4xksfbzi3illv7sk37tojq"
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                  plugins:
                    "anchor autolink charmap codesample image link advlist lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown preview",
                  toolbar:
                    " bold italic underline remove razer alignleft aligncenter alignright alignjustify outdent indent unorderlist  numlist bullist unordered",
                  menubar: false,
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                  content_style:
                    ".tox-tinymce { border: 1px solid #ddd; padding: 10px; border-radius: 0px; }",
                  placeholder: "Insert Experience",
                }}
              />
            </div>

            {/* Select Experience Side */}
            <div className="w-[47%] max-h-[50rem] shadow-xl rounded-md overflow-hidden">
              {/* Experience List Header */}
              <div className="w-full flex flex-col gap-[1.2rem] bg-theme-yellow p-[1.5rem]">
                <span className="text-[2rem] leading-[2rem] text-white font-medium">
                  Showing examples for:
                </span>
                <input
                  type="search"
                  name="searchExp"
                  id="searchExp"
                  placeholder="Ex: Cashier.."
                  className="py-[0.7rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 outline-none rounded-md"
                />
              </div>

              {/* Experience List */}
              <div className="w-full">
                <ul className="w-full flex flex-col h-[40rem] overflow-auto scrollbar-light">
                  {[
                    "Manage and archive quality documentation and participate in internal and external quality audits",
                    "Resolved conflicts and negotiated agreements between parties in order to reach win-win solutions to disagreements and clarify misunderstandings",
                    "Presented metric reporting and [Timeframe] account reviews to [Type] team and clients",
                    "Developed, updated and maintained database of existing and potential customers in [Software]",
                    "Tracked customer shipment requirements to improve customer satisfaction while increasing service efficiencies",
                    "Tracked customer shipment requirements to improve customer satisfaction while increasing service efficiencies",
                    "Developed and executed plans to monitor standard process adherence",
                    "Initiated outbound administrative requests by phone and in writing to accomplish [Result]",
                    "Identified and resolved process issues to encourage smoother procedures, more efficient workflow and overall business growth",
                    "Evaluated quality problems and performed [Action] to identify and resolve issues",
                  ].map((listText, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setSelectExperienceText(
                          !selectExperienceText.includes(listText)
                            ? [...selectExperienceText, listText]
                            : selectExperienceText.filter(
                                (texts) => texts !== listText
                              )
                        )
                      }
                      className="w-full flex items-start gap-[1.5rem] border-t-[0.1rem] border-neutral-400 px-[1.5rem] pt-[1.5rem] pb-[3rem] cursor-pointer"
                    >
                      <span className="listIcon text-[2.4rem] p-[0.5rem] bg-neutral-800 text-white rounded-full">
                        {!selectExperienceText.includes(listText) ? (
                          <FaPlus />
                        ) : (
                          <FaCheck />
                        )}
                      </span>
                      <span className="listText text-[1.5rem] text-neutral-700">
                        {listText}
                      </span>
                    </li>
                  ))}
                </ul>
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
              // onClick={saveExperienceDataHandler}
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
              className="bg-green-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
            >
              <TfiSave />
              <span>Add Experience</span>
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

export default ExperienceForm;
