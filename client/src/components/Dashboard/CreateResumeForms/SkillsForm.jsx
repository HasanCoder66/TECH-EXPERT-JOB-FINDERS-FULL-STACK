// import React, { useState } from "react";

// // React Icons
// import { ImBackward2, ImForward3 } from "react-icons/im";
// import { TfiSave } from "react-icons/tfi";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaPlus } from "react-icons/fa6";
// import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";
// import { useDispatch, useSelector } from "react-redux";

// const SkillsForm = () => {
//   const [addSkills, setAddSkills] = useState([1, 2, 3]);

//   const [skills, setSkills] = useState("");
//   const [level, setLevel] = useState("");
//   const [userSkills, setUserSkills] = useState([]);
//   console.log(skills);
//   console.log(level);

//   const dispatch = useDispatch();
//   const resumeData = useSelector(
//     (state) => state.resume.currentData.resumeData
//   );
//   console.log(resumeData);

//   // const skillsOnChange = () => {
    
//   //   setUserSkills((prev) => [
//   //     ...prev,
//   //     {
//   //       skills,
//   //       level,
//   //     },
//   //   ]);
//   // };

//   // if (skills && level) {
//   //   skillsOnChange()
//   // } else {
//   //   alert("sorry maha");
//   // }

//   // const skillsArray = [];
//   // const skillsObject = {
//   //   skills,
//   //   level,
//   // };

//   // skillsArray.push(skillsObject);

//   // console.log(skillsObject);

//   const saveSkillsDataHandler = (e) => {
//     e.preventDefault();
//     console.log("save Skills handler is working");
//     const payload = {
//       resumeData: {
//         ...resumeData,
//         skills,
//         level,
//       },
//     };
//     dispatch(resumeSuccess(payload));
//   };

//   return (
//     <div className="w-full">
//       {/* Skills Form FIelds */}
//       <form action="#" className="w-full flex flex-col gap-[2rem]">
//         {/* Row First */}
//         {addSkills.map((item, index) => (
//           <div key={index} className="rowFirst grid grid-cols-12 gap-[2rem]">
//             {/* Skill Name */}
//             <div className="skillNameInput col-span-4 flex flex-col gap-[1rem]">
//               <label
//                 htmlFor="skillName"
//                 className="text-[1.5rem] leading-[1.5rem] text-theme-red"
//               >
//                 Skill
//               </label>
//               <input
//                 onChange={(e) => setSkills(e.target.value)}
//                 type="text"
//                 name="skillName"
//                 id="skillName"
//                 className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
//               />
//             </div>

//             {/* Skill Status */}
//             <div className="skillStatusInput col-span-4 flex flex-col gap-[0.8rem]">
//               <label
//                 htmlFor="skillStatus"
//                 className="text-[1.5rem] leading-[1.5rem] text-theme-red"
//               >
//                 Level
//               </label>
//               <select
//                 onChange={(e) => setLevel(e.target.value)}
//                 name="skillStatus"
//                 id="skillStatus"
//                 className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
//               >
//                 <option value="">Select</option>
//                 <option value="novice">Novive</option>
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="proficient">Proficient</option>
//                 <option value="expert">Expert</option>
//               </select>
//             </div>

//             <div className="deleteIcon col-span-2 h-full flex items-center justify-start">
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setAddSkills((prevSkills) =>
//                     prevSkills.filter((skill) => skill !== item)
//                   );
//                 }}
//                 className="text-[2.8rem] text-theme-red mt-6"
//               >
//                 <RiDeleteBin6Line />
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Add More Skills */}
//         <div className="addSkills w-full flex py-[2rem]">
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setAddSkills([...addSkills, addSkills.length + 1]);
//             }}
//             className="border-theme-red text-theme-red text-[1.5rem] px-[1.5rem] py-[0.8rem] flex items-center gap-[0.6rem] rounded-lg border-[0.2rem]"
//           >
//             <FaPlus size={20} />
//             Add More Skills
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
//             <span onClick={saveSkillsDataHandler}>Save</span>
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

// export default SkillsForm;

























import React, { useState } from "react";

// React Icons
import { ImBackward2, ImForward3 } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices";
import { useDispatch, useSelector } from "react-redux";

const SkillsForm = () => {

  const [skillsList, setSkillsList] = useState([
    { skill: "", level: "" },
    { skill: "", level: "" },
    { skill: "", level: "" },
  ])

  console.log(skillsList);

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume.resumeAllData);
  console.log(resumeData);

  const handleSkillChange = (index, key, value) => {
    const updatedSkillsList = skillsList.map((skillItem, i) =>
      i === index ? { ...skillItem, [key]: value } : skillItem
    );
    setSkillsList(updatedSkillsList);
  };

  const saveSkillsDataHandler = (e) => {
    e.preventDefault();
    console.log("save Skills handler is working");
    const payload = {
    
        ...resumeData,
        skills: skillsList,
  
    };
    dispatch(resumeSuccess(payload));
  };

  return (
    <div className="w-full">
      {/* Skills Form Fields */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        {skillsList.map((item, index) => (
          <div key={index} className="rowFirst grid grid-cols-12 gap-[2rem]">
            {/* Skill Name */}
            <div className="skillNameInput col-span-4 flex flex-col gap-[1rem]">
              <label
                htmlFor={`skillName-${index}`}
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Skill
              </label>
              <input
                onChange={(e) => handleSkillChange(index, "skill", e.target.value)}
                type="text"
                name={`skillName-${index}`}
                id={`skillName-${index}`}
                value={item.skill}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* Skill Level */}
            <div className="skillStatusInput col-span-4 flex flex-col gap-[0.8rem]">
              <label
                htmlFor={`skillStatus-${index}`}
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Level
              </label>
              <select
                onChange={(e) => handleSkillChange(index, "level", e.target.value)}
                name={`skillStatus-${index}`}
                id={`skillStatus-${index}`}
                value={item.level}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              >
                <option value="">Select</option>
                <option value="novice">Novice</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="proficient">Proficient</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div className="deleteIcon col-span-2 h-full flex items-center justify-start">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSkillsList((prevSkillsList) =>
                    prevSkillsList.filter((_, i) => i !== index)
                  );
                }}
                className="text-[2.8rem] text-theme-red mt-6"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}

        {/* Add More Skills */}
        <div className="addSkills w-full flex py-[2rem]">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSkillsList([...skillsList, { skill: "", level: "" }]);
            }}
            className="border-theme-red text-theme-red text-[1.5rem] px-[1.5rem] py-[0.8rem] flex items-center gap-[0.6rem] rounded-lg border-[0.2rem]"
          >
            <FaPlus size={20} />
            Add More Skills
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
            <span onClick={saveSkillsDataHandler}>Save</span>
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

export default SkillsForm;

