import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { Editor } from "@tinymce/tinymce-react";

const DashFeedback = () => {
  return (
    <div className="bg-white m-10 mr-32 rounded-lg">
      {/* Heading */}
      <div className="border border-slate-300 rounded-t-lg py-3 px-10">
        <span className="text-3xl">Thank you for your FeedBack</span>
      </div>
      {/* Body Section */}
      <div className="p-10 border border-slate-300">
        {/* Section Logo and Paragraph */}
        <div className="flex flex-col justify-center items-center">
          <IoIosChatbubbles className="my-10 text-9xl text-theme-red" />
          <p>
            Should you have face any issue or have any suggestions for us, feel
            free to contact us, we will get back to you as soon as we can!
          </p>
        </div>
        {/* Feedback SEction */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-theme-red mt-12">
            Positive feedback
          </h1>
          <span className="my-3 text-xl">Subject</span>
          <input
            type="text"
            name="Serach"
            id="Search"
            placeholder="Subject"
            className="  px-[1.5rem] py-[0.75rem] text-[1.35rem] leading-[1.35rem] outline-none rounded-lg border border-slate-300"
          />
        </div>

        {/* Message Section */}

        <div className="mt-5 mb-3">
          <span className="text-xl">Message</span>
          <div>
            <Editor
              apiKey="ar9rz3ek138ri8zqmmjy1ver1c4xksfbzi3illv7sk37tojq"
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
              initialValue="Insert FeedBack"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFeedback;
