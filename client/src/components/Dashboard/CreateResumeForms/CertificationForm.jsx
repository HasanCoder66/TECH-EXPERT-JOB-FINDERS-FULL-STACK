// import React, { useState } from "react";

// // React Icons
// import { ImBackward2, ImForward3 } from "react-icons/im";
// import { TfiSave } from "react-icons/tfi";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaPlus } from "react-icons/fa6";

// const CertificationForm = () => {
//   const [addCertificates, setAddCertificates] = useState([1, 2, 3]);

//   const [certificate, setCertificate] = useState("")
//   const [year, setYear] = useState("")

//   console.log(certificate);
//   console.log(year);

//   return (
//     <div className="w-full">
//       {/* Certification Form FIelds */}
//       <form action="#" className="w-full flex flex-col gap-[2rem]">
//         {/* Row First */}
//         {addCertificates.map((item, index) => (
//           <div key={index} className="rowFirst grid grid-cols-12 gap-[2rem]">
//             {/* Certificate */}
//             <div className="CertificateInput col-span-4 flex flex-col gap-[1rem]">
//               <label
//                 htmlFor="Certificate"
//                 className="text-[1.5rem] leading-[1.5rem] text-theme-red"
//               >
//                 Certificate
//               </label>
//               <input
//               onChange={(e) => setCertificate(e.target.value)}
//                 type="text"
//                 name="Certificate"
//                 id="Certificate"
//                 className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
//               />
//             </div>

//             {/* Certificate Status */}
//             <div className="certificateStatusInput col-span-4 flex flex-col gap-[0.8rem]">
//               <label
//                 htmlFor="certificateStatus"
//                 className="text-[1.5rem] leading-[1.5rem] text-theme-red"
//               >
//                 Year
//               </label>
//               <input
//               onChange={(e) => setYear(e.target.value)}
//                 type="date"
//                 name="certificateStatus"
//                 id="certificateStatus"
//                 className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
//               />
//             </div>

//             <div className="deleteIcon col-span-2 h-full flex items-center justify-start">
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setAddCertificates((prevCertificate) =>
//                     prevCertificate.filter((skill) => skill !== item)
//                   );
//                 }}
//                 className="text-[2.8rem] text-theme-red mt-6"
//               >
//                 <RiDeleteBin6Line />
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Add More Certificate */}
//         <div className="addCertificates w-full flex py-[2rem]">
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setAddCertificates([
//                 ...addCertificates,
//                 addCertificates.length + 1,
//               ]);
//             }}
//             className="border-theme-red text-theme-red text-[1.5rem] px-[1.5rem] py-[0.8rem] flex items-center gap-[0.6rem] rounded-lg border-[0.2rem]"
//           >
//             <FaPlus size={20} />
//             Add More Certificate
//           </button>
//         </div>

//         {/* Buttons Row */}
//         <div className="btnRow w-full flex justify-between py-[1rem]">
//           <button
//             onClick={(e) => e.preventDefault()}
//             className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
//           >
//             <ImBackward2 size={20} />
//             <span>Previous</span>
//           </button>

//           <button
//             onClick={(e) => e.preventDefault()}
//             className="bg-green-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
//           >
//             <TfiSave />
//             <span>Save</span>
//           </button>

//           <button
//             onClick={(e) => e.preventDefault()}
//             className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
//           >
//             <span>Next</span>
//             <ImForward3 size={20} />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CertificationForm;



























import React, { useState } from "react";

// React Icons
import { ImBackward2, ImForward3 } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";

const CertificationForm = () => {
  const [certificatesList, setCertificatesList] = useState([
    { certificate: "", year: "" },
    { certificate: "", year: "" },
    { certificate: "", year: "" },
  ]);

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume.resumeAllData);

  const handleCertificateChange = (index, key, value) => {
    const updatedCertificatesList = certificatesList.map((certificateItem, i) =>
      i === index ? { ...certificateItem, [key]: value } : certificateItem
    );
    setCertificatesList(updatedCertificatesList);
  };

  const saveCertificatesDataHandler = (e) => {
    e.preventDefault();
    const payload = {
  
        ...resumeData,
        certificates: certificatesList,
  
    };
    dispatch(resumeSuccess(payload));
  };

  return (
    <div className="w-full">
      {/* Certification Form Fields */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        {certificatesList.map((item, index) => (
          <div key={index} className="rowFirst grid grid-cols-12 gap-[2rem]">
            {/* Certificate */}
            <div className="certificateInput col-span-4 flex flex-col gap-[1rem]">
              <label
                htmlFor={`certificate-${index}`}
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Certificate
              </label>
              <input
                onChange={(e) => handleCertificateChange(index, "certificate", e.target.value)}
                type="text"
                name={`certificate-${index}`}
                id={`certificate-${index}`}
                value={item.certificate}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* Certificate Year */}
            <div className="certificateYearInput col-span-4 flex flex-col gap-[0.8rem]">
              <label
                htmlFor={`certificateYear-${index}`}
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Year
              </label>
              <input
                onChange={(e) => handleCertificateChange(index, "year", e.target.value)}
                type="date"
                name={`certificateYear-${index}`}
                id={`certificateYear-${index}`}
                value={item.year}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            <div className="deleteIcon col-span-2 h-full flex items-center justify-start">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCertificatesList((prevCertificatesList) =>
                    prevCertificatesList.filter((_, i) => i !== index)
                  );
                }}
                className="text-[2.8rem] text-theme-red mt-6"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}

        {/* Add More Certificate */}
        <div className="addCertificates w-full flex py-[2rem]">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCertificatesList([...certificatesList, { certificate: "", year: "" }]);
            }}
            className="border-theme-red text-theme-red text-[1.5rem] px-[1.5rem] py-[0.8rem] flex items-center gap-[0.6rem] rounded-lg border-[0.2rem]"
          >
            <FaPlus size={20} />
            Add More Certificate
          </button>
        </div>

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-between py-[1rem]">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <ImBackward2 size={20} />
            <span>Previous</span>
          </button>

          <button
            onClick={(e) => e.preventDefault()}
            className="bg-green-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <TfiSave />
            <span onClick={saveCertificatesDataHandler}>Save</span>
          </button>

          <button
            onClick={(e) => e.preventDefault()}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <span>Next</span>
            <ImForward3 size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertificationForm;
