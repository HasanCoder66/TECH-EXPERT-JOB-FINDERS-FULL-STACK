import React, { useState } from "react";
import { useSelector } from "react-redux";

const CLTemplate01 = ({bgColor}) => {
  // console.log(bgColor)

  const { currentData } = useSelector((state) => state.coverLetter.currentData)
  // console.log(currentData)

  const textArray = currentData.letter.split('\n')
  // console.log(textArray)

  return (
    <div className="bg-slate-300 p-8 rounded-lg shadow-lg w-[100%] h-[100%]">
      <div className=" bg-white flex flex-row px-2 py-2 font-serif template h-[100%]">
        <div>
          <div className="text-white bg-blue-500 w-80 h-[90vh]" style={{backgroundColor: `${bgColor ? bgColor : "lightBlue"}`}}>
            <div>
              <img
                className="w-80"
                src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
                alt=""
              />
              <h1 className="text-3xl text-center font-medium">{`${currentData.firstName} ${currentData.lastName}`}</h1>
              <h3 className="text-2xl text-center mt-2">{currentData.profession}</h3>
              <h4 className="text-2xl ml-2 mt-8">TO</h4>
              <hr className=" w-72 ml-4 mt-2" />
              <p className="text-xl font-medium ml-2 mt-2">{currentData.recipient}</p>
              <p className="text-xl font-medium ml-2">{currentData.companyName}</p>
              <p className="text-lg ml-2">
                {currentData.streetAddress} <br /> {currentData.city}, {currentData.state}.
              </p>
            </div>
            <div>
              <h4 className="text-2xl ml-2 mt-8">CONTACT</h4>
              <hr className=" w-72 ml-4 mt-2" />
              <p className="text-gl ml-2  mt-2">
                <i class="ri-phone-line mr-2"></i>
                {currentData.phone}
              </p>
              <p className="text-lg ml-2">
                <i class="ri-mail-line  mr-2"></i>
                {currentData.email}
              </p>
              <p className="text-lg ml-2">
                <i class="ri-map-pin-line  mr-2"></i>
                {currentData.address}
              </p>
            </div>
            <div>
              <h4 className="text-2xl ml-2 mt-8">SOCIAL LINKS</h4>
              <hr className=" w-72 ml-4 mt-2" />
              <p className="text-lg ml-2  mt-2">
                <i class="ri-facebook-circle-line  mr-2"></i>{" "}
                https://www.facebook.com/
              </p>
              <p className="text-lg ml-2">
                <i class="ri-twitter-line  mr-2"></i>https://www.twitter.com/
              </p>
              <p className="text-lg ml-2 ">
                <i class="ri-linkedin-box-line  mr-2 "></i>
                https://www.linkedIn.com/
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="text-slate-700">
              <h3 className="text-2xl text-end mt-14">22 January 2021</h3>
              <div className="ml-6 mt-10 text-xl">
                {
                  textArray.map((item) => (
                    <p className="">
                      {item}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLTemplate01;
