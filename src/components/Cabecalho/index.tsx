import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 16px;
  text-align: center;
`

const Cabecalho = () => (
  <HeaderContainer>
    <h1>EBAC Jobs</h1>
  </HeaderContainer>
)

export default Cabecalho
