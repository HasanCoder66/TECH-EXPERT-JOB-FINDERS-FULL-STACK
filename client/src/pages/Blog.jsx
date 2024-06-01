import React from "react";
import BlogCard from "../components/BlogCard";
import PageHeader from "../components/PageHeader";
import { blogCardData } from "../dummyData";
import PaginationRounded from "../components/PaginationBox";

const Blog = () => {
  return (
    <div className="w-full relative bg-[#FEF6F5]">
      <div className="pt-[6%]">
        <PageHeader title={"Blog"} />
        <div className="blogContainer px-16 flex flex-wrap items-center justify-between my-20">
          {blogCardData.map(({ name, desc, imgUrl }) => (
            <BlogCard name={name} desc={desc} imgUrl={imgUrl} />
          ))}
        </div>
        <div className="py-[1.8rem] w-fit mx-auto">
          <PaginationRounded />
        </div>
      </div>
    </div>
  );
};

export default Blog;
