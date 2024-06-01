import React from "react";

const CompanyPartners = ({ data }) => {
  return (
    <div className="w-60 h-24 overflow-hidden m-2 bg-gray">
        {/* w-full h-full aspect-[3/2] object-cover scale-95 transition-transform duration-300 transform-gpu hover:translate-y-full */}
      <img src={data.img} alt="Company Partners" className="w-full h-full aspect-[3/2] object-cover scale-95 transition-transform duration-100 transform-gpu hover:-translate-y-3" />
    </div>
  );
};

export default CompanyPartners;


