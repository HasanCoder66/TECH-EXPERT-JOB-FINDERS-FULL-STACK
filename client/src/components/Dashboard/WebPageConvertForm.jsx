import React from 'react'

const WebPageConvertForm = ({title, para}) => {
    return (
        <div className='bg-white flex items-center justify-center drop-shadow-md py-[4rem]'>
            <div className='flex flex-col items-center justify-center gap-[20px]'>
                <div className="heading">
                    <h1 className='font-medium text-[2.7rem]'>{title}</h1>
                </div>
                <div className="para text-[1.3rem]">
                    {para}
                </div>
                <div className="links flex gap-4 text-theme-red text-[1.3rem]">
                    <p className='cursor-pointer hover:underline'>Webpage to PDF |</p>
                    <p className='cursor-pointer hover:underline'>Webpage to Image |</p>
                    <p className='cursor-pointer hover:underline'>Screenshots</p>
                </div>
                <div className="inputField w-[100%] border-2 rounded-[3px]">
                    <input type="text" placeholder='http://example.com' className='w-[100%] px-[2rem] py-[1.5rem] text-[1.3rem]'/>
                </div>
                <button className="btn text-[1.3rem] text-white bg-theme-red px-[2rem] py-[1rem] rounded-[3px]">Convert</button>
            </div>
        </div>
    )
}

export default WebPageConvertForm