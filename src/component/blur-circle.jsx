import { cva } from 'class-variance-authority'

const BlurCircle = ({ position }) => {
  return <div className={PositionVaraint({ position })} />
}

export default BlurCircle

const PositionVaraint = cva('w-[45rem] aspect-square blur-xl fixed rounded-full z-50', {
  variants: {
    position: {
      right: '-right-40 top-2 bg-red-500',
      left: 'top-200 -left-40 bg-blue-500',
      botton: 'right-0 -bottom-60 bg-purple-500',
    },
  },
})
