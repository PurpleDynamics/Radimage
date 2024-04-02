import { Outlet } from 'react-router-dom'
import BlurCircle from './blur-circle'

const Backdrop = () => {
  return (
    <div className="w-dvw h-dvh overflow-hidden bg-red-50 relative">
      <Outlet />
      <BlurCircle theme="blue" position="left" />
      <BlurCircle theme="red" position="right" scale="small" />
      <BlurCircle theme="purple" position="bottom" scale="big" />
    </div>
  )
}

export default Backdrop