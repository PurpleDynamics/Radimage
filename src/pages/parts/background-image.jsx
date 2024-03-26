import styled from 'styled-components'
const BackgroundImage = ({ ...rest }) => {
  return <S.FullSizedImage {...rest} />
}
export default BackgroundImage

const FullSizedImage = styled.img`
  width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;
  object-fit: contain;
`

const S = {
  FullSizedImage,
}
