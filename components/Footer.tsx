import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500 py-1 border-t border-black  shadow-md px-2">
      <div className="text-center flex  flex-col sm:flex-row  justify-between items-center ">
        {' '}
        <div className="flex  items-center">
          <Image
            src={'/Logo.png'}
            alt="Logo"
            width={30}
            height={30}
            className=" rounded-full"
          />
          <h4 className="text-xs font-bold mb-2">Thought Flow</h4>
        </div>
        <p className=" text-xs">
          &copy; {new Date().getFullYear()} Thought Flow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
