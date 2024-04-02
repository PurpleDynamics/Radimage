import { useEffect, useRef } from 'react'
const Gallery = () => {
  const 관찰대상 = useRef(null)
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('새로 불러오겠다.')
          return
        }
      })
    },
    {
      threshold: 0.3, // 이렇게 하면 완전히 밑에 닿아야하만 동작하는 건가요? 그런것같은데 생각처럼 잘안됩니다,,,
    },
  ) // 얘가 관찰자

  useEffect(() => {
    const target = document.querySelector('#zzz')
    console.log(target)

    io.observe(target)
  }, [])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-28 pt-28">
      <h1>tabBar</h1>
      <div className="flex flex-col items-center gap-10 overflow-y-auto">
        <img
          loading="lazy"
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />
        <img
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />
        <img
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />
        <img
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />
        <img
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />
        <img
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />
        <img
          src="https://loremflickr.com/320/240/money/?random=3"
          width="320"
          height="200"
        />

        <div ref={관찰대상} id="zzz">
          안녕하세요.
        </div>
      </div>
    </div>
  )
}
export default Gallery
