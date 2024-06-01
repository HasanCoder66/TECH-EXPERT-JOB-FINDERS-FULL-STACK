import React from 'react'
import WebPageConvertForm from '../../components/Dashboard/WebPageConvertForm'

const WebPageToImage = () => {
    return (
        <div className='wrapper py-[6rem] px-[4rem]'>
            <WebPageConvertForm title={"Webpage to Image"} para={"Convert webpage to jpg with one click! Copy and paste the webpage URL and click the Convert button."} />
        </div>
    )
}

export default WebPageToImage