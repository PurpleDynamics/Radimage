import MenuBar from '../component/menu-bar'
import { PhotoZone } from './parts'

const Gallery = () => {
  return (
    <div className="w-[100rem] h-fit pt-32 flex flex-col items-center justify-start">
      <MenuBar />
      <div className="w-full h-24"></div>
      <PhotoZone />
    </div>
  )
}
export default Gallery
