'use client'
import CreateBlogFields from '@/components/Blog/CreateBlogFields'
import Loader from '@/components/Loader'
import { getUser } from '@/functions/Blog/GettingUser'
import { UpdateBlogs } from '@/functions/Blog/UpdateBlog'
import { BlogCreate } from '@/utils/BlogCreation'
import { UserContext } from '@/utils/Context'
import { UserDetails } from '@/utils/UserInterface'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const UpdateBlog = () => {
  const { loading, setLoading, userData } = useContext(UserContext)
  const [CreateValue, SetValue] = useState<UserDetails>({
    Name: '',
    CreatedAt: '',
    email: '',
    userID: '',
    imageUrl: '',
  })
  const Router = useRouter()
  console.log('USER DATA : ', userData)

  const gETDATA = async () => {
    setLoading(true)
    const Data = await getUser(userData.userID)
    if (Data) {
      console.log('API RESPONBDED ', Data)
      SetValue((prev: UserDetails) => ({
        ...prev,
        Name: Data.Name,
        imageUrl: Data.imageUrl ? Data.imageUrl : prev.imageUrl,
      }))
      setLoading(false)
    }
  }
  useEffect(() => {
    gETDATA()
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <div className="w-full  bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Update User</h2>
      {CreateValue.Name}

      <div className=" flex gap-2 items-center mt-4">
        {' '}
        <button className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-customBg">
          Update Profile
        </button>{' '}
      </div>
    </div>
  )
}

export default UpdateBlog
