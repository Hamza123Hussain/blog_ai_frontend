'use client'
import { UpdateBlogs } from '@/functions/Blog/UpdateBlog'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const UpdateBlog = ({ params }: { params: any }) => {
  //   const [image, setImage] = useState<string | null>(null)
  const [text, setText] = useState<string>('')
  const Router = useRouter()
  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0]
  //     if (file) {
  //       const reader = new FileReader()
  //       reader.onloadend = () => {
  //         setImage(reader.result as string)
  //       }
  //       reader.readAsDataURL(file)
  //     }
  //   }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = async () => {
    const Data = await UpdateBlogs(text, params.ID)
    if (Data) {
      toast.success('BLOG UPDATED')
      Router.push('/dashboard')
    }
  }

  return (
    <div className="w-full  bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Update Blog</h2>

      <div className="mb-6">
        {/* <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Blog Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dusty-rose"
        /> */}
        {/* {image && (
          <img
            src={image}
            alt="Blog"
            className="mt-4 rounded-lg max-h-60 mx-auto"
          />
        )} */}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="text"
        >
          Blog Text
        </label>
        <textarea
          id="text"
          value={text}
          onChange={handleTextChange}
          className="w-full p-4 h-40 border border-gray-300 rounded-lg focus:outline-none focus:border-dusty-rose resize-none"
          placeholder="Update your blog text here..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-customBg text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-rose-500"
      >
        Update Blog
      </button>
    </div>
  )
}

export default UpdateBlog
