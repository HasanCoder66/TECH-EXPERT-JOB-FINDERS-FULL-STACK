function TemplateTabBar({ activeTab, setActiveTab, handleTabClick }) {
  const getTabClassNames = (tabName) => {
    return activeTab === tabName ? "bg-red-500 text-white rounded-full" : "";
  };

  return (
    <>
      <div className="px-[6.5rem] py-[2rem]">
        <span
          className={`text-2xl p-4 cursor-pointer ${getTabClassNames(
            "resume"
          )}`}
          onClick={() => handleTabClick("resume")}
        >
          Resume Template
        </span>
        <span
          className={`text-2xl p-4 cursor-pointer ${getTabClassNames("cover")}`}
          onClick={() => handleTabClick("cover")}
        >
          Cover Letter Template
        </span>
        <span
          className={`text-2xl p-4 cursor-pointer ${getTabClassNames(
            "website"
          )}`}
          onClick={() => handleTabClick("website")}
        >
          Website Template
        </span>
      </div>
      <div className=" w-full px-[6.5rem] ">
        <input
          type="search"
          placeholder="Search"
          className="border w-full p-4 rounded-lg"
          name=""
          id=""
        />
      </div>
    </>
  );
}

export default TemplateTabBar;
