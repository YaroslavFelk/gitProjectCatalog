const reformatPriceNumber = (num) => {
  let string = num.toString()
  return string.slice(0, -3) + ' ' + string.slice(-3)
}

export default reformatPriceNumber