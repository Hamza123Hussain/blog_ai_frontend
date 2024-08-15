import BlogCard from '@/components/Blog/BlogCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" justify-center items-center flex flex-col gap-5 py-4 ">
      <BlogCard />
      <BlogCard />
    </div>
  )
}
