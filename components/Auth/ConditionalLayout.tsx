'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import LandingPage from '../LandingPage'
import { Toaster } from 'react-hot-toast'

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const { userData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)

  // Use useEffect to only set isClient on the client-side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Render the layout based on client-side state
  if (!isClient) {
    return null // or a loading spinner if preferred
  }

  return (
    <>
      {userData ? (
        <main className="flex-grow flex">
          {children}
          <Toaster />
        </main>
      ) : (
        <LandingPage />
      )}
    </>
  )
}

export default ConditionalLayout
