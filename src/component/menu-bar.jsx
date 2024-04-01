import ThemeSelector from './theme-selector'

const MenuBar = () => {
  return (
    <div className="w-[80%] h-28 px-20  flex items-center justify-around bg-GSCALE-100 rounded-full">
      <ThemeSelector theme={'Money'} />
      <ThemeSelector theme={'Car'} />
      <ThemeSelector theme={'City'} />
      <ThemeSelector theme={'Ocean'} />
    </div>
  )
}
export default MenuBar
