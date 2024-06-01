import React, { useRef, useState } from "react";

// Import Images
import MyResumeBg from "../../assets/slider/resume.jpg";
import MyLetterBg from "../../assets/slider/letter.jpg";
import Website from "../../assets/slider/website.jpg";
import Template from "../../assets/slider/template.jpg";
import JobAlert from "../../assets/slider/job.jpg";
import Blog from "../../assets/slider/blog.jpg";
import Affiliate from "../../assets/slider/affiliate.jpg";
import Feedback from "../../assets/slider/feedback.jpg";
import MobileApp from "../../assets/slider/app.jpg";
import Games from "../../assets/slider/game.jpg";

// Import React Icons
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { IoEarth } from "react-icons/io5";
import { ImCart } from "react-icons/im";
import { ImBriefcase } from "react-icons/im";
import { PiListDashesFill } from "react-icons/pi";
import { BiSolidMessage } from "react-icons/bi";
import { MdFeedback } from "react-icons/md";
import { BsAndroid2 } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EnterCoverLetterTitleModal from "./EnterCoverLetterTitleModal";
import EnterResumeTitleModal from "./EnterResumeTitleModal";
import { Link, Navigate } from "react-router-dom";

const DashHomeSlider = () => {
  const sliderRef = useRef();
  const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);
  const [isResumeTitleModalOpen, setIsResumeTitleModalOpen] = useState(false);

  // Function to scroll left
  const scrollingLeft = (scrollAmount) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  // Function to scroll right
  const scrollingRight = (scrollAmount) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };
  const CardClickHandler = (cardTitleName) => {
    if (cardTitleName == "New Resume") {
      setIsResumeTitleModalOpen(true);
    } else if (cardTitleName == "New Letter") {
      setIsTitleModalOpen(true);
    }
  };

  return (
    <div className="w-full relative px-[4rem] py-[3rem]">
      <button
        className="absolute left-[2rem] top-1/2 transform -translate-y-1/2 z-20 bg-white text-theme-red p-2 rounded-full shadow-xl"
        onClick={() => scrollingLeft(-210)}
      >
        <IoIosArrowBack size={35} />
      </button>
      <button
        className="absolute right-[2rem] top-1/2 transform -translate-y-1/2 z-20 bg-white text-theme-red p-2 rounded-full shadow-xl"
        onClick={() => scrollingRight(210)}
      >
        <IoIosArrowForward size={35} />
      </button>

      <div
        ref={sliderRef}
        className="w-full flex gap-[1.5rem] overflow-hidden scroll-smooth"
      >
        {[
          {
            CardIcon: BsFillPlusCircleFill,
            cardTitle: "New Resume",
            cardBgImage: "",
            badge: false,
          },
          {
            CardIcon: BsFillPlusCircleFill,
            cardTitle: "New Letter",
            cardBgImage: "",
            badge: false,
          },
          {
            CardIcon: FiFileText,
            cardTitle: "My Resume",
            cardBgImage: MyResumeBg,
            badge: true,
            link: "/app/myresume",
          },
          {
            CardIcon: FiFileText,
            cardTitle: "My Letter",
            cardBgImage: MyLetterBg,
            badge: true,
            link: "/app/coverletter",
          },
          {
            CardIcon: IoEarth,
            cardTitle: "Website",
            cardBgImage: Website,
            badge: false,
          },
          {
            CardIcon: ImCart,
            cardTitle: "Template",
            cardBgImage: Template,
            badge: false,
            link: "/app/template",
          },
          {
            CardIcon: ImBriefcase,
            cardTitle: "Job Alert",
            cardBgImage: JobAlert,
            badge: false,
            link: "/app/jobsalert",
          },
          {
            CardIcon: PiListDashesFill,
            cardTitle: "Blog",
            cardBgImage: Blog,
            badge: false,
            link: "/app/blogs",
          },
          {
            CardIcon: BiSolidMessage,
            cardTitle: "Affiliate",
            cardBgImage: Affiliate,
            badge: false,
          },
          {
            CardIcon: MdFeedback,
            cardTitle: "Feedback",
            cardBgImage: Feedback,
            badge: false,
            link: "/app/feedback",
          },
          {
            CardIcon: BsAndroid2,
            cardTitle: "Mobile App",
            cardBgImage: MobileApp,
            badge: false,
          },
          {
            CardIcon: FaGooglePlay,
            cardTitle: "Games",
            cardBgImage: Games,
            badge: false,
          },
        ].map(({ CardIcon, cardTitle, cardBgImage, badge, link }, index) => (
          <Link to={link ? link : ""}>
            <div
              key={index}
              className="card min-w-[20rem] min-h-[20rem] relative z-[10] flex flex-col justify-center items-center gap-[2rem] bg-gray-400 rounded-xl cursor-pointer hover:scale-[1.02] group/trainerCard transition-all overflow-hidden"
              onClick={() => CardClickHandler(cardTitle)}
            >
              {cardTitle !== "New Resume" && cardTitle !== "New Letter" && (
                <div className="cardBgImage absolute z-[-1] top-0 left-0 w-full h-full">
                  <img
                    src={cardBgImage}
                    alt={cardTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col justify-center items-center gap-[2rem]">
                <div className="cardIcon relative">
                  {cardTitle === "My Resume" ? (
                    <span className="text-[1.5rem] leading-[1.5rem] absolute top-0 right-0 bg-theme-red text-white font-semibold p-2 rounded-full">
                      0
                    </span>
                  ) : (
                    cardTitle === "My Letter" && (
                      <span className="text-[1.5rem] leading-[1.5rem] absolute top-0 right-0 bg-theme-red text-white font-semibold p-2 rounded-full">
                        0
                      </span>
                    )
                  )}

                  <CardIcon className="text-white text-[6rem]" />
                </div>

                <span className="text-white flex flex-col gap-[1rem] text-[2.2rem] leading-[2rem] font-medium text-center">
                  {cardTitle}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <EnterCoverLetterTitleModal
        isTitleModalOpen={isTitleModalOpen}
        setIsTitleModalOpen={setIsTitleModalOpen}
      />
      <EnterResumeTitleModal
        isTitleModalOpen={isResumeTitleModalOpen}
        setIsTitleModalOpen={setIsResumeTitleModalOpen}
      />
    </div>
  );
};

export default DashHomeSlider;
