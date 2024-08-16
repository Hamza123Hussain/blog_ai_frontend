import React, { useContext, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { GettingUserBlogs } from '@/functions/Blog/GettingUserBlogs'
import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import UserBlogCard from './UserBlogCard'

const UserBlogs = () => {
  const { userData } = useContext(UserContext)
  const [UserBlogs, setBlogs] = useState<BLOG[]>([])

  useEffect(() => {
    const GetUserBlogs = async () => {
      const Data = await GettingUserBlogs(userData.email)
      if (Data) {
        setBlogs(Data)
        console.log('API DATA USER :', Data)
      }
    }
    GetUserBlogs()
  }, [])

  return (
    <div className=" flex flex-col gap-5 py-4  ">
      {UserBlogs.map((element) => {
        return <UserBlogCard key={element.id} Blog={element} />
      })}
    </div>
  )
}

export default UserBlogs
