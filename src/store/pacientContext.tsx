import teste from 'pages/teste'
import { createContext, useState } from 'react'

export const PacientContext = createContext<any>(null)

export const PacientProvider = ({ children }: any) => {
  const [pacient, setPacient] = useState({})

  const handlePacientForm = (value: string) => {
    setPacient(value)
  }

  return (
    <PacientContext.Provider value={{ handlePacientForm, pacient }}>
      {children}
    </PacientContext.Provider>
  )
}
