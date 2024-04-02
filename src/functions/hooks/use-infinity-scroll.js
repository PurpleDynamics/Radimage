import { useEffect, useMemo, useRef, useState } from 'react'
import { getImgInfoArray } from '../utils'

export const useInfinityScroll = (searchKeyword) => {
  /**
   * @info 배열에는 아래와 같은 타입의 객체가 담깁니다.
   * {
   *  id: number
   *  src: string
   * }
   */
  const [imgInfoArray, setImgInfoArray] = useState([])

  const bottomElementRef = useRef(null)

  const intersectionObserver = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newArray = getImgInfoArray(searchKeyword, 5)
            setImgInfoArray((prev) => [...prev, ...newArray])
            return
          }
        })
      },
      {
        threshold: 0.3,
      },
    )
  }, [])

  useEffect(() => {
    if (bottomElementRef === null || !bottomElementRef.current) return
    const target = bottomElementRef.current
    intersectionObserver.observe(target)

    return () => {
      intersectionObserver.disconnect(bottomElementRef)
    }
  }, [bottomElementRef, intersectionObserver])

  return { imgInfoArray, bottomElementRef }
}
