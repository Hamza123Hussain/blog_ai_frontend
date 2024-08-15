import BlogCard from '@/components/Blog/BlogCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex flex-col gap-5 py-4 mx-auto ">
      <BlogCard />
      <BlogCard />
    </div>
  )
}
