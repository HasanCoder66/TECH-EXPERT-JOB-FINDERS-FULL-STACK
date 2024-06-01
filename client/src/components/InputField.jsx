import React from 'react'

const InputField = ({title, type}) => {
    return (
        <div className='my-[1.5rem]'>
            <label for="inputname" className="block text-gray-400 text-md">
                {title}:
            </label>
            <div class="mt-2">
                <input
                    type={type}
                    name="inputname"
                    className="block w-[100%] drop-shadow-md py-[0.8rem] px-[1.2rem] ring-gray-400 focus:text-gray-800 text-[1.2rem]"
                    placeholder={`Your ${title}`}
                />
            </div>
        </div>
    )
}

export default InputField