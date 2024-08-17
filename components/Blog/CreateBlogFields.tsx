import { BlogCreate } from '@/utils/BlogCreation'
import React from 'react'

const CreateBlogFields = ({
  CreateValue,
  SetValue,
}: {
  CreateValue: BlogCreate
  SetValue: any
}) => {
  const HandleChange = (e: any) => {
    SetValue((prev: BlogCreate) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-lg font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="Title"
          value={CreateValue.Title}
          onChange={(e) => HandleChange(e)}
          placeholder="Enter blog title. If you want to use AI to Generate then Give it a reasonable prompt"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="text" className="text-lg font-medium text-gray-700">
          Text
        </label>
        <textarea
          name="Text"
          id="text"
          rows={6}
          value={CreateValue.Text}
          onChange={(e) => HandleChange(e)}
          placeholder="Enter blog content. If you want to use AI to Generate then Give it a reasonable prompt"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        />
      </div>
      {/* 
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-lg font-medium text-gray-700">
            Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file:border file:border-gray-300 file:rounded-lg file:px-4 file:py-2 file:text-gray-700 file:bg-gray-50 file:hover:bg-gray-100"
          />
        </div> */}
    </>
  )
}

export default CreateBlogFields
