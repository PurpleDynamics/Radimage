import { tm } from '../../libs/tailwind-css/tailwind-merge'

const TabBar = ({ focusIdx, setFocusIdx, tabArray }) => {
  return (
    <ul className="relative flex justify-around items-center w-fit h-fit px-8 py-5 bg-gray-400 rounded-3xl gap-2 md:gap-6 lg:gap-10 transition-colors">
      {tabArray?.map((tabText, idx) => (
        <li
          key={idx}
          className={tm(
            'flex justify-center items-center w-20 sm-24 text-xl lg:w-24 lg:text-2xl text-center rounded-xl cursor-pointer transition-colors',
            focusIdx === idx ? 'bg-gray-200 text-black' : 'bg-transparent text-white',
          )}
          onClick={() => {
            setFocusIdx(idx)
          }}>
          {tabText}
        </li>
      ))}
    </ul>
  )
}
export default TabBar
