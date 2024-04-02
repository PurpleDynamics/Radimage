import { cva } from 'class-variance-authority'
const Button = ({ variant, children, ...rest }) => {
  return (
    <button className={ButtonVariant({ variant })} {...rest}>
      {children}
    </button>
  )
}

export default Button

const ButtonVariant = cva(
  'px-8 py-2 border-solid rounded-full text-center flex justify-center items-center whitespace-nowrap overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-gray-100 active:bg-gray-100 active:bg-gray-900',
        reverse: 'bg-gray-100 text-gray-900 active:bg-gray-900 active:bg-gray-100',
      },
      scale: {
        default: 'w-36 h-12 text-SM',
        big: 'w-48 h-16 text-MD',
      },
    },
    defaultVariants: {
      variant: 'default',
      scale: 'default',
    },
  },
)
