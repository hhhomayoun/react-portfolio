import React, { useState, useContext } from 'react'
import data from './data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [skill, setSkill] = useState(data)
  const [index, setIndex] = useState(0)
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <AppContext.Provider value={{ skill, index, showLinks, toggleLinks }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
