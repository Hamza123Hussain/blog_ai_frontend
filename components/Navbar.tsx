import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" bg-customBg px-2 text-black flex justify-between">
      <div className=" flex items-center gap-2">
        <Image
          src={'/Logo.png'}
          alt="Logo"
          width={50}
          height={50}
          className=" rounded-full"
        />
      </div>
    </div>
  )
}

export default Navbar
