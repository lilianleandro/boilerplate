import React, { useState } from 'react'
import { Button } from '@mui/material'
import jsPDF from 'jspdf'
import Formulario from 'components/Form'
import Quiz from 'components/Quizz'
import { PacientProvider } from 'store/pacientContext'

export default function Teste() {
  const [formData, setFormData] = useState(null)
  const [quizScore, setQuizScore] = useState(null)

  const handleGeneratePDF = () => {
    if (formData && quizScore !== null) {
      const combinedData = {
        formData,
        quizScore
      }

      const doc = new jsPDF()
      doc.text('Dados do Formulário:', 10, 10)
      doc.text(JSON.stringify(combinedData), 10, 20)
      doc.save('dados.pdf')
    }
  }

  const handleFormSubmit = (data: React.SetStateAction<null>) => {
    setFormData(data)
  }

  const handleQuizFinish = (score: React.SetStateAction<null>) => {
    setQuizScore(score)
  }

  return (
    <>
      <PacientProvider>
        <Formulario onSubmit={handleFormSubmit} />
        <Quiz onFinish={handleQuizFinish} />
        <Button
          variant="contained"
          onClick={handleGeneratePDF}
          disabled={!formData || quizScore === null}
        >
          Gerar PDF
        </Button>
      </PacientProvider>
    </>
  )
}
