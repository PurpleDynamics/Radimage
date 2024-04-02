import { getTimeStamp } from './get-timestamp'

/**
 * @param {string} keyword
 * @param {number} arrayLength
 * @returns {{
 * id: number
 * src: string
 * }}
 */
export const getImgInfoArray = (keyword, arrayLength) => {
  const baseUrl = import.meta.env.VITE_APP_IMG_BASE_URL
  const timestamp = getTimeStamp()
  const result = []
  for (let i = 0; i < arrayLength; i++) {
    const imgId = timestamp + i
    const imgSrc = baseUrl + `${keyword}/?random=${imgId}`
    result.push({
      id: imgId,
      src: imgSrc,
    })
  }
  return result
}
