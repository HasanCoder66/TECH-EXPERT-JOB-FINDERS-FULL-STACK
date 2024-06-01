import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import { GoReply } from "react-icons/go";
import { FaCcMastercard } from "react-icons/fa";
import cvImg1 from '../../assets/templates/cv-template-02.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const DashViewProduct = ({openModal , closeModal , template}) => {
    console.log(template)

    if (!openModal) return null;

    return (
        <div className="fixed z-[100] h-[100%] inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-scroll py-[30px]">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[700px] max-w-[60%] relative my-auto">
                <button className="absolute top-4 right-4" onClick={closeModal}>
                    <FiX className="text-theme-red" size={24} />
                </button>
                <h2 className="text-4xl font-normal mb-4 text-theme-red">
                    View Product
                </h2>
                <hr className='border-[#c6c2c2] border-[1.2px]' />
                <div className="wrapper px-[2.2rem] py-[1rem] flex flex-col gap-[3rem]">
                    <div className="upper flex gap-[2rem]">
                        <div className="left">
                            <div className="imgContainer w-[290px] h-[432.32px] border-[1px] rounded-[7px] p-[1rem]">
                                <img src={template.src} alt="Template" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className="right flex flex-col gap-5">
                            <h1 className='font-bold text-[2.4rem]'>{template.name}</h1>
                            <h1 className="price text-theme-red font-bold text-[1.6rem]">{template.amount}</h1>
                            <p className='text-[1.4rem] leading-[1.68rem] font-light'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora et quidem necessitatibus laudantium eaque culpa tempore voluptatum quisquam ipsum minima vero odio hic, molestiae blanditiis. Quisquam est qui recusandae sequi.
                            </p>
                            <div className="paypal flex gap-5">
                                <p className='bg-[#ffa400] text-white px-[1.5rem] py-[0.7rem] rounded-[2px] cursor-pointer'>PayPal</p>
                                <p className='bg-[#ffa400] text-white px-[1.5rem] py-[0.7rem] rounded-[2px] cursor-pointer'>Pay Later</p>
                            </div>
                            <p className='text-[1.3rem]'>Two easy ways to pay</p>
                            <div className="cCardBox">
                                <div className='rounded-[3px] bg-theme-red w-fit px-[1.5rem] py-[0.7rem] flex items-center justify-center gap-3 cursor-pointer'>
                                    <CreditCardIcon sx={{ fontSize: "1.8rem", color: "white" }} />
                                    <FaCcMastercard className='text-[1.8rem] text-white' />
                                    <p className='text-white text-[1rem]'>Pay With Credit Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower relative">
                        <div className="titleBox border-[1px] w-fit p-[1rem] border-b-white z-10">
                            <p className='text-theme-red text-[1.3rem]'>Description</p>
                        </div>
                        <hr style={{ width: 'calc(100% - 95px)', marginLeft: '95px' }} />
                        <div className="mainBox border-[1px] border-t-0 p-[2rem] flex flex-col gap-3">
                            <p className='text-[1.3rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consequuntur ullam in dolorum, sit perferendis ducimus voluptatem fugiat exercitationem corrupti itaque ad enim, tempora vel blanditiis nulla mollitia. Assumenda, officia.
                            </p>
                            <h1 className='text-[1.3rem] font-semibold'>Features:</h1>
                            <div className='ps-[2.2rem]'>
                                <ol className='list-decimal text-[1.3rem] '>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                    <li>hello</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
        
    
}

export default DashViewProduct