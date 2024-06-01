import React, { useState } from 'react';
import { FiMoreHorizontal, FiThumbsUp, FiMessageSquare, FiEye, FiThumbsDown, FiX } from 'react-icons/fi';
import { dummyPost } from '../../dummyData';
const DashPost = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const toggleOptions = () => setShowOptions(!showOptions);
  const toggleCommentModal = () => setShowCommentModal(!showCommentModal);

  const handleUploadPhotoClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <>
    {[1].map((e, index) => (
        <div className='bg-white w-full mt-4 p-6 rounded-lg shadow-lg mb-6'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center'>
            <img src={dummyPost.profileImage} alt="Profile" className='w-12 h-12 rounded-full mr-4' />
            <div>
              <p className='font-semibold'>{dummyPost.name}</p>
              <p className='text-sm text-gray-500'>{dummyPost.timeAgo}</p>
            </div>
          </div>
          <div className='relative'>
            <FiMoreHorizontal size={24} className='cursor-pointer' onClick={toggleOptions} />
            {showOptions && (
              <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
                <button className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'>Report</button>
              </div>
            )}
          </div>
        </div>
        <hr className='mb-4' />
        <div>
          <h2 className='text-xl font-semibold mb-2'>{dummyPost.title}</h2>
          {dummyPost.image && <img src={dummyPost.image} alt="Post" className='w-full h-auto mb-4' />}
        </div>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center justify-between space-x-56'>
            <FiThumbsUp size={24} className='cursor-pointer' />
            <FiMessageSquare size={24} className='cursor-pointer' />
            <FiEye size={24} className='cursor-pointer' />
            <FiThumbsDown size={24} className='cursor-pointer' />
          </div>
        </div>
        <textarea
          className='w-full p-4 border border-gray-300 rounded-lg mb-4'
          placeholder='Add a comment...'
          rows='2'
          onClick={toggleCommentModal}
        ></textarea>
        <div className='flex justify-between mb-4'>
          <button className='bg-theme-red text-white p-2 text-xl rounded-lg font-semibold' onClick={toggleCommentModal}>
            Answer
          </button>
          <button className='bg-gray-200 text-theme-red p-2 text-xl rounded-lg font-semibold' onClick={handleUploadPhotoClick}>
            Upload Photo
          </button>
        </div>
        <input id="fileInput" type="file" style={{ display: 'none' }} />
        <div className='mt-4'>
          {dummyPost.comments.map((comment, index) => (
            <div key={index} className='border-t border-gray-300 pt-4'>
              <p className='font-semibold text-xl'>{comment.name}</p>
              <p className='text-gray-600 text-xl'>{comment.text}</p>
            </div>
          ))}
        </div>
  
        
      </div>
    ))}
    </>
   
  );
};

export default DashPost;

// Usage example

