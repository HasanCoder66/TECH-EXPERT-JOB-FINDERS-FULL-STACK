import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const ResumeTemp02 = () => {
  return (
    <div className="w-[90%] max-w-[750px] bg-white shadow-xl border-[0.2rem] border-orange-400 flex justify-center">
      <div className="cvCont w-[full] flex">
        <div className="bg-orange-400 w-[35%] text-black p-8">
          <h1 className="text-[3.3rem] leading-[3.3rem] font-light ">SMITH</h1>
          <h2 className="text-[2.2rem] font-semibold ">WILLIAM</h2>
          <h3 className=" text-[1.6rem]">VISUAL ARTIST</h3>
          <div className="h-[2px] w-[100%] bg-black mt-5"></div>
          <div className="mb-4">
            <div className="font-bold mb-2 text-[1.8rem] tracking-widest mt-10">
              CONTACT
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem] ">
              <FaPhoneAlt /> <span>+41 458 2356</span>
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem]">
              <FaEnvelope /> <span>smithwill@gmail.com</span>
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem]">
              <FaMapMarkerAlt /> <span>01 Street, New York, USA</span>
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem]">
              <TbWorld /> <span>www.smithwilliam.com</span>
            </div>
          </div>
          <div className="mb-4 mt-6">
            <div className="  font-bold mb-2 text-[1.8rem] tracking-widest">
              SOCIAL
            </div>
            <div className=" text-[1.4rem] mb-1">
              Facebook: facebook/smithwill
            </div>
            <div className="text-[1.4rem] mb-1 ">
              Twitter: twitter/smithwill
            </div>
            <div className="text-[1.4rem] mb-1 ">
              LinkedIn: linkedin/smithwill
            </div>
          </div>
          <div className="mt-6">
            <div className="font-bold mb-2 text-[1.8rem] tracking-widest">
              SKILLS
            </div>
            <div className="mb-2 text-[1.4rem] ">Graphic Design</div>
            <div className="mb-2 text-[1.4rem]">Web Design</div>
            <div className="mb-2 text-[1.4rem]">Visual Art</div>
            <div className="mb-2 text-[1.4rem]">Web development</div>
            <div className="mb-2 text-[1.4rem]">User Experience Design</div>
          </div>
          <div className="mt-6">
            <div className="font-bold mb-2 text-[1.8rem] tracking-widest">
              CERTIFICATE
            </div>
            <div className="mb-2 text-[1.4rem]">
              Graphic Design <br /> (2023-2024)
            </div>
            <div className="mb-2 text-[1.4rem]">
              Web Design <br /> (2023-2024)
            </div>
            <div className="mb-2 text-[1.4rem]">
              Visual Art <br /> (2023-2024)
            </div>
            <div className="mb-2 text-[1.4rem]">
              Web development <br /> (2023-2024)
            </div>
            <div className="mb-2 text-[1.4rem]">
              User Experience Design (2023-2024)
            </div>
          </div>
        </div>

        <div className="w-[65%] py-8 px-6">
          <div className="flex flex-col items-start w-full">
            <div className="flex">
              <h2 className=" text-[3rem] leading-[3rem] font-bold tracking-widest">
                ABOUT
              </h2>
            </div>
            <p className="text-[1.4rem] mt-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, hic,
              laudantium quod asperiores unde voluptatibus totam architecto
              iusto, ut debitis{" "}
            </p>
            <div className="h-[2px] w-[100%] bg-black mt-6"></div>
          </div>
          <div className="p-6">
            <h1 className="text-[2rem] font-bold tracking-widest mb-2">
              EXPERIENCE
            </h1>
            <div>
              <div className="text-[1.3rem]">
                <span>Start Date </span>
                <span>- End Date</span>
              </div>
              <div className="text-[1.5rem] font-semibold">Job Title</div>
              <div className="text-[1.4rem] font-medium mb-1">Employment</div>
              <span className="text-[1.3rem] font-medium mb-1">
                City, State
              </span>
              <div className="text-[1.3rem] mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                ex quisquam consequatur voluptates, optio ducimus quia eveniet,
                in earum necessitatibus quaerat porro hic quibusdam a!
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[1.3rem]">
                <span>Start Date </span>
                <span>- End Date</span>
              </div>
              <div className="text-[1.5rem] font-semibold">Job Title</div>
              <div className="text-[1.4rem] font-medium mb-1">Employment</div>
              <span className="text-[1.3rem] font-medium mb-1">
                City, State
              </span>
              <div className="text-[1.3rem] mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                ex quisquam consequatur voluptates, optio ducimus quia eveniet,
                in earum necessitatibus quaerat porro hic quibusdam a!
              </div>
            </div>
          </div>
          <div className="px-6 py-0">
            <h1 className="text-[2rem] font-bold tracking-widest mb-2">
              EDUCATION
            </h1>
            <div className="mb-4">
              <div className="text-[1.3rem] mb-1">
                <span>2020 </span>
                <span>- 2020</span>
              </div>
              <div className="text-[1.5rem] font-semibold mb-2">
                MASTER'S OF ARTS, MAJOR IN COMMUNICATION
              </div>
              <div className="text-[1.4rem] font-medium mb-1">
                UNIVERSITY NAME | CITY NAME
              </div>
              <div className="text-[1.3rem] mb-1">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem...
              </div>
            </div>
            <div className="mb-4">
              <div className="text-[1.3rem] mb-1">
                <span>2020 </span>
                <span>- 2020</span>
              </div>
              <div className="text-[1.5rem] font-semibold mb-2">
                MASTER'S OF ARTS, MAJOR IN COMMUNICATION
              </div>
              <div className="text-[1.4rem] font-medium mb-1">
                UNIVERSITY NAME | CITY NAME
              </div>
              <div className="text-[1.3rem] mb-1">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem...
              </div>
            </div>
            <div>
              <div className="text-[1.3rem] mb-1">
                <span>2020 </span>
                <span>- 2020</span>
              </div>
              <div className="text-[1.5rem] font-semibold mb-2">
                MASTER'S OF ARTS, MAJOR IN COMMUNICATION
              </div>
              <div className="text-[1.4rem] font-medium mb-1">
                UNIVERSITY NAME | CITY NAME
              </div>
              <div className="text-[1.3rem] mb-1">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemp02;
