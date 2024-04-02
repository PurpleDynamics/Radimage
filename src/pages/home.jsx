import { useNavigate } from 'react-router-dom'
import { Button } from '../component'

const Home = () => {
  const navigate = useNavigate()
  const onClickButton = () => navigate('/gallery')

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <h1>🌠 Radimage</h1>
      <p>오늘의 사진을 관람해보세요.</p>
      <Button onClick={onClickButton}>전시관으로 ＞</Button>
    </div>
  )
}

export default Home
