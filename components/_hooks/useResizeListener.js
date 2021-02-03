import * as React from "react"

const useResizeListener = (size, setIsMobile, bodyClassName = '') => {
    React.useEffect(() => {
      window.addEventListener('resize',  () => setIsMobile(window.innerWidth < size))
      if (window.innerWidth > size) {
        document.body.className = bodyClassName
      }
      setIsMobile(window.innerWidth < size)
    }, [])
}

export default useResizeListener;