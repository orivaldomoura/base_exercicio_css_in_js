import { FormEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin: 20px auto;
  max-width: 600px;
`

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  background-color: #282c34;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #444;
  }
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  )
}

export default FormVagas
