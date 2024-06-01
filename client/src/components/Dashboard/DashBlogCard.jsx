import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import blogImg1 from "../assets/images/blogImg1.jpeg";
import blogImg1 from "../../assets/images/blogImg1.jpeg"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DashBlogCard = ({ name, desc, imgUrl ,onClick}) => {
  console.log(onClick)
  return (
  
    <Card
    onClick={onClick}
      style={{ width: "307px", height: "381px" }}
      className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer"
    >
      <div className="w-[100%] bg-slate-200 object-contain overflow-hidden">
        <Card.Img
          variant="top"
          src={blogImg1}
          className="group-hover/item:rotate-3 duration-300 ease-out scale-110"
        />
      </div>
      <Card.Body className="p-[10px] flex justify-between flex-col">
        <div className="group-hover/item:opacity-0 duration-300 ease-out">
          <Card.Text className="text-theme-black text-lg my-2">
            By: <span className="text-theme-red">Name</span> / 2024-03-4
          </Card.Text>
        </div>
        <div className="group-hover/item:-translate-y-[3rem] relative duration-300 ease-out z-10">
          <Card.Title className="text-theme-red text-[2.3rem] font-bold my-5">
            {name}
          </Card.Title>
          <Card.Text className="text-theme-black text-xl my-4 mb-[0]">
            {desc}
          </Card.Text>
        </div>
        <div className="">
          <Button
            variant="primary"
            className="text-white text-lg group-hover/item:text-theme-red duration-300 ease-out -translate-y-4"
          >
            Read More <ArrowForwardIcon />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashBlogCard;
