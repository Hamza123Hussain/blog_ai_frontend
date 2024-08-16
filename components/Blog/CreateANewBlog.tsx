'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { CreateBlog } from '@/functions/Blog/CreatingABlog'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const CreateANewBlog = () => {
  const { userData } = useContext(UserContext)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const Router = useRouter()
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const GetData = await CreateBlog(text, userData.email, title)
    if (GetData) {
      toast.success('BLOG HAS BEEN CREATED')
      Router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Create a New Blog
      </h1>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="text-lg font-medium text-gray-700">
            Text
          </label>
          <textarea
            id="text"
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter blog content"
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

        <button
          type="submit"
          className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateANewBlog
