import { UserDetails } from '@/utils/UserInterface'
import React from 'react'

const ShowingUser = ({ User }: { User: UserDetails }) => {
  return (
    <div className=" flex gap-2 items-center   text-white">
      <h6 className=" text-base text-white capitalize">{User.Name}</h6>
      <button className=" bg-black sm:px-7 px-2 text-red-600 hover:text-black hover:bg-red-500 hover:border-2 hover:border-white rounded-lg">
        {' '}
        Sign Out
      </button>
    </div>
  )
}

export default ShowingUser
