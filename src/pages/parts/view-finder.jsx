import styled, { css } from 'styled-components'
import { COLORS } from '../../consts/design-token'

/** 뷰포트의 벽면으로부터 떨어진 정도를 나타내는 상수입니다. */
const DISTANCE = '5rem'
/** 파인더 구성요소의 크기를 지정하는 상수입니다. */
const FINDER_SIZE = '8rem'
/** 파인더 구성요소의 굵기를 지정하는 상수입니다. */
const FINDER_BORDER = '0.2rem'

const ViewFinder = () => {
  return (
    <>
      <S.Bracket corner="topLeft" />
      <S.Bracket corner="topRight" />

      <S.CenterCircle></S.CenterCircle>

      <S.Bracket corner="bottomLeft" />
      <S.Bracket corner="bottomRight" />
    </>
  )
}

export default ViewFinder

const CornerCSS = {
  topLeft: css`
    top: ${DISTANCE};
    left: ${DISTANCE};
    border-bottom: ${FINDER_BORDER};
    border-right: ${FINDER_BORDER};
    box-shadow: -0.2rem -0.1rem ${COLORS.GSCALE[600]};
  `,
  topRight: css`
    top: ${DISTANCE};
    right: ${DISTANCE};
    border-bottom: ${FINDER_BORDER};
    border-left: ${FINDER_BORDER};
    box-shadow: 0.2rem -0.1rem ${COLORS.GSCALE[600]};
  `,
  bottomLeft: css`
    bottom: ${DISTANCE};
    left: ${DISTANCE};
    border-top: ${FINDER_BORDER};
    border-right: ${FINDER_BORDER};
    box-shadow: -0.1rem 0.2rem ${COLORS.GSCALE[600]};
  `,
  bottomRight: css`
    bottom: ${DISTANCE};
    right: ${DISTANCE};
    border-top: ${FINDER_BORDER};
    border-left: ${FINDER_BORDER};
    box-shadow: 0.1rem 0.2rem ${COLORS.GSCALE[600]};
  `,
}

const FinderFrame = styled.div`
  position: fixed;
  z-index: 10;
  width: ${FINDER_SIZE};
  height: ${FINDER_SIZE};
`

const Bracket = styled(FinderFrame)`
  border-style: solid;
  border-color: ${COLORS.GSCALE[0]};
  ${({ corner }) => CornerCSS[corner]}
`
const CenterCircle = styled(FinderFrame)`
  border-radius: 100rem;
  border: ${FINDER_BORDER} solid ${COLORS.GSCALE[0]};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0.2rem ${COLORS.GSCALE[600]};
`
const S = {
  Bracket,
  CenterCircle,
}
