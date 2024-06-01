import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { blogCardData } from "../../dummyData";
import DashBlogCard from "../../components/Dashboard/DashBlogCard";
import DashViewBlog from "../../components/Dashboard/DashViewBlog";


const BlogsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const openModal = (a , b ,c) => {
      setSelectedTemplate(a ,b ,c);
      setIsModalOpen(true);
      
  };

  console.log(selectedTemplate)


  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedTemplate(null);
  };
  return (
    <div className="p-10">
      <div className=" w-[90%] shadow-lg mx-10 searchBar flex items-center gap-10 bg-white px-5 py-1 rounded-lg">
        <input
          type="text"
          name="Serach"
          id="Search"
          placeholder="Search"
          className="m-3 w-[80%] px-[0.7rem] py-[0.75rem] text-[1.35rem] leading-[1.35rem] outline-none rounded-lg border"
        />
        <button
          htmlFor="Search"
          className="bg-theme-red flex items-center gap-2 px-5 text-white p-[0.7rem] text-[1.6rem] rounded-lg hover:bg-[#ec4943d9] transition-all"
        >
          <FiSearch />
          Search
        </button>
      </div>
      <div className="mt-10">
        <div className="blogCardCont p-8 flex flex-wrap items-center justify-between ">
          {blogCardData.map(( data , i ) => (
            <DashBlogCard name={data.name} desc={data.desc} imgUrl={data.imgUrl} openModal={openModal} onClick={() => openModal(data)} />
          ))}
              {isModalOpen && (
                <DashViewBlog openModal={isModalOpen} closeModal={closeModal} template={selectedTemplate} />
            )}
        </div>
      </div>
      
      <div className="mb-8 flex justify-center">
            <button
              
              type="submit"
              className='border-2 text-3xl overflow-hidden    font-semibold className="text-[1.6rem] leading-[1.6rem] relative z-10 bg-theme-red text-white px-[2rem] py-[1.2rem] rounded-lg transition-all before:content-[""] before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-full before:bg-theme-yellow before:translate-x-[-100%] before:translate-y-[100%] before:rounded-lg hover:before:translate-x-[0%] hover:before:translate-y-[0%] before:transition-all before:duration-300 disabled:cursor-not-allowed '
            >
              Load more ...
            </button>
          </div>
    </div>
  );
};

export default BlogsPage;
