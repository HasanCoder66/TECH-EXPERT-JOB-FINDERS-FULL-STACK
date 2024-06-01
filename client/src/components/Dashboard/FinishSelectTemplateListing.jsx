import React from "react";
import cvImg2 from "../../assets/templates/cv-template-02.png";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import FinishSelectTempCard from "./FinishSelectTempCard";
function FinishSelectTemplateListing({ activeTab }) {
  console.log(activeTab);
  const free = [
    {
      name: "BELA",
      src: cvImg2,
    },
    {
      name: "Jhon",
      src: cvImg2,
    },
    {
      name: "Salik",
      src: cvImg2,
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
    <div className="grid grid-cols-2 place-items-center">
      {activeTab == "free"
        ? free.map((data, i) => <FinishSelectTempCard data={data} key={i} />)
        : activeTab == "premium"
        ? premium.map((data, i) => <FinishSelectTempCard data={data} key={i} />)
        : activeTab == "my" &&
          my.map((data, i) => <FinishSelectTempCard data={data} key={i} />)}
    </div>
  );
}

export default FinishSelectTemplateListing;
