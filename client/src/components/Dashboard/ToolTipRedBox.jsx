import React from 'react'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const ToolTipRedBox = () => {
    return (
        <div className='wrapper py-[2rem] px-[1rem] bg-theme-red text-white rounded-[3px] flex gap-4 mb-[3rem]'>
            <div className="icon mx-[1rem]">
                <TipsAndUpdatesIcon style={{fontSize: '2rem'}}/>
            </div>
            <div className="textContainer text-[1.2rem]">
                <div className='flex gap-2'>
                    <p className='font-medium'>Webpage to PDF: </p>
                    <p>Convert the webpage to PDF with one click! Copy and paste the webpage URL and click the Covert button.!</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-medium'>Webpage to Image: </p>
                    <p>Convert the webpage to jpg with one click! Copy and paste the webpage URL and click the Covert button.!</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-medium'>Webpage to Screenshot: </p>
                    <p>Website screenshots with just one click! Copy and paste the URL of the page you want to snapshot and click the Convert button.</p>
                </div>
            </div>
        </div>
    )
}

export default ToolTipRedBox