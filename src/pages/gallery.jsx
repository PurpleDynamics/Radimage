import { useState } from 'react'
import { PendableImg, TabBar } from '../component'
import { useInfinityScroll } from '../functions/hooks'
import { PhotoWrapper } from './parts/gallery'

const Gallery = () => {
  const tabArray = ['Space', 'Galaxy', 'Aurora', 'Cat', 'Flower', 'Piano']
  const [focusIdx, setFocusIdx] = useState(0)
  const keyword = tabArray[focusIdx]
  const { imgInfoArray, bottomElementRef } = useInfinityScroll(keyword)

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-28 pt-28">
      <h1>tabBar</h1>
      <TabBar {...{ focusIdx, setFocusIdx, tabArray }} />
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
