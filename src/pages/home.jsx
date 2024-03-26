import styled from 'styled-components'
import { Button, Spacer } from '../common'
import { COLORS } from '../consts/design-token'
import { BackgroundImage, ViewFinder } from './parts'

const HomePage = () => {
  return (
    <S.Wrapper>
      <S.BrandNameText>Radimage</S.BrandNameText>
      <Spacer h={5} />
      <S.BrandDetailText>random 과 image 의 합성어입니다.</S.BrandDetailText>
      <S.BrandDetailText>감상보시죠.! 오늘의 무작위 사진들을..</S.BrandDetailText>
      <Spacer h={2} />
      <Button>다음 사진으로..</Button>
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

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  padding: 5rem;
`

const BrandNameText = styled.h1`
  text-shadow: 0.1rem 0.1rem 0.2rem ${COLORS.GSCALE[600]};
  text-align: right;
`

const BrandDetailText = styled.h4`
  text-shadow: 0.1rem 0.1rem 0.2rem ${COLORS.GSCALE[600]};
  width: 30rem;
  height: fit-content;
  text-align: right;
  word-wrap: break-word;
`

const S = {
  Wrapper,
  BrandNameText,
  BrandDetailText,
}
