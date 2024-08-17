import { BLOG } from '@/utils/BlogInterface'
import React from 'react'

const SingleCard = ({ element }: { element: any }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
        <h3 className="text-xl font-bold text-gray-900">{element?.Title}</h3>
        <p className="text-gray-700">
          {element?.Text ||
            'This is a sample blog post used for testing the comment functionality. It contains some example text.'}
        </p>
        <div className="flex gap-2 items-center">
          <img
            src="https://www.brandsynario.com/wp-content/uploads/2024/03/Hania-Amir-2.jpg"
            alt="demo"
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-200"
          />
          <span className="font-semibold text-gray-800">
            {element?.UserName}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
