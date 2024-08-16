'use client'
import UserBlogs from '@/components/Blog/UserBlogs'
import { useRouter } from 'next/navigation'
import React from 'react'

const DashBoard = () => {
  const Router = useRouter()
  return (
    <div className=" flex flex-col justify-start items-start p-4 ">
      {' '}
      <button
        onClick={() => Router.push('/Blog/Create')}
        className=" bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        Create A New Blog
      </button>{' '}
      <UserBlogs />
    </div>
  )
}

export default DashBoard
