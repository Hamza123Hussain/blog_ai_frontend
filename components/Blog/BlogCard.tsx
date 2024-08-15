import React from 'react'
import { FaRegCommentDots } from 'react-icons/fa'

const BlogCard = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl justify-center p-6 border border-gray-300 rounded-lg shadow-lg bg-white ">
      <div className=" flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src="https://www.brandsynario.com/wp-content/uploads/2024/03/Hania-Amir-2.jpg"
            alt="demo"
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-200"
          />{' '}
          <h6 className="text-lg font-semibold flex items-center gap-2">
            Hamza Hussain
          </h6>
        </div>{' '}
        <p className="text-gray-500  ">
          {' '}
          Created At {new Date().toLocaleDateString()}
        </p>
      </div>

      <h4 className="text-md text-justify text-gray-800 mb-4 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis
        similique quod beatae, totam inventore porro odit unde repellendus
        dolore hic ipsa aperiam quae iusto earum sint eaque molestias numquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque
        reiciendis eaque deserunt reprehenderit blanditiis perspiciatis magni
        iste eveniet perferendis at quidem rem sunt repellendus vel, debitis
        aperiam autem quaerat?
      </h4>
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          <FaRegCommentDots /> View Comments
        </button>
      </div>
    </div>
  )
}

export default BlogCard
