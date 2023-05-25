import React, { useContext, useState } from 'react'
import { Card, Typography, Button } from '@mui/material'
import jsPDF from 'jspdf'
import { PacientContext } from 'store/pacientContext'

const Quiz = ({ onFinish }: any) => {
  const questions = [
    {
      question: 'Qual é a capital da França?',
      options: [
        { label: 'Paris', score: 2 },
        { label: 'Madrid', score: 0 },
        { label: 'Roma', score: 0 },
        { label: 'Berlim', score: 0 }
      ],
      answer: 'Paris'
    },
    {
      question: 'Qual é o maior planeta do sistema solar?',
      options: [
        { label: 'Júpiter', score: 1 },
        { label: 'Saturno', score: 0 },
        { label: 'Terra', score: 0 },
        { label: 'Netuno', score: 0 }
      ],
      answer: 'Júpiter'
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const { pacient } = useContext(PacientContext)
  console.log('teste', pacient.pacientName)

  const handleOptionSelect = (option: React.SetStateAction<string>) => {
    setSelectedOption(option)
  }

  const handleNextQuestion = () => {
    const question = questions[currentQuestion]
    const selectedOptionData = question.options.find(
      (option) => option.label === selectedOption
    )
    const optionScore = selectedOptionData ? selectedOptionData.score : 0

    setScore(score + optionScore)
    setSelectedOption('')
    setCurrentQuestion(currentQuestion + 1)

    if (currentQuestion === questions.length - 1) {
      setIsFinished(true)
      onFinish(score + optionScore)
    }
    const { pacientName, responsibleName, birthDate, gender, examiner } =
      pacient
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Resultado das perguntas', 10, 10)
    doc.text('-------------------', 10, 15)
    doc.text(`Total dde Pontos: ${score}`, 10, 20)

    doc.text('Dados do paciente', 10, 10)
    doc.text('-------------------', 10, 15)
    doc.text(`Pacient Name: ${pacientName}`, 10, 20)
    doc.text(`Responsible Name: ${responsibleName}`, 10, 25)
    doc.text(`Birth Date: ${birthDate}`, 10, 30)
    doc.text(`Gender: ${gender}`, 10, 35)
    doc.text(`Examiner: ${examiner}`, 10, 40)

    doc.save('quiz_and_form_data.pdf')
  }

  const totalScore = () => {
    if (score === 0) {
      return `Seu score é ${score}, isso significa que....`
    }
    if (score === 1) {
      return `Seu score é ${score}, isso significa que você tirou mais que 1....`
    }
    if (score === 2) {
      return `Seu score é ${score}, isso significa que você tirou mais que 2....`
    }
  }

  return (
    <Card>
      {currentQuestion < questions.length ? (
        <div>
          <Typography variant="h5" gutterBottom>
            Pergunta {currentQuestion + 1}:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {questions[currentQuestion].question}
          </Typography>
          <div>
            {questions[currentQuestion].options.map((option) => (
              <Button
                key={option.label}
                variant={
                  selectedOption === option.label ? 'contained' : 'outlined'
                }
                onClick={() => handleOptionSelect(option.label)}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <Button
            variant="contained"
            disabled={!selectedOption}
            onClick={handleNextQuestion}
          >
            Próxima Pergunta
          </Button>
        </div>
      ) : (
        <Typography variant="h5" gutterBottom>
          {totalScore()}
        </Typography>
      )}
    </Card>
  )
}

export default Quiz
