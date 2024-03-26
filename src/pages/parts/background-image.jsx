import styled from 'styled-components'
import { COLORS } from '../../consts/design-token'
const BackgroundImage = ({ ...rest }) => {
  return (
    <S.ImageContainer>
      <S.FullSizedImage {...rest} />
    </S.ImageContainer>
  )
}
export default BackgroundImage

const ImageContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;

  background-color: ${COLORS.GSCALE[600]};
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`

const FullSizedImage = styled.img`
  width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;
  object-fit: contain;
`

const S = {
  ImageContainer,
  FullSizedImage,
}
