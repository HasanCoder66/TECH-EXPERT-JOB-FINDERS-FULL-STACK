import React from 'react'
import WebPageConvertForm from '../../components/Dashboard/WebPageConvertForm'

const WebPageToPDF = () => {
    return (
        <div className='wrapper py-[6rem] px-[4rem]'>
            <WebPageConvertForm title={"Webpage to PDF"} para={"Convert webpage to PDF with one click! Copy and paste the webpage URL and click the Convert button."}/>
        </div>
    )
}

export default WebPageToPDF