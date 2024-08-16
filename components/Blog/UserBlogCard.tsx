import { BLOG } from '@/utils/BlogInterface'
import React from 'react'
import { FaRegCommentDots } from 'react-icons/fa'

const UserBlogCard = ({ Blog }: { Blog: BLOG }) => {
  return (
    <div className="flex flex-col w-full  justify-center p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{Blog.Title}</h2>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <div className="flex gap-3 items-center">
          <img
            src="https://www.brandsynario.com/wp-content/uploads/2024/03/Hania-Amir-2.jpg"
            alt="demo"
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-200"
          />
          <h6 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
            {Blog.UserName}
          </h6>
        </div>
        <p className="text-gray-500">
          Created At{' '}
          {new Date(Blog.CreatedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <p className="text-md text-justify text-gray-800 mb-4 font-medium">
        {Blog.Text}
      </p>
      <div className="flex sm:flex-row flex-col gap-5  justify-between items-center">
        <button className="flex items-center gap-2 py-2 px-4 bg-customBg text-white rounded-lg hover:bg-rose-900 focus:outline-none">
          <FaRegCommentDots /> View Comments
        </button>
        <div className=" flex gap-2 items-center">
          <button className=" bg-blue-600 px-6 py-1 text-white rounded-lg">
            Update
          </button>{' '}
          <button className=" bg-red-600 px-6 py-1 text-white rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserBlogCard
