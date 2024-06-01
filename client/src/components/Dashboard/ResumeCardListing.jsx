import React from 'react';
import DashResumeCard from './ResumeCard';
import cvImg2 from "../../assets/templates/cv-template-02.png";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import websiteimg from "../../assets/website-template/WEBSITE.jpg"
function ResumeCardListing({ activeTab , openModal }) {
    console.log(activeTab ,openModal )
    const resume = [{
        amount: "5$",
        name: "Graphic",
        src: cvImg2
    },
    {
        amount: "8$",
        name: "Corporate",
        src: cvImg2
    },
    {
        amount: "10$",
        name: "Social",
        src: cvImg2
    },
    {
        amount: "10$",
        name: "Tim",
        src: cvImg2
    },
    {
        amount: "10$",
        name: "Mark",
        src: cvImg2
    },
    {
        amount: "10$",
        name: "Kim",
        src: cvImg2
    },
    {
        amount: "10$",
        name: "Moon",
        src: cvImg2
    },
    {
        amount: "10$",
        name: "Jhon",
        src: cvImg2
    },
    ]
    const coverletter = [{
        amount: "5$",
        name: "Graphic Cover Letter",
        src: cvImg3
    },
    {
        amount: "8$",
        name: "Corporate Cover Letter",
        src: cvImg3
    },
    {
        amount: "10$",
        name: "Social Cover Letter",
        src: cvImg3
    },
    {
        amount: "10$",
        name: "Tim Cover Letter",
        src: cvImg3
    },
    {
        amount: "10$",
        name: "Mark Cover Letter",
        src: cvImg3
    },
    {
        amount: "10$",
        name: "Kim Cover Letter",
        src: cvImg3
    },
    {
        amount: "10$",
        name: "Moon Cover Letter ",
        src: cvImg3
    },
    {
        amount: "10$",
        name: "Jhon Cover Letter",
        src: cvImg3
    },
    ]
    const website = [{
        amount: "5$",
        name: "FRANCE",
        src: websiteimg
    },
    {
        amount: "8$",
        name: "LONDON",
        src: websiteimg
    },
    {
        amount: "10$",
        name: "OCEAN",
        src: websiteimg
    },
    {
        amount: "10$",
        name: "LAKESIDE",
        src: websiteimg
    },
    {
        amount: "10$",
        name: "LOKOGAMA",
        src: websiteimg
    },
    {
        amount: "10$",
        name: "MOON",
        src: websiteimg

    },
    {
        amount: "10$",
        name: "SUN ",
        src: websiteimg
    },
    {
        amount: "10$",
        name: "PLANET",
        src: websiteimg
    },
    ]
    return (

        <div className='grid grid-cols-4 place-items-center' >
            {activeTab == 'resume' ? resume.map((data, i) => (
                <DashResumeCard data={data} key={i} onClick={() => openModal(data)} />

            )

            ) : activeTab ==  "cover" ? coverletter.map((data, i) => (
                <DashResumeCard data={data} key={i} onClick={() => openModal(data)} />

            )) : activeTab ==  "website" && website.map((data, i) => (
                <DashResumeCard data={data} key={i}  onClick={() => openModal(data)}/>

            ))
            }

        </div>



    )
}

export default ResumeCardListing