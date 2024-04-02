import { PendableImg } from '../component'
import { useInfinityScroll } from '../functions/hooks'
import { PhotoWrapper } from './parts/gallery'

const Gallery = () => {
  const keyword = 'space'
  const { imgInfoArray, bottomElementRef } = useInfinityScroll(keyword)
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-28 pt-28">
      <h1>tabBar</h1>
      <div className="flex flex-col justify-start items-start gap-10">
        {imgInfoArray.map((imgInfo) => {
          const imgId = imgInfo.id?.toString()
          const imgSrc = imgInfo.src
          return (
            <PhotoWrapper key={imgId} {...{ keyword, imgId }}>
              <PendableImg src={imgSrc} />
            </PhotoWrapper>
          )
        })}
        <div ref={bottomElementRef}>안녕하세요.</div>
      </div>
    </div>
  )
}
export default Gallery
