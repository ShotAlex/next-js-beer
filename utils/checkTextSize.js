export const checkTextSize = (str) => {
  if (str.length > 140) {
    return str.substring(0, 140) + '...'
  }

  return str
}