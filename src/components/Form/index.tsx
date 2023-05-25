import React, { useContext, useState } from 'react'
import { TextField, Button, MenuItem } from '@mui/material'
import { PacientContext } from 'store/pacientContext'

const Formulario = ({ onSubmit }: any) => {
  const [pacientName, setPacientName] = useState('')
  const [responsibleName, setResponsibleName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [examiner, setExaminer] = useState('')
  const { handlePacientForm } = useContext(PacientContext)
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const formData = {
      pacientName,
      responsibleName,
      birthDate,
      gender,
      examiner
    }
    handlePacientForm(formData)
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Nome do Paciente"
        value={pacientName}
        onChange={(event) => setPacientName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Nome do Responsável"
        value={responsibleName}
        onChange={(event) => setResponsibleName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Data de Nascimento"
        type="date"
        value={birthDate}
        onChange={(event) => setBirthDate(event.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        select
        label="Gênero"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Selecione</MenuItem>
        <MenuItem value="masculino">Masculino</MenuItem>
        <MenuItem value="feminino">Feminino</MenuItem>
      </TextField>
      <TextField
        label="Examinador"
        value={examiner}
        onChange={(event) => setExaminer(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </form>
  )
}

export default Formulario
