import React from "react";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";

const OrderAResumeService = () => {
  //   const options = ["Option 1", "Option 2", "Option 3"];

  //   const handleSelect = (selectedOption) => {
  //     e.preventDefault();
  //     console.log("Selected:", selectedOption);
  //   };

  return (
    <div div className="w-full relative bg-coral-light">
      <div className="pt-[6%] min-h-[100vh]">
        <PageHeader title={"Order A Resume Service"} />
        <div className="headingContainer px-[3rem] flex flex-col justify-center items-center  my-20">
          <div className="w-[631px] flex flex-col justify-center items-center">
            <div>
              <h1 className="font-semibold text-[2rem] text-[#FFA400] my-4 text-center">
                Resume/CV and Cover letter Service
              </h1>
              <p className="text-[1.4rem] leading-relaxed">
                At my CV Creator CV/Resume writing services, our team of expert
                CV/Resume writers are second to none.
                <br />
                We are expreienced HR specialist and career coaches so we
                understand what you are going through.
                <br />
                We have in-depth knowledge and vast experience creating
                professional CV's/Resume's and cover letters for clients of
                various backgrounds and industries. Many of us are M.Sc. and MBA
                holders from reputable Universities. So we are highly qualified
                to handle your CV/Resume writing.
              </p>
            </div>
            <div className="w-[100%] mt-[2rem]">
              <h1 className="font-bold text-left text-[2rem]">
                Please Fill out the form
              </h1>
            </div>
            <div className="w-[100%] mt-[2rem]">
              <InputField title={"Name"} type={"text"} />
              <InputField title={"Email"} type={"text"} />
              <InputField title={"Phone Number"} type={"text"} />
              <InputField title={"Service Type"} type={"text"} />
              <Dropdown placeholder={"Please Select"} title={"Service Type"} />
              <div className="my-[1.2rem]">
                <label for="inputname" className="block text-gray-400 text-md">
                  Current Resume:
                </label>
                <div class="mt-2 block w-[100%] drop-shadow-md py-[0.8rem] px-[1.2rem] bg-white">
                  <input
                    type="file"
                    name="inputname"
                    className="ring-gray-400 focus:text-gray-800 text-[1.2rem]"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="my-[1.2rem]">
                <label for="inputname" className="block text-gray-400 text-md">
                  Current Cover Letter:
                </label>
                <div class="mt-2 block w-[100%] drop-shadow-md py-[0.8rem] px-[1.2rem] bg-white">
                  <input
                    type="file"
                    name="inputname"
                    className="ring-gray-400 focus:text-gray-800 text-[1.2rem]"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="my-[1.2rem]">
                <label for="inputname" className="block text-gray-400 text-md">
                  Special Note:
                </label>
                <div class="mt-2 ">
                  <textarea
                    type="file"
                    name="inputname"
                    className="ring-gray-400 block w-[100%] drop-shadow-md py-[0.8rem] px-[1.2rem] bg-white focus:text-gray-800 text-[1.2rem]"
                    placeholder="Special Note"
                    rows={7}
                  />
                </div>
              </div>
              <button className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all overflow-hidden before:content-[''] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300">
                Send Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderAResumeService;
