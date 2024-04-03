import { useEffect, useMemo, useRef, useState } from 'react'
import { getImgInfoArray } from '../utils'

export const useInfinityScroll = (searchKeyword, perPage) => {
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
    setImgInfoArray([])
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newArray = getImgInfoArray(searchKeyword, perPage)
            setImgInfoArray((prev) => [...prev, ...newArray])
            return
          }
        })
      },
      {
        rootMargin: '60px',
        threshold: 1,
      },
    )
  }, [searchKeyword, perPage])

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
