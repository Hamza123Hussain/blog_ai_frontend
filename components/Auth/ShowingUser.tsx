import { SignOut } from '@/functions/AUTH/SignOut'
import { UserContext } from '@/utils/Context'
import { UserDetails } from '@/utils/UserInterface'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const ShowingUser = ({ User }: { User: UserDetails }) => {
  const { setUserData } = useContext(UserContext)
  const Router = useRouter()
  const ByeBye = async () => {
    try {
      const Data = await SignOut()
      if (Data) {
        setUserData('')
        Router.push('/login')
      }
    } catch (error) {
      console.log('ERROR IN FUNCTION', error)
    }
  }
  return (
    <div className=" flex gap-2 items-center   text-white">
      <h6 className=" text-base text-white capitalize">{User.Name}</h6>
      <button
        onClick={ByeBye}
        className=" bg-black sm:px-7 px-2 text-red-600 hover:text-black hover:bg-red-500 hover:border-2 hover:border-white rounded-lg"
      >
        {' '}
        Sign Out
      </button>
    </div>
  )
}

export default ShowingUser
