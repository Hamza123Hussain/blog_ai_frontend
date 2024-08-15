'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const Router = useRouter()
  return (
    <div className=" bg-customBg px-2 flex justify-between items-center ">
      <div className=" flex items-center gap-2">
        <Image
          src={'/Logo.png'}
          alt="Logo"
          width={50}
          height={40}
          className=" rounded-full"
        />
        <h3 className=" text-base text-white">Thought Flow</h3>
      </div>{' '}
      <button
        onClick={() => Router.push('/Signup')}
        className="bg-green-300 px-7 border-white hover:bg-white hover:text-black text-white rounded-lg   "
      >
        Login
      </button>
    </div>
  )
}

export default Navbar
