'use client'
import { createContext, ReactNode, useState } from 'react'

export const UserContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<any[]>()

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
