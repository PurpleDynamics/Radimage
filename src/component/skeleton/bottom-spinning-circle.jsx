import { forwardRef } from 'react'

const BottomSpinningCircle = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-[280px] md:w-[320px] lg:w-[360px] h-96 flex justify-center items-start">
      <div className="w-32 h-32 bg-transparent border-8 rounded-full border-gray-300 border-t-white animate-spin flex justify-center items-start" />
    </div>
  )
})
BottomSpinningCircle.displayName = 'bottomSpinningCircle'
export default BottomSpinningCircle
