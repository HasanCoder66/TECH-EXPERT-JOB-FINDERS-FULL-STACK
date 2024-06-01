import React, { useEffect, useState } from "react";
import cvImg from "../../assets/templates/cv-template-04.png";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import SelectResumeTemplateCard from "./SelectResumeTemplateCard";
import { GET_RESUME_TEMP } from "../../constants/apis.js";
import axios from "axios";

function SelectResumeTemplateModal({ activeTab }) {
  console.log(activeTab);
  const [freeResumeTemplate, setFreeResumeTemplate] = useState([]);
  // console.log(freeResumeTemplate)
  const apiCalling = async () => {
    try {
      const res = await axios.get(`/api${GET_RESUME_TEMP}`);
      // console.log(res?.data?.data);

      const { _id } = res?.data?.data;
      setFreeResumeTemplate(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCalling();
  }, []);

  const free = [
    {
      name: "BELA",
      src: cvImg,
    },
    {
      name: "Jhon",
      src: cvImg,
    },
    {
      name: "Salik",
      src: cvImg,
    },
  ];

  const premium = [
    {
      name: "Rizwan",
      src: cvImg3,
    },
    {
      name: "Salik",
      src: cvImg3,
    },
    {
      name: "Hassan",
      src: cvImg3,
    },
  ];
  const my = [];
  return (
    <div className="grid grid-cols-3 gap-[1rem] place-items-center">
      {activeTab == "free"
        ? freeResumeTemplate.map((data, i) => (
            <SelectResumeTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))
        : activeTab == "premium"
        ? premium.map((data, i) => (
            <SelectResumeTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))
        : activeTab == "my" &&
          my?.map((data, i) => (
            <SelectResumeTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))}
    </div>
  );
}

export default SelectResumeTemplateModal;
