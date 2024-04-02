import { BlurCircle } from '../../component'
import PhotoBox from '../../component/photo-box'

const PhotoZone = () => {
  return (
    <div className="w-[70%] h-full pt-16 flex flex-col items-center  bg-GSCALE-500 shadow-lg text-GSCALE-0">
      <BlurCircle position={'right'} />
      <BlurCircle position={'left'} />
      <BlurCircle position={'botton'} />
      <PhotoBox />
    </div>
  )
}

export default PhotoZone
