'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const UserContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<any>(() => {
    try {
      const storedData = localStorage.getItem('userData')
      return storedData ? JSON.parse(storedData) : [] // Initialize with empty array if no data
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return [] // Fallback to empty array if parsing fails
    }
  })
  useEffect(() => {
    // Save userData to local storage whenever it changes
    localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
