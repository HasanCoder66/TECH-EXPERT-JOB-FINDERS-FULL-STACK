import React from "react";
import cnn from "../assets/CompanyPartners/cnn.jpg";
import enter from "../assets/CompanyPartners/enter.jpg";
import inc from "../assets/CompanyPartners/inc..jpg";
import yahoo from "../assets/CompanyPartners/Yahoo.jpg";
import bloom from "../assets/CompanyPartners/bloom.jpg";
import Msn from "../assets/CompanyPartners/Msn.jpg";
import CompanyPartners from "../components/CompanyPartners";

const OurCompanySection = () => {
  const partnerImg = [
    { img: cnn },
    { img: enter },
    { img: inc },
    { img: yahoo },
    { img: bloom },
    { img: Msn },
  ];

  // Split the array into chunks of 3 for each row
  const rows = partnerImg.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);

  return (
    <div className="mt-[2rem]">
      <p className="text-theme-yellow text-[2rem] text-center uppercase">Company</p>
      <p className="text-theme-red text-[3rem] font-bold text-center">Our Top Recruiters</p>

      <div className="pt-14 px-6">
        {rows.map((row, index) => (
          <div key={index} className="flex justify-evenly">
            {row.map((data, idx) => (
              <CompanyPartners data={data} key={idx} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompanySection;
