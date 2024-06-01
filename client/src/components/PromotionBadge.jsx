import React from 'react'

const PromotionBadge = ({ text }) => {
    return (
        <div className={`${text === 'FREE!' ? 'bg-theme-red' : text === 'SALE!' ? "bg-blue-600" : ""} w-[5rem] h-[5rem] rounded-full p-2 flex items-center justify-center text-white font-bold text-[12px]`}>
            {text}
        </div>
    )
}

export default PromotionBadge