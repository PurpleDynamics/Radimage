import { useEffect, useState } from 'react'
import { PendableImgSkeleton } from '../'
/**
 * @description 이미지가 완전히 로드될 때까지, 전달받은 skeletonUI 를 출력합니다.
 * @param {string} src 이미지 경로
 * @returns
 */
const PendableImg = ({ src, ...rest }) => {
  const [pending, setPending] = useState(true)
  useEffect(() => {
    const image = new Image()
    image.onload = () => setPending(false)
    image.src = src
  }, [src])

  if (pending) {
    return <PendableImgSkeleton />
  } else {
    return (
      <img
        className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[3/2] rounded-md"
        width={360}
        height={240}
        {...{ src }}
        {...rest}
      />
    )
  }
}

export default PendableImg
