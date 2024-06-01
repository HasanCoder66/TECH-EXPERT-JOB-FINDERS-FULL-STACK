import React from 'react'

const PageHeader = ({title}) => {
    return (
        <div className='header my-20'>
            <h1 className=' text-center text-6xl font-bold text-theme-red mb-5'>{title}</h1>
            <div className="breadCrumbs">
                <h1 className=' text-center text-xl '>Home &gt; {title}</h1>
            </div>
        </div>
    )
}

export default PageHeader