import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InterestsIcon from '@mui/icons-material/Interests';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <footer className="bg-[#1C1C1C] text-white py-[6rem] px-[4rem]">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3">
                    <div className='mb-[10px]'>
                        <h5 className="text-[2.5rem] font-normal mb-1">Contact Info</h5>
                        <div className='flex h-5 w-[70%] '>
                            <hr className='border-[1.2px] w-[20%] border-theme-red' />
                            <hr className='border-[1.2px] w-[80%]' />
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-10'>
                        <PhoneIcon style={{ fontSize: "25px" }} className='text-theme-red' />
                        <div>
                            <p className='text-lg'>MON TO SUN: 24/7</p>
                            <p className='text-xl font-bold'>UK +</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-10'>
                        <MarkunreadIcon style={{ fontSize: "25px" }} className='text-theme-red' />
                        <div>
                            <p className='text-lg'>DO YOU HAVE ANY QUESTION?</p>
                            <p className='text-xl font-bold'>support@email.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-10'>
                        <InterestsIcon style={{ fontSize: "25px" }} className='text-theme-red' />
                        <div>
                            <p className='text-lg'>SOCIAL NETWORK</p>
                            <div className='flex items-center gap-5'>
                                <XIcon />
                                <FacebookIcon />
                                <InstagramIcon />
                                <YouTubeIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className='mb-[10px]'>
                        <h5 className="text-[2.5rem] font-normal mb-1">Quick Links</h5>
                        <div className='flex h-5 w-[70%] '>
                            <hr className='border-[1.2px] w-[20%] border-theme-red' />
                            <hr className='border-[1.2px] w-[80%]' />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <ul className="list-none">
                            <li>
                                <a className="text-lg text-white hover:text-theme-red" href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Order Resume
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Cover Later
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Word Template
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Url to PDF
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none pr-[30%]">
                            <li>
                                <a className="text-lg text-white hover:text-theme-red" href="#">
                                    Download App
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Website
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Job Alert
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/3 ">
                    <div className='mb-[10px]'>
                        <h5 className="text-[2.5rem] font-normal mb-1">Our Company</h5>
                        <div className='flex h-5 w-[70%] '>
                            <hr className='border-[1.2px] w-[20%] border-theme-red' />
                            <hr className='border-[1.2px] w-[80%]' />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <ul className="list-none">
                            <li>
                                <a className="text-lg text-white hover:text-theme-red" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Affiliate
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Program
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none pr-[30%]">
                            <li>
                                <a className="text-lg text-white hover:text-theme-red" href="#">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a className="text-white text-lg hover:text-theme-red" href="#">
                                    Sponsorship Program
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container flex flex-wrap justify-between pt-4">
                <p className="text-xl">
                    <CopyrightIcon /> Copyright 2024. All rights reserved.
                </p>
                <div className='flex justify-center mt-2 gap-5'>
                    <p>Terms & Conditions | </p>
                    <p>Privacy Policy | </p>
                    <p>Affiliate Program</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer