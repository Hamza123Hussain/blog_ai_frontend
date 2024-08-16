import React, { useContext, useEffect, useState } from 'react'
import { GettingUserBlogs } from '@/functions/Blog/GettingUserBlogs'
import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import UserBlogCard from './UserBlogCard'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'

const UserBlogs = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [UserBlogs, setBlogs] = useState<BLOG[]>([])
  const Router = useRouter()
  useEffect(() => {
    const GetUserBlogs = async () => {
      setLoading(true)
      const Data = await GettingUserBlogs(userData.email)
      if (Data) {
        setBlogs(Data)
        console.log('API DATA USER :', Data)
        setLoading(false)
      }
    }
    GetUserBlogs()
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <div className=" flex flex-col justify-start items-start p-4 ">
      <div className=" flex gap-2">
        {' '}
        <button
          onClick={() => Router.push('/Blog/Create')}
          className=" bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Create A New Blog
        </button>{' '}
        <button
          onClick={() => Router.push('/Blog/AI')}
          className=" bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          Write Blog With AI
        </button>{' '}
      </div>
      <div className=" flex flex-col gap-5 py-4  ">
        {UserBlogs.map((element) => {
          return <UserBlogCard key={element.id} Blog={element} />
        })}
      </div>
    </div>
  )
}

export default UserBlogs
