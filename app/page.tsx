'use client'
import BlogCard from '@/components/Blog/BlogCard'
import { GettingAllBlogs } from '@/functions/Blog/GettingAll'
import { BLOG } from '@/utils/BlogInterface'
import { useEffect, useState } from 'react'

export default function Home() {
  const [AllBlogs, SetBlogs] = useState<BLOG[]>([])
  useEffect(() => {
    const GetBlogs = async () => {
      const Data = await GettingAllBlogs()
      if (Data) {
        SetBlogs(Data)
      }
    }
    GetBlogs()
  }, [])
  return (
    <div className=" flex flex-col gap-5 py-4 mx-auto ">
      {AllBlogs.map((element) => {
        return <BlogCard key={element.id} Blog={element} />
      })}
    </div>
  )
}
