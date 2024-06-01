import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cvImg1 from "../assets/templates/cv-template-04.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RatingStars from '../components/RatingStars'
import PromotionBadge from './PromotionBadge';
import DownloadIcon from '@mui/icons-material/Download';

const TemplateCard = ({ title, rating, promotion }) => {
    return (
        <Card
            style={{ width: '307px', height: "427px" }}
            className="group/item overflow-hidden mb-10 cursor-pointer bg-white drop-shadow-lg m-[2rem]"
        >
            <div className='absolute top-3 left-3'>
                <PromotionBadge text={promotion} />
            </div>
            <div className=" object-contain overflow-hidden">
                <div className="wrapper bg-[#B3C3C3] py-[20px] object-cover w-[307px] h-[301px]">
                    <Card.Img
                        variant="top"
                        src={cvImg1}
                        className="object-contain w-[100%] h-[100%]"
                    />
                    <div className={`bg-black opacity-0 group-hover/item:opacity-100 duration-300 ease-out text-white flex py-3 px-5 justify-between absolute w-[100%] hover:bg-theme-red`}>
                        <p>
                            Download
                        </p>
                        <DownloadIcon />
                    </div>
                </div>
            </div>
            <Card.Body className="p-[10px] px-[3rem] flex justify-between flex-col">
                <div className="z-10 text-center">
                    <Card.Title className="text-theme-red text-[1.5rem] font-semibold my-5">
                        {title}
                    </Card.Title>
                </div>
                <div className="z-10 text-center">
                    <RatingStars rating={rating}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TemplateCard