import { UserDetails } from '@/utils/UserInterface'
import React, { useContext, useState } from 'react'
import UserDropDown from './UserDropDown'

const ShowingUser = ({ User }: { User: UserDetails }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="relative text-white">
      <div
        className="flex items-center cursor-pointer"
        onMouseEnter={() => setDropdownOpen(true)}
      >
        <h6 className="text-base capitalize">{User.Name}</h6>
      </div>
      {dropdownOpen && <UserDropDown setDropdownOpen={setDropdownOpen} />}
    </div>
  )
}

export default ShowingUser
