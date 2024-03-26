import styled from 'styled-components'
import BackgroundImage from './parts/background-image'
import ViewFinder from './parts/view-finder'

const HomePage = () => {
  return (
    <S.Wrapper>
      <BackgroundImage src="https://source.unsplash.com/random/" />
      <ViewFinder />
    </S.Wrapper>
  )
}

export default HomePage

const Wrapper = styled.main`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;
  background-color: black;
`

const S = {
  Wrapper,
}
