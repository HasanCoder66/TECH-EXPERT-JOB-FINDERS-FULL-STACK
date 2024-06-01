import React from "react";

const FeatureAsistanceContent = ({ key, img, head, para }) => {
  return (
    <div key={key} className="w-3/6  h-fit p-3">
      <div className="flex items-center">
        <img src={img} alt="" className="h-16" />
        <span className="text-xl font-bold ml-2">{head}</span>
      </div>
      <div className="text-lg mt-2">{para}</div>
    </div>
  );
};

export default FeatureAsistanceContent;
