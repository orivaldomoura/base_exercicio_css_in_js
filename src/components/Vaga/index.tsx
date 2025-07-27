import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaItem = styled.li`
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
`

const VagaTitulo = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #333;
`

const VagaLink = styled.a`
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  background-color: #282c34;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background-color: #444;
  }
`

const Vaga = (props: Props) => (
  <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
)

export default Vaga
