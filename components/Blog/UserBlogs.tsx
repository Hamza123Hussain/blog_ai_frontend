import React, { useContext, useEffect, useState } from 'react'
import { GettingUserBlogs } from '@/functions/Blog/GettingUserBlogs'
import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import UserBlogCard from './UserBlogCard'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'

const UserBlogs = () => {
  const { userData, setloading, loading } = useContext(UserContext)
  const [UserBlogs, setBlogs] = useState<BLOG[]>([])
  const Router = useRouter()
  useEffect(() => {
    const GetUserBlogs = async () => {
      setloading(true)
      const Data = await GettingUserBlogs(userData.email)
      if (Data) {
        setBlogs(Data)
        console.log('API DATA USER :', Data)
        setloading(false)
      }
    }
    GetUserBlogs()
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <div className=" flex flex-col justify-start items-start p-4 ">
      <button
        onClick={() => Router.push('/Blog/Create')}
        className=" bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        Create A New Blog
      </button>{' '}
      <div className=" flex flex-col gap-5 py-4  ">
        {UserBlogs.map((element) => {
          return <UserBlogCard key={element.id} Blog={element} />
        })}
      </div>
    </div>
  )
}

export default UserBlogs
