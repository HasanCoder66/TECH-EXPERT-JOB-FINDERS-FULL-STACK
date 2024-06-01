import React from "react";
import { Button, Card } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import webTempImg from "../assets/website-template/Website-Template.jpg"

const WebsiteTemplateComp = ({ imgUrl, name, desc }) => {
  return (
      <Card
        style={{ width: "324px", height:"376px"}}
        className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer bg-blur-300 mr-14"
      >
        <div className="w-[100%] bg-slate-200 object-cover overflow-hidden h-1/2">
          <Card.Img
            variant="top"
            src={webTempImg}
            className=" scale-110 w-full h-full"
          />
        </div>
        <Card.Body className="p-[10px] flex justify-between flex-col h-1/2">
          <div className="group-hover/item:-translate-y-[3rem] relative duration-300 ease-out z-10 ">
            <Card.Title className="text-theme-red text-[2.3rem] font-bold my-5">
              {'Mark'}
            </Card.Title>
            <Card.Text className="text-theme-black text-xl my-4 mb-[0]">
              {desc}
            </Card.Text>
          </div>
          <div className="">
            <Button
              variant="primary"
              className="text-white  text-lg group-hover/item:text-theme-red duration-300 ease-out -translate-y-4"
            >
              View Template <ArrowForwardIcon />
            </Button>
          </div>
        </Card.Body>
      </Card>
  );
};

export default WebsiteTemplateComp;
