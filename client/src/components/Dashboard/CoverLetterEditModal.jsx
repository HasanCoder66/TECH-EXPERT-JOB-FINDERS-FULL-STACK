import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaFloppyDisk } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { letterSuccess } from "../../Redux/Slices/coverLetterSlices";

// console.log(templateId, "====>>>temp")
// console.log(currentData, "====>>>currentData")

function CoverLetterEditModal({ setIsSelectTemplateOpen, handleCreateClick }) {
  const dispatch = useDispatch()
  const { templateId } = useSelector((state) => state.coverLetter)
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profession, setProfession] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  // console.log(templateId, "====>>>>> template")
  const saveDataHandler = (e) => {
    e.preventDefault()
    const payload = {
      currentData: {
        firstName,
        middleName,
        lastName,
        profession,
        streetAddress,
        phone,
        email,
      },
      templateId
    }
    dispatch(letterSuccess(payload))
    // setTimeout(() => {
    //   handleCreateClick();
    // }, 300);

  }



  return (
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsSelectTemplateOpen(false)}
        >
          <FiX className="text-theme-red" size={24} />
        </button>

        <h2 className=" text-2xl font-semibold mb-4 text-black">
          Personal Information
        </h2>
        <hr />
        <div className="w-full mt-3">
          <div className="w-full flex flex-col gap-[2rem]">
            {/* Row First */}
            <div className="rowFirst grid grid-cols-2 gap-[2rem]">
              {/* First Name */}
              <div className="jobTitleInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="firstName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Middle Name */}
              <div className="employerInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="middleName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Middle Name (Optional)
                </label>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  onChange={(e) => setMiddleName(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Second */}
            <div className="rowSecond grid grid-cols-2 gap-[2rem]">
              {/* Last Name */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="lastName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Middle Name */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="Profession"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Profession
                </label>
                <input
                  type="text"
                  name="Profession"
                  id="Profession"
                  placeholder="eg. Sr. Manager"
                  onChange={(e) => setProfession(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Third */}
            <div className="rowThird grid grid-cols-2 gap-[2rem]">
              {/* First Name */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="streetAdress"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAdress"
                  id="streetAdress"
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Middle Name */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="phone"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
              {/* Middle Name */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="email"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            <div className="btnRow w-full flex justify-end">
              <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                <FaFloppyDisk />
                <span onClick={(e) => saveDataHandler(e)}>Save & Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverLetterEditModal;

export const CoverLetterSecondEditor = ({ setIsSecondModalOpen }) => {

  const dispatch = useDispatch()
  const { templateId, currentData } = useSelector((state) => state.coverLetter.currentData)
  // console.log(templateId, "====>>> template Id")
  // console.log(currentData, "====>>> currentData")

  const [recipient, setRecipient] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const saveDataHandler = () => {
    // e.preventDefault()
    const payload = {
      currentData: {
        ...currentData,
        recipient,
        companyName,
        address: streetAddress,
        city,
        state,
      },
      templateId
    }
    dispatch(letterSuccess(payload))
    // setTimeout(() => {
    //   handleCreateClick();
    // }, 300);
    // console.log("first")

  }

  return (
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsSecondModalOpen(false)}
        >
          <FiX className="text-theme-red" size={24} />
        </button>

        <h2 className=" text-2xl font-semibold mb-4 text-black">
          Employer Information
        </h2>
        <hr />
        <div className="w-full mt-3">
          <div className="w-full flex flex-col gap-[2rem]">
            {/* Row First */}
            <div className="rowFirst grid grid-cols-2 gap-[2rem]">
              {/* Recipient */}
              <div className="jobTitleInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="recipient"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Recipient
                </label>
                <input
                  type="text"
                  name="recipient"
                  id="recipient"
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="eg. Director"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Company Name */}
              <div className="employerInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="companyName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Second */}
            <div className="rowSecond grid grid-cols-2 gap-[2rem]">
              {/* Street Address */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="streetAddress"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* City */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="city"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="eg. Sr. Manager"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Third */}
            <div className="rowThird grid grid-cols-2 gap-[2rem]">
              {/* State */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="state"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            <div className="btnRow w-full flex justify-end">
              <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                <FaFloppyDisk />
                <span onClick={saveDataHandler}>Save & Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
