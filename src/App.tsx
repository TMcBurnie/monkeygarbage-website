import styled from 'styled-components'

const Container = styled.div`
  color: white;
  text-align: center;
`
const PronouncedText = styled.span`
  color: coral;
  font-size: 1.5rem;
`

function App() {

  return (
    <Container>
      <PronouncedText>MonkeyGarbage.co.uk</PronouncedText> is currently under construction.
      <br />
      Please check back <PronouncedText>soon!</PronouncedText>
    </Container>
  )
}

export default App
