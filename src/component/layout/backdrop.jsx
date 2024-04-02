import { Outlet } from 'react-router-dom'
import BlurCircle from './blur-circle'

const Backdrop = () => {
  return (
    <div className="w-full h-dvh relative">
      <Outlet />
      <BlurCircle theme="blue" position="left" />
      <BlurCircle theme="red" position="right" scale="small" />
      <BlurCircle theme="purple" position="bottom" scale="big" />
    </div>
  )
}

export default Backdrop
