'use client'
import BlogCard from '@/components/Blog/BlogCard'
import LandingPage from '@/components/LandingPage'
import Loader from '@/components/Loader'
import { GettingAllBlogs } from '@/functions/Blog/GettingAll'
import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const [AllBlogs, SetBlogs] = useState<BLOG[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const GetBlogs = async () => {
      setLoading(true)
      const Data = await GettingAllBlogs()
      try {
        if (Data) {
          setLoading(false)
          SetBlogs(Data)
        }
      } catch (error) {
        setLoading(false)
        console.log('FUNCTION ERROR ', error)
      }
    }
    GetBlogs()
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <div className=" flex flex-col gap-5 py-4 mx-auto ">
      {AllBlogs.map((element) => {
        return <BlogCard key={element.id} Blog={element} />
      })}
    </div>
  )
}
