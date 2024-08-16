'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { CreateBlog } from '@/functions/Blog/CreatingABlog'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { CreateWithAI } from '@/functions/Blog/CallingAI'

const WriteWithAI = () => {
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
    const GetData = await CreateBlog(text, userData.Name, title, userData.email)
    if (GetData) {
      toast.success('BLOG HAS BEEN CREATED')
      Router.push('/')
    }
  }

  const CallAI = async () => {
    const Data = await CreateWithAI(title, text)
    if (Data) {
      setTitle(Data.Title)
      setText(Data.Description)
    }
  }
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to from-orange-800  to-gray-300">
        Create a New Blog With AI
      </h1>
      <div className="w-full space-y-6">
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
        <div className=" flex gap-2">
          {' '}
          <button
            onClick={CallAI}
            className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
          >
            Write With AI
          </button>
          <button
            onClick={(e: any) => handleSubmit(e)}
            className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteWithAI
