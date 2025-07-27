import styled from 'styled-components'

const HeroSection = styled.section`
  background-color: #f5f5f5;
  padding: 40px 0;
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`

const HeroTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`

const Hero = () => (
  <HeroSection>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </HeroSection>
)

export default Hero
