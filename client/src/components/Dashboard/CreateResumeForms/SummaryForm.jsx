import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import { htmlToText } from "html-to-text";
// Import React Icons
import { GiIciclesFence } from "react-icons/gi";
import { TfiSave } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { ImBackward2, ImForward3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";

const SummaryForm = () => {
  const [selectSummaryText, setSelectSummaryText] = useState([]);
  const [summary, setSummary] = useState("");

  const dispatch = useDispatch();
  const resumeData = useSelector(
    (state) => state.resume.resumeAllData
  );
  console.log(resumeData);

  const handleEditorChange = (content, editor) => {
    const plainText = convertHtmlToText(content);
    setSummary(plainText);
  };
  // console.log(summary);

  const saveExperienceDataHandler = (e) => {
    e.preventDefault();
    console.log("save Experience handler is working");
    const payload = {
        ...resumeData,
        summary,
      
    };
    dispatch(resumeSuccess(payload));
  };
  const editorRef = useRef(null);

  // Function to generate unordered list HTML from the array
  const generateListHTML = (items) => {
    return `${items.map((item) => `<p>${item}</p>`).join(" ")}`;
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
  // Use effect to set the initial content of the editor
  useEffect(() => {
    if (editorRef.current) {
      const listHTML = generateListHTML(selectSummaryText);
      editorRef.current.setContent(listHTML);
    }
  }, [selectSummaryText]);

  return (
    <div className="w-full">
      {/* Summary Form */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Summary About Textarea */}
        <div className="w-full flex justify-between">
          {/* Textarea Side */}
          <div className="w-[53%] flex flex-col gap-[1.2rem]">
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
              }}
              initialValue="Insert Summary"
              onEditorChange={handleEditorChange}
            />
          </div>

          {/* Select Summary Side */}
          <div className="w-[42%] max-h-[50rem] shadow-xl rounded-md overflow-hidden">
            {/* Summary List Header */}
            <div className="w-full flex flex-col gap-[1.2rem] bg-theme-yellow p-[1.5rem]">
              <span className="text-[2rem] leading-[2rem] text-white font-medium">
                Showing examples for:
              </span>
              <input
                type="search"
                name="searchExp"
                id="searchExp"
                placeholder="Ex: Accountant.."
                className="py-[0.7rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 outline-none rounded-md"
              />
            </div>

            {/* Summary List */}
            <div className="w-full">
              <ul className="w-full flex flex-col h-[40rem] overflow-auto scrollbar-light">
                {[
                  "Experienced Job Title with over Number years of experience in Industry. Excellent reputation for resolving problems, improving customer satisfaction, and driving overall operational improvements. Consistently saved costs while increasing profits.",
                  "[Job Title] with over [Number] years of successful experience in [Skill] and [Skill]. Recognised consistently for performance excellence and contributions to success in [Industry] industry. Strengths in [Skill] and [Skill] backed by training in [Area of study].",
                  "Multi-talented [Job Title] consistently rewarded for success in planning and operational improvements. Experience in policy development and staff management procedures positively impacting overall morale and productivity.",
                  "Enthusiastic [Job Title] eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of [Task] and [Task] and training in [Skill]. Motivated to learn, grow and excel in [Industry].",
                  "Senior [Job Title] and outstanding performer in [Skill] and [Skill] within [Industry]. Proven success in leadership, operational excellence and organizational development with keen understanding of elements of [Type] business. Recognized for inspiring management team members to excel and encouraging creative work environments.",
                  "Energetic [Type] Manager offering a proven history of success in overseeing [Type] operations with an efficient, performance-driven approach. Manage business effectively through proactive operational and team oversight. Sustain revenue growth with continuous attention to customer and market demands.",
                  "Gifted [Job Title] with excellent team building and leadership abilities honed over a career in [Type] industry. Deliver high-quality service and consistent business results with a resourceful approach to handling routine and complex challenges.",
                  "Resourceful [Type] Manager is able to handle fast-paced [Industry] demands while keeping operations in line with regulatory requirements.",
                  "Focused on exceeding profitability targets through skilled management of available personnel and inventory resources. Expert in identifying and capitalizing on business opportunities.",
                  "Accomplished in translating high-level directives into actionable front-line policies and achieving consistent results. Strong track record of keeping costs low.",
                ].map((listText, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      setSelectSummaryText(
                        !selectSummaryText.includes(listText)
                          ? [...selectSummaryText, listText]
                          : selectSummaryText.filter(
                              (texts) => texts !== listText
                            )
                      )
                    }
                    className="w-full flex items-start gap-[1.5rem] border-t-[0.1rem] border-neutral-400 px-[1.5rem] pt-[1.5rem] pb-[3rem] cursor-pointer"
                  >
                    <span className="listIcon text-[2.4rem] p-[0.5rem] bg-neutral-800 text-white rounded-full">
                      {!selectSummaryText.includes(listText) ? (
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

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-between py-[1rem]">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <ImBackward2 size={20} />
            <span>Previous</span>
          </button>

          <button
            
            onClick={(e) => e.preventDefault()}
            className="bg-green-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <TfiSave />
            <span
            onClick={saveExperienceDataHandler}
            >Save</span>
          </button>

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

export default SummaryForm;
