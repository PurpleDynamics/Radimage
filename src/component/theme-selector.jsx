/**
 *  @param theme string : 보고싶은 사진의 theme
 */

const ThemeSelector = ({ theme }) => {
  return (
    <div className="group w-56 h-[80%] flex items-center justify-center rounded-full bg-inherit  cursor-pointer hover:bg-GSCALE-0">
      <h3 className=" text-GSCALE-0 font-bold group-hover:text-GSCALE-600">{theme}</h3>
    </div>
  )
}
export default ThemeSelector
