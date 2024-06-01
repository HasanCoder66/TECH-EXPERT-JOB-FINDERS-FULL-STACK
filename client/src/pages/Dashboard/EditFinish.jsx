import React, { cloneElement, useRef, useState } from "react";
import {
  FaCloudDownloadAlt,
  FaLinkedinIn,
  FaPrint,
  FaReddit,
  FaRegEdit,
  FaShare,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import FinishTemplateTabBar from "../../components/Dashboard/FinishTemplateTabBar";
import { FiX } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { FaFloppyDisk } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { TiSocialFacebook } from "react-icons/ti";
import CLTemplate01 from "../../coverLetterTemplates/CLTemplate01";
import CLTemplate02 from "../../coverLetterTemplates/CLTemplate02";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from 'react-to-print';

const coverLetterTemplates = [
  {
    id: "6655085ce595b205733d8e95",
    template: <CLTemplate01 />
  },
  {
    id: "665615890b66a45697909b58",
    template: <CLTemplate02 />
  },
]

const EditFinish = () => {
  const [activeButton, setActiveButton] = useState("coverLetter");
  const [changeComponent, SetChangeComponent] = useState("coverLetter");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [activeTab, setActiveTab] = useState("free");
  const [themeColor, setThemeColor] = useState("#ffffff");
  const { templateId, currentData } = useSelector((state) => state.coverLetter.currentData)
  const templateRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => templateRef.current,
  });

  const downloadPdf = () => {
    setIsLoading(true);
    // const doc = new jsPDF({
    //   orientation: 'landscape',
    //   unit: 'in',
    //   format: [4, 2],
    // });
    // console.log(templateRef.current, "====>>>> templateRef.current")

    const capture = document.querySelector('.template')
    const scale = 2.5;
    html2canvas(capture, { scale }).then((canvas) => {
      const imgData = canvas.toDataURL('img/jpeg', 1.0);
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [canvas.width / scale, canvas.height / scale],
      });
      const imgProps = doc.getImageProperties(imgData);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      // const componentHeight = (imgProps.height * componentWidth) / imgProps.width;
      console.log(componentHeight, "===>>> height")
      doc.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight);
      setIsLoading(false)
      doc.save('CoverLetter.pdf')
    })
  }


  const handleClick = (button) => {
    setActiveButton(button);
    button == "coverLetter"
      ? SetChangeComponent(true)
      : SetChangeComponent(false);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Font Size Changes handler function

  const handleChang1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  return (
    // Main Div
    <div className="p-10 flex gap-10 w-full">
      {/* Left Div */}
      {/* Left Main Div */}
      <div
        className="templateDiv w-fit h-[100%] shadow-lg flex min-h-[50rem] p-10 bg-white text-sm"
        
        style={{ fontSize: selectedOption1, fontFamily: selectedOption }}
      >
        {
          coverLetterTemplates.map((template) => {
            // console.log(template.template)
            if (templateId === template.id) {
              return (
                <div ref={templateRef}>
                  {cloneElement(template.template, {bgColor: "red"})}
                </div>
              )
            }
          })
        }
      </div>
      {/* Right Div */}
      <div className="w-4/12  ">
        {/* Edit Resume Button */}
        <button className="flex px-5 py-2 gap-1 items-center text-lg bg-theme-red rounded-md text-white">
          <FaRegEdit className="" /> Edit This Resume
        </button>
        {/* Two Component Show Buttons Div */}

        <div className=" h-full w-full mt-4 p-10 bg-white shadow-lg">
          <div className="w-full pb-5">
            <span
              className={` p-4 cursor-pointer rounded-full font-semibold`}
              onClick={() => handleClick("coverLetter")}
              style={{
                backgroundColor:
                  activeButton === "coverLetter" ? "#ec4843" : "transparent",
                color: activeButton === "coverLetter" ? "white" : "black",
              }}
            >
              Options
            </span>
            <span
              className={` p-4 cursor-pointer rounded-full font-semibold`}
              onClick={() => handleClick("photoLinks")}
              style={{
                backgroundColor:
                  activeButton === "photoLinks" ? "#ec4843" : "transparent",
                color: activeButton === "photoLinks" ? "white" : "black",
              }}
            >
              Choose Template
            </span>
          </div>
          {/* first component show */}

          {changeComponent ? (
            <div className="mt-10">
              {/* Export Options */}
              <div>
                <h1 className="text-2xl font-bold mb-3">Export Options</h1>
                <button className="bg-[#18da35] w-full  text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center  justify-center gap-[0.6rem] rounded-lg" onClick={handlePrint} disabled={!(isLoading === false)}>
                  <FaCloudDownloadAlt className="text-3xl" />
                  {
                    isLoading ? (
                      <span>Downloading PDF</span>
                    ) : (
                      <span>Download PDF</span>
                    )
                  }
                </button>
                <button className="bg-[#01b8ff] w-full mt-3  text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center  justify-center gap-[0.6rem] rounded-lg">
                  <FaPrint className="text-3xl" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#01b8ff] w-full mt-3  text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center  justify-center gap-[0.6rem] rounded-lg"
                >
                  <MdOutlineMailOutline className="text-3xl" />
                  <span>Email</span>
                </button>
                <button
                  onClick={() => setShareModal(true)}
                  className="bg-theme-red w-full mt-3  text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center  justify-center gap-[0.6rem] rounded-lg"
                >
                  <FaShare className="text-3xl" />
                  <span>Share</span>
                </button>
              </div>
              {/* Formating Section */}
              <div>
                <h1 className="text-2xl font-bold my-8">Formatting Options</h1>
                <div className="flex gap-5">
                  {/* first Selector */}

                  <div className="dropdown">
                    <label
                      htmlFor="options"
                      className="block mb-2 text-xl  font-medium text-theme-red"
                    >
                      Font Style
                    </label>
                    <select
                      id="options"
                      value={selectedOption}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 text-base text-gray-700 bg-white border border-theme-red rounded-md focus:outline-none"
                    >
                      <option value="">--Please choose an option--</option>
                      <option value="Nunito">Nunito</option>
                      <option value="Poppins">Poppins</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Rubik">Rubik</option>
                      <option value="Old Standard TT">Old Standard TT</option>
                      <option value="Oswald">Oswald</option>
                      <option value="Oxygen Mono">Oxygen Mono</option>
                    </select>
                    {selectedOption && (
                      <div className="mt-2 text-sm text-gray-600">
                        You selected: {selectedOption}
                      </div>
                    )}
                  </div>
                  {/* Second Selector */}
                  <div className="dropdown">
                    <label
                      htmlFor="options"
                      className="block mb-2 text-xl  font-medium text-theme-red"
                    >
                      Font Style
                    </label>
                    <select
                      id="options"
                      value={selectedOption1}
                      onChange={handleChang1}
                      className="block w-full px-4 py-2 mt-2 text-base text-gray-700 bg-white border border-theme-red rounded-md focus:outline-none"
                    >
                      <option value="">--Please choose an option--</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                    {selectedOption1 && (
                      <div className="mt-2 text-sm text-gray-600">
                        You selected: {selectedOption1}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Choose Color Section */}
              <div>
                <h1 className="text-2xl font-bold my-8">Formatting Options</h1>
                <div className="flex  flex-wrap gap-3">
                  {/* Label White */}
                  <label
                    htmlFor="white"
                    className="w-16 h-16 rounded-full bg-white cursor-pointer border border-black"
                  >
                    <input
                      type="text"
                      id="white"
                      value="#ffffff"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label Black */}
                  <label
                    htmlFor="black"
                    className="w-16 h-16 rounded-full bg-black cursor-pointer "
                  >
                    <input
                      type="text"
                      id="black"
                      value="#000000"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label Grey */}
                  <label
                    htmlFor="grey"
                    className="w-16 h-16 rounded-full bg-[#373d48] cursor-pointer"
                  >
                    <input
                      type="text"
                      id="grey"
                      value="#373d48"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label Navy Blue */}
                  <label
                    htmlFor="navyBlue"
                    className="w-16 h-16 rounded-full bg-[#002b5b] cursor-pointer "
                  >
                    <input
                      type="text"
                      id="navyBlue"
                      value="#002b5b"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label DarkRed */}
                  <label
                    htmlFor="darkRed"
                    className="w-16 h-16 rounded-full bg-[#d50000] cursor-pointer "
                  >
                    <input
                      type="text"
                      id="darkRed"
                      value="#d50000"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label Orange */}
                  <label
                    htmlFor="orange"
                    className="w-16 h-16 rounded-full bg-[#ff851b] cursor-pointer "
                  >
                    <input
                      type="text"
                      id="orange"
                      value="#ff851b"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label Pink */}
                  <label
                    htmlFor="pink"
                    className="w-16 h-16 rounded-full bg-[#ff007f] cursor-pointer"
                  >
                    <input
                      type="text"
                      id="pink"
                      value="#ff007f"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                  {/* Label Sky Blue */}
                  <label
                    htmlFor="skyBlue"
                    className="w-16 h-16 rounded-full bg-[#409bf9] cursor-pointer"
                  >
                    <input
                      type="text"
                      id="skyBlue"
                      value="#409bf9"
                      onClick={(e) => setThemeColor(e.target.value)}
                      className="hidden"
                    />
                  </label>
                </div>
                <button className="bg-theme-red w-full mt-10 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center  justify-center gap-[0.6rem] rounded-lg">
                  <span>Change Template</span>
                </button>
              </div>
            </div>
          ) : (
            //  Choose Template Section
            <FinishTemplateTabBar />
          )}
          {/* Second component show */}
          <div></div>
        </div>
      </div>
      {/* Email modal Open */}
      {isModalOpen && (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[450px] relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsModalOpen(false)}
            >
              <FiX className="text-theme-red" size={24} />
            </button>

            <h2 className=" text-2xl font-semibold mb-4 text-theme-red">
              Send This Resume as Email
            </h2>
            <hr />
            <form action="#" className="w-full flex flex-col gap-[2rem] mt-5">
              {/* Row First */}

              {/* Email */}
              <div className="jobTitleInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="email"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Row Second */}

              {/* Subject  */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="subject"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Message */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="message"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Message:
                </label>
                <textarea
                  className="w-full p-4 text-2xl border border-gray-300 rounded-lg mb-4"
                  rows="4"
                  name="message"
                  id="message"
                ></textarea>
              </div>

              {/* Forth Row */}

              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="attachment"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red flex gap-1"
                >
                  Attachment <ImAttachment />
                </label>
                <input
                  type="text"
                  name="attachment"
                  id="attachment"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              <div className="btnRow w-full flex justify-between">
                <button className="flex gap-1 items-center m-5 bg-theme-red px-3 py-2 rounded-lg opacity-80 text-2xl text-white hover:opacity-100 hover:cursor-pointer">
                  <span>Close</span>
                </button>
                <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-2xl text-white hover:opacity-100 hover:cursor-pointer">
                  <IoIosSend />
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Share Modal Open */}
      {shareModal && (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[450px] relative">
            {/* Closed Button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setShareModal(false)}
            >
              <FiX className="text-theme-red" size={24} />
            </button>
            {/* Heading  */}
            <h2 className=" text-xl font-semibold mb-4 text-theme-red">
              Share My CV Creator on Social Media
            </h2>
            <hr />
            {/* body content */}
            <p className="px-20 py-10 text-center flex flex-wrap text-lg font-semibold">
              Help us get the word out Tell a Friend or Family About My CV
              Creator
            </p>
            {/* Share Button Div */}
            <div className="flex flex-wrap px-10 gap-5 justify-center">
              <button className="flex gap-1 items-center my-1 bg-[#5458b3] px-3 py-2 rounded-md  text-xl text-white ">
                <TiSocialFacebook className="mx-1" />
                <span className="w-[80% ] border-s-2 px-2">Facebook</span>
              </button>
              <button className="flex gap-1 items-center my-1 bg-[#01b8ff] px-3 py-2 rounded-md  text-xl text-white ">
                <FaTwitter className="mx-1" />
                <span className="w-[80% ] border-s-2 px-2">Twitter</span>
              </button>
              <button className="flex gap-1 items-center my-1 bg-[#18da35] px-3 py-2 rounded-md  text-xl text-white ">
                <FaWhatsapp className="mx-1" />
                <span className="w-[80% ] border-s-2 px-2">Whatsapp</span>
              </button>
              <button className="flex gap-1 items-center my-1 bg-[#5458b3] px-3 py-2 rounded-md  text-xl text-white ">
                <FaLinkedinIn className="mx-1" />
                <span className="w-[80% ] border-s-2 px-2">Linkedin</span>
              </button>
              <button className="flex gap-1 items-center my-1 bg-theme-red px-3 py-2 rounded-md  text-xl text-white ">
                <FaReddit className="mx-1" />
                <span className="w-[80% ] border-s-2 px-2">Reddit</span>
              </button>




            </div>
            <h3 className="text-center text-lg font-semibold mt-10">Thanks for choosing My Cv Creator</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditFinish;
