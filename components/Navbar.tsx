import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" bg-customBg px-2 flex justify-between items-center">
      <div className=" flex items-center gap-2">
        <Image
          src={'/Logo.png'}
          alt="Logo"
          width={50}
          height={40}
          className=" rounded-full"
        />
        <h3 className=" text-base bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-500">
          Thought Flow
        </h3>
      </div>{' '}
      <button className="bg-green-300 px-7 border-white hover:bg-white hover:text-black text-white rounded-lg   ">
        Login
      </button>
    </div>
  )
}

export default Navbar
