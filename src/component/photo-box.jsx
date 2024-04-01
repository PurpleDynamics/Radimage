const PhotoBox = () => {
  return (
    <>
      <div className="w-full h-16"></div>
      <div className="w-[80%] h-[40rem] bg-GSCALE-0 flex flex-col  items-center">
        <div className="flex justify-between w-[90%] px-10">
          <span className="text-GSCALE-600">#{'1'.padStart(2, '0')}</span>
          <span className="text-GSCALE-600">RADIMAGE</span>
        </div>
        <img src="https://source.unsplash.com/random/" className="w-[90%] h-[35rem]" />
        <span className="text-GSCALE-600 flex text-end">700x500</span>
      </div>
      <div className="w-full h-16"></div>
      <span className="w-[70%] h-[1px] bg-GSCALE-0" />
    </>
  )
}
export default PhotoBox
