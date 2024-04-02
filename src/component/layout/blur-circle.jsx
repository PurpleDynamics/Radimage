import { cva } from 'class-variance-authority'

const BlurCircle = ({ theme, scale = 'default', position }) => {
  return <div className={BlurCircleVariant({ theme, scale, position })} />
}

export default BlurCircle

const BlurCircleVariant = cva('aspect-square blur-xl fixed rounded-full z-[-1]', {
  variants: {
    theme: {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
    },
    scale: {
      default: 'w-64',
      small: 'w-52',
      big: 'w-96',
    },
    position: {
      right: '-right-10 top-2',
      left: 'top-0 -left-10',
      bottom: 'right-0 -bottom-10',
    },
  },
})
