function setBobyClassnameFixed(isSetFixed = null) {
  let top = -window.pageYOffset

  function clearFixed() {
    document.body.className = ''
    window.scrollTo(0, Number(document.body.style.top.split('px')[0]) * (-1))
    document.body.style.top = '0'
  }

  function setFixed() {
    document.body.className = 'fixed'
    document.querySelector('.fixed').style.top = top + 'px'
  }

  if (typeof isSetFixed === "boolean") {
    isSetFixed ? setFixed() : clearFixed()
  } else {
    if (  document.body.classList.contains('fixed')) {
      clearFixed()
    } else {
      setFixed()
    }
  }

}

export default setBobyClassnameFixed