const PhotoWrapper = ({ keyword, imgId, children }) => {
  return (
    <div className="w-fit h-fit px-12 bg-gray-800 rounded-lg shadow-[2px_5px_10px_rgb(0,0,0)]">
      <div className="w-full h-16 text-white flex justify-between items-center">
        <p>id - {imgId}</p>
        <p>{keyword}</p>
      </div>
      {children}

      <div className="w-full h-10 text-white flex justify-end items-center">
        <p>RADIMAGE ▶︎</p>
      </div>
    </div>
  )
}

export default PhotoWrapper
