'use client'
import CommentCard from '@/components/Blog/CommentCard'
import SingleCard from '@/components/Blog/SingleCard'
import Loader from '@/components/Loader'
import { Addcomment } from '@/functions/Blog/AddingComment'
import { GETDoc } from '@/functions/Blog/GettingDoc'
import { BLOG, CommentData } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { Trash2Icon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const BlogWithComments = ({ params }: { params: any }) => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [element, SetBlog] = useState<BLOG>()
  const [comment, setComment] = useState('')
  const [flag, setflag] = useState(false)
  console.log('USER DATA ', userData)
  const gETDATA = async () => {
    setLoading(true)
    const Data = await GETDoc(params.ID)
    if (Data) {
      SetBlog(Data)
      setLoading(false)
    }
  }
  const handleAddComment = async () => {
    toast.success('Comment added successfully')
    const data = await Addcomment(comment, userData.userID, params.ID)
    if (data) {
      setflag(!flag)
      setComment('')
    }
  }
  useEffect(() => {
    gETDATA()
  }, [flag])

  if (loading) {
    return <Loader />
  }
  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Update Blog</h2>
      <SingleCard element={element} />
      <div className="flex flex-col gap-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          rows={1}
          className="w-full p-2 border border-gray-300 rounded-lg resize-none"
        />
        <div className="flex gap-4">
          {' '}
          <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">
            Generate Comment with AI
          </button>
          <button
            onClick={handleAddComment}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Comment
          </button>
        </div>
        {element?.comments.map((comment: CommentData) => {
          return <CommentCard key={comment.CommentID} comment={comment} />
        })}
      </div>
    </div>
  )
}

export default BlogWithComments
